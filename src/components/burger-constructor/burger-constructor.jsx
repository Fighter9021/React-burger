import React from 'react';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';
import PropTypes from 'prop-types';
import { IngredientType } from '../../prop-types.js';
import styles from './burger-constructor.module.css';

export default function BurgerConstructor(props) {

    const bun = React.useMemo(
        () => {
            return props.ingredients.find(x => x.type === "bun")
        },
        [props.ingredients]
    );

    const ingredients = React.useMemo(
        () => {
            return props.ingredients.filter(x => x.type !== "bun")
        },
        [props.ingredients]
    );

    const totalPrice = React.useMemo(
        () => {
            const result = props.ingredients.reduce((sum, element) => sum + element.price, 0);
            const bun = props.ingredients.filter(x => x.type === "bun");
            if (bun.length > 0)
            {
                // Если среди ингредиентов есть булка, то добавляем ее цену еще раз 
                // (считаем отдельно верхнюю и нижнюю)
                return result + bun[0].price;
            }
            return result;
        },
        [props.ingredients]
    );

    const handleOrderButtonClick = () => {
        props.setModal({
            isVisible: true, 
            content: <OrderDetails/>
        });
    }

    return (
        <div className={styles.container}>
            {bun && 
            <ConstructorElement
                text={bun.name + " (верх)"}
                type="top"
                isLocked={true}
                price={bun.price}
                thumbnail={bun.image_mobile}
                extraClass="mb-4"
            />}
            <div className={styles.constructor}>
                {ingredients.map((ingredient) => (
                    <ConstructorElement
                        key={ingredient.uniqId}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image_mobile}
                        handleClose={() => props.removeIngredient(ingredient.uniqId)}
                    />
                ))}
            </div>
            {bun && 
            <ConstructorElement
                text={bun.name + " (низ)"}
                type="bottom"
                isLocked={true}
                price={bun.price}
                thumbnail={bun.image_mobile}
                extraClass="mt-4"
            />}
            <div className={styles.order}>
                <Price large={true} price={totalPrice}/>
                <Button type="primary" size="large" htmlType="button" onClick={handleOrderButtonClick}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientType.isRequired).isRequired,
    removeIngredient: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired
};

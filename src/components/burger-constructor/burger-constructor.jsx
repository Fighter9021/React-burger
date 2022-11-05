import React from 'react';
import { ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';
import PropTypes from 'prop-types';
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
            return props.ingredients.reduce((sum, element) => sum + element.price, 0)
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
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number,
        uniqId: PropTypes.string
    })).isRequired,
    removeIngredient: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired
};

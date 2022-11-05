import { ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import Price from '../price/price';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';

export default function BurgerConstructor(props) {

    const getBun = () => {
        return (
            props.ingredients.find(x => x.type === "bun")
        );
    }

    const renderBun = (bun, type, extraClass) => {
        return (
            <ConstructorElement
                text={bun.name}
                type={type}
                isLocked={true}
                price={bun.price}
                thumbnail={bun.image_mobile}
                extraClass={extraClass}
            />
        );
    }

    const renderTopBun = () => {
        const bun = getBun();

        return (
            <>
            {(bun !== undefined) && renderBun(bun, "top", "mb-4")}
            </>
        );
    }

    const renderBottomBun = () => {
        const bun = getBun();

        return (
            <>
            {(bun !== undefined) && renderBun(bun, "bottom", "mt-4")}
            </>
        );
    }

    const renderIngredient = (ingredient) => {
        return (
            <ConstructorElement
                key={ingredient.uniqId}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
                handleClose={() => props.removeIngredient(ingredient.uniqId)}
            />
        );
    }

    return (
        <div className={["mt-25", styles.container].join(' ')}>
            {renderTopBun()}
            <div className={styles.constructor}>
                {props.ingredients.map((ingredient) => (
                    (ingredient.type !== "bun") && renderIngredient(ingredient)
                ))}
            </div>
            {renderBottomBun()}
            <div className={styles.order}>
                <Price large={true} price={props.ingredients.reduce((sum, element) => sum + element.price, 0)}/>
                <Button type="primary" size="large" htmlType="button" onClick={() => props.setModal({isVisible: true, content: <OrderDetails/>})}>
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

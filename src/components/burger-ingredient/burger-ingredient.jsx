import React from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../price/price';
import styles from './burger-ingredient.module.css';
import PropTypes from 'prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details';


export default function BurgerIngredient(props) {    
    const addIngredient = () => {
        props.addIngredient(props.ingredient);
    }

    return (
        <div className={styles.container}>
            {props.count !== 0 && 
            <div className={styles.counter}>
                <Counter count={props.count} size="default" />
            </div>}
            <img src={props.ingredient.image} alt="Ingredient" className={styles.image} onClick={() => addIngredient()}/>
            <Price price={props.ingredient.price} />
            <div className={styles.name} onClick={() => props.setModal({isVisible: true, content: <IngredientDetails ingredient={props.ingredient}/>})}>{props.ingredient.name}</div>
        </div>
    );
}

BurgerIngredient.propTypes = {
    ingredient: PropTypes.shape({
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
		__v: PropTypes.number
    }).isRequired,
    count: PropTypes.number.isRequired,
    setModal: PropTypes.func.isRequired
};
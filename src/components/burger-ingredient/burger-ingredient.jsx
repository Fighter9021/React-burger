import React from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../price/price';
import styles from './burger-ingredient.module.css';
import PropTypes from 'prop-types';
import { IngredientType } from '../../prop-types.js';
import IngredientDetails from '../ingredient-details/ingredient-details';


export default function BurgerIngredient(props) {    
    const addIngredient = () => {
        props.addIngredient(props.ingredient);
    }

    const handleIngredientDetailsClick = () => {
        props.setModal({
            isVisible: true, 
            content: <IngredientDetails ingredient={props.ingredient}/>
        });
    }

    return (
        <div className={styles.container} onClick={handleIngredientDetailsClick}>
            {props.count !== 0 && 
            <div className={styles.counter}>
                <Counter count={props.count} size="default" />
            </div>}
            <img src={props.ingredient.image} alt="Ingredient" className={styles.image}/>
            <Price price={props.ingredient.price} />
            <div className={styles.name}>{props.ingredient.name}</div>
        </div>
    );
}

BurgerIngredient.propTypes = {
    ingredient: PropTypes.shape({IngredientType}).isRequired,
    count: PropTypes.number.isRequired,
    setModal: PropTypes.func.isRequired
};
import React from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import PropTypes from 'prop-types';
import styles from './ingredients-list.module.css';
import { IngredientType } from '../../prop-types';

export default function IngredientsList(props) {
    return (
        <>
            <h2 className={styles.title} ref={props.titleRef}>{props.title}</h2>
            <div className={styles.ingredients}>
                {props.ingredients.map((ingredient) => (
                    <BurgerIngredient 
                        ingredient={ingredient}
                        count={props.selectedIngredients.filter(x => x._id === ingredient._id).length}
                        key={ingredient._id}
                        setModal={props.setModal}
                        addIngredient={props.addIngredient}/>
                ))}
            </div>
        </>
    );
}

IngredientsList.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(IngredientType.isRequired).isRequired,
    selectedIngredients: PropTypes.arrayOf(IngredientType.isRequired).isRequired,
    setModal: PropTypes.func.isRequired,
    addIngredient: PropTypes.func.isRequired,
    titleRef: PropTypes.any.isRequired
};
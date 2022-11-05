import React from 'react';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import PropTypes from 'prop-types';
import styles from './ingredients-list.module.css';

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
		__v: PropTypes.number
    })).isRequired,
    selectedIngredients: PropTypes.arrayOf(PropTypes.shape({
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
        uniqId: PropTypes.string.isRequired
    })).isRequired,
    setModal: PropTypes.func.isRequired,
    addIngredient: PropTypes.func.isRequired,
    titleRef: PropTypes.any.isRequired
};
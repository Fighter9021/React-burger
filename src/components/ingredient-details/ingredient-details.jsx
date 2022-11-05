import React from 'react';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css'

export default function IngredientDetails(props) {
    return (
		<div className={styles.container}>
			<h1 className={styles.title}>Детали ингредиента</h1>
			<div className={styles.ingredient}>
				<img src={props.ingredient.image_large}/>
				<h2 className={styles.name}>{props.ingredient.name}</h2>
				<ul className={styles.calories}>
                    <IngredientCalories name="Калории, ккал" value={props.ingredient.calories}/>
                    <IngredientCalories name="Белки, г" value={props.ingredient.proteins}/>
                    <IngredientCalories name="Жиры, г" value={props.ingredient.fat}/>
                    <IngredientCalories name="Углеводы, г" value={props.ingredient.carbohydrates}/>
				</ul>
			</div>
		</div>
	);
}

IngredientDetails.propTypes = {
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
	}).isRequired
};
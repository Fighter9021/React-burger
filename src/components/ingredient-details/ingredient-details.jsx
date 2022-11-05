import React from 'react';
import IngredientCalories from '../ingredient-calories/ingredient-calories';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css'
import { IngredientType } from '../../prop-types';

export default function IngredientDetails(props) {
    return (
		<div className={styles.container}>
			<h1 className={styles.title}>Детали ингредиента</h1>
			<div className={styles.ingredient}>
				<img src={props.ingredient.image_large} alt="ingredient"/>
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
	ingredient: PropTypes.shape({IngredientType}).isRequired
};
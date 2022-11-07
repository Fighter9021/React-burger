import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-calories.module.css'

export default function IngredientCalories(props) {
    return (
        <li className={styles.container}>
			<p className={styles.title}>{props.name}</p>
			<span className={styles.value}>{props.value}</span>
		</li>
    );
}

IngredientCalories.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};
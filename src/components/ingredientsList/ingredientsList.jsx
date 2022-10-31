import React from 'react';
import BurgerIngredient from '../burgerIngredient/burgerIngredient';
import styles from './ingredientsList.module.css';

export default function IngredientsList(props) {
    return (
        <>
            <h2 className="text text_type_main-medium mb-6 mt-10" ref={props.titleRef}>{props.title}</h2>
            <div className={styles.ingredients}>
                {props.ingredients.map((ingredient) => (
                    <BurgerIngredient ingredient={ingredient} key={ingredient._id}/>
                ))}
            </div>
        </>
    )
}
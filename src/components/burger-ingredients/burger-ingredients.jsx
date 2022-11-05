import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState("buns");

    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    const executeScroll = (ref, state) => {
        setCurrent(state);
        ref.current.scrollIntoView();
    }

    const bunIngredients = props.ingredients.filter(x => x.type === "bun");
    const mainIngredients = props.ingredients.filter(x => x.type === "main");
    const sauceIngredients = props.ingredients.filter(x => x.type === "sauce");

    const bunSelectedIngredients = props.selectedIngredients.filter(x => x.type === "bun");
    const mainSelectedIngredients = props.selectedIngredients.filter(x => x.type === "main");
    const sauceSelectedIngredients = props.selectedIngredients.filter(x => x.type === "sauce");

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tabs}>
                <Tab value="buns" active={current==="buns"} onClick={() => executeScroll(bunRef, "buns")}>Булки</Tab>
                <Tab value="sauces" active={current==="sauces"} onClick={() => executeScroll(sauceRef, "sauces")}>Соусы</Tab>
                <Tab value="fillings" active={current==="fillings"} onClick={() => executeScroll(mainRef, "fillings")}>Начинки</Tab>
            </div>
            <div className={styles.scrollable}>
                <IngredientsList title="Булки" ingredients={bunIngredients} selectedIngredients={bunSelectedIngredients} titleRef={bunRef} setModal={props.setModal} addIngredient={props.addIngredient}/>
                <IngredientsList title="Соусы" ingredients={sauceIngredients} selectedIngredients={sauceSelectedIngredients} titleRef={sauceRef} setModal={props.setModal} addIngredient={props.addIngredient}/>
                <IngredientsList title="Начинки" ingredients={mainIngredients} selectedIngredients={mainSelectedIngredients} titleRef={mainRef} setModal={props.setModal} addIngredient={props.addIngredient}/>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
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
    selectedIngredients: PropTypes.array.isRequired,
    addIngredient: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired
};
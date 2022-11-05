import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import { IngredientType } from '../../prop-types';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState("buns");

    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    const executeScroll = (ref, state) => {
        setCurrent(state);
        ref.current.scrollIntoView();
    }

    const bunIngredients = React.useMemo(
        () => { 
            return props.ingredients.filter(x => x.type === "bun")
        },
        [props.ingredients]
    );
    const mainIngredients = React.useMemo(
        () => {
            return props.ingredients.filter(x => x.type === "main")
        }, 
        [props.ingredients]
    );
    const sauceIngredients = React.useMemo(
        () => {
            return props.ingredients.filter(x => x.type === "sauce")
        }, 
        [props.ingredients]
    );

    const bunSelectedIngredients = React.useMemo(
        () => {
            return props.selectedIngredients.filter(x => x.type === "bun")
        }, 
        [props.selectedIngredients]
    );
    const mainSelectedIngredients = React.useMemo(
        () => {
            return props.selectedIngredients.filter(x => x.type === "main")
        }, 
        [props.selectedIngredients]
    );
    const sauceSelectedIngredients = React.useMemo(
        () => {
            return props.selectedIngredients.filter(x => x.type === "sauce")
        }, 
        [props.selectedIngredients]
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tabs}>
                <Tab value="buns" active={current==="buns"} onClick={(value) => executeScroll(bunRef, value)}>Булки</Tab>
                <Tab value="sauces" active={current==="sauces"} onClick={(value) => executeScroll(sauceRef, value)}>Соусы</Tab>
                <Tab value="fillings" active={current==="fillings"} onClick={(value) => executeScroll(mainRef, value)}>Начинки</Tab>
            </div>
            <div className={styles.scrollable}>
                <IngredientsList
                    title="Булки"
                    ingredients={bunIngredients}
                    selectedIngredients={bunSelectedIngredients}
                    titleRef={bunRef}
                    setModal={props.setModal}
                    addIngredient={props.addIngredient}/>
                <IngredientsList 
                    title="Соусы"
                    ingredients={sauceIngredients}
                    selectedIngredients={sauceSelectedIngredients}
                    titleRef={sauceRef}
                    setModal={props.setModal}
                    addIngredient={props.addIngredient}/>
                <IngredientsList
                    title="Начинки"
                    ingredients={mainIngredients}
                    selectedIngredients={mainSelectedIngredients}
                    titleRef={mainRef}
                    setModal={props.setModal}
                    addIngredient={props.addIngredient}/>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientType.isRequired).isRequired,
    selectedIngredients: PropTypes.array.isRequired,
    addIngredient: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired
};
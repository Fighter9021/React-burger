import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';
import IngredientsList from '../ingredientsList/ingredientsList';

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

    return (
        <div className={["mt-10 mr-10", styles.container].join(' ')}>
            <h1 className="mb-5 text text_type_main-large">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="buns" active={current==="buns"} onClick={() => executeScroll(bunRef, "buns")}>Булки</Tab>
                <Tab value="sauces" active={current==="sauces"} onClick={() => executeScroll(sauceRef, "sauces")}>Соусы</Tab>
                <Tab value="fillings" active={current==="fillings"} onClick={() => executeScroll(mainRef, "fillings")}>Начинки</Tab>
            </div>
            <div className={styles.scrollable}>
                <IngredientsList title="Булки" ingredients={bunIngredients} titleRef={bunRef} />
                <IngredientsList title="Соусы" ingredients={sauceIngredients} titleRef={sauceRef} />
                <IngredientsList title="Начинки" ingredients={mainIngredients} titleRef={mainRef} />
            </div>
        </div>
    )
}
import React from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredient.module.css'
import Price from '../price/price';


export default function BurgerIngredient(props) {
    const [count, setCount] = React.useState(0)
    
    return (
        <div className={["ml-4 mb-8", styles.container].join(' ')}>
            {count !== 0 && 
            <div className={styles.counter}>
                <Counter count={count} size="default" />
            </div>}
            <img src={props.ingredient.image} alt="Ingredient" className="ml-4 mr-4" onClick={() => setCount(prev => prev+1)}/>
            <Price price={props.ingredient.price} />
            <div className="text text_type_main-default">{props.ingredient.name}</div>
        </div>
    )
}
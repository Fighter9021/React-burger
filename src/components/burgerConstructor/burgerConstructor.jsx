import { useState, useEffect } from 'react';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Price from '../price/price';
import styles from './burgerConstructor.module.css';

export default function BurgerConstructor(props) {
    const [ingredients, setIngredients] = useState(props.ingredients)

    return (
        <div className={["mt-25", styles.container].join(' ')}>
            <div className={styles.constructor}>
                {ingredients.map((ingredient) => (
                    <ConstructorElement
                    key={ingredient._id}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                />
                ))}
            </div>
            <div className={styles.order}>
                <Price large={true} price={ingredients.reduce((sum, element) => sum + element.price, 0)}/>
                <Button type="primary" size="large" htmlType="button">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

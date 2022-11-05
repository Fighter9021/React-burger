import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './constructor.module.css';

export default function Constructor() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [ingredients, setIngredients] = React.useState([]);

    const [selectedIngredients, setSelectedIngredients] = React.useState([]);
    const [modal, setModal] = React.useState({ isVisible: false, content: null});

    const url = "https://norma.nomoreparties.space/api/ingredients";

    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setIngredients(result.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
	}, [])

    const getUniqId = () => {
        return "id" + Math.random().toString(16).slice(2);
    }

    const addIngredient = (ingredient) => {
        if (ingredient.type === "bun" && selectedIngredients.find(x => x.type === "bun")) {
            // если добавляемый ингредиент - булка, и среди добавленных уже есть булка, то ничего не добавляем
        }
        else {
            setSelectedIngredients([...selectedIngredients, {...ingredient, uniqId: getUniqId()}]);
        }
    }

    const removeIngredient = (ingredientUniqId) => {
        setSelectedIngredients(selectedIngredients.filter(x => x.uniqId !== ingredientUniqId));
    }

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <div className={styles.container}>
                <BurgerIngredients ingredients={ingredients} selectedIngredients={selectedIngredients} setModal={setModal} addIngredient={addIngredient}/>
                <BurgerConstructor ingredients={selectedIngredients} setModal={setModal} removeIngredient={removeIngredient}/>
            </div>
            {modal.isVisible && <Modal children={modal.content} setModal={setModal}/>}
        </>
        );
    }
}
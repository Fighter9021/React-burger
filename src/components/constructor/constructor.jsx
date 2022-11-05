import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import styles from './constructor.module.css';
import { BASE_API_URL } from '../../utils/constants';
import { checkReponse } from '../../utils/fetchHelper';
import { getUniqId } from '../../utils/common';

export default function Constructor() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [ingredients, setIngredients] = React.useState([]);

    const [selectedIngredients, setSelectedIngredients] = React.useState([]);
    const [modal, setModal] = React.useState({ isVisible: false, content: null});

    const url = `${BASE_API_URL}/ingredients`;

    React.useEffect(() => {
        fetch(url)
            .then(checkReponse)
            .then((result) => {
                setIngredients(result.data);
                setSelectedIngredients([
                    {...result.data[0], uniqId: getUniqId()},
                    {...result.data[8], uniqId: getUniqId()}, 
                    {...result.data[3], uniqId: getUniqId()}, 
                    {...result.data[4], uniqId: getUniqId()},
                    {...result.data[6], uniqId: getUniqId()}]);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoaded(true);
            });
	}, [url])

    const hasBun = React.useMemo(
        () => {
            return typeof(selectedIngredients.find(x => x.type === "bun")) !== 'undefined';
        }, 
        [selectedIngredients]
    );

    const addIngredient = (ingredient) => {
        if (!(ingredient.type === "bun" && hasBun)) {
            // если добавляемый ингредиент - булка, и среди добавленных уже есть булка, то ничего не добавляем
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
            {modal.isVisible && 
            <Modal setModal={setModal}>
                {modal.content}
            </Modal>}
        </>
        );
    }
}
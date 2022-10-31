import React from 'react';
import AppHeader from './components/appHeader/appHeader';
import BurgerConstructor from './components/burgerConstructor/burgerConstructor';
import BurgerIngredients from './components/burgerIngredients/burgerIngredients';
import { ingredients } from './utils/data.js';

function App() {
  return (
    <>
      <AppHeader/>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
      </div>
    </>
  );
}

export default App;

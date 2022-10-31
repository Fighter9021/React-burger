import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Price(props) {
    const containerClassName = (props.large) 
    ? "text text_type_digits-medium" 
    : "mt-1 mb-1 text text_type_digits-default";

    return (
        <span className={containerClassName} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10}}>
            {props.price}
            <CurrencyIcon type="primary"/>
        </span>
    )
}
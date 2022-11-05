import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './price.module.css'

export default function Price(props) {
    return (
        <span className={(props.large) ? styles.containerLarge : styles.container}>
            {props.price}
            <CurrencyIcon type="primary"/>
        </span>
    );
}

Price.propTypes = {
    large: PropTypes.bool,
    price: PropTypes.number
}
import React from 'react';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-details.module.css';

export default function OrderDetails() {
	return (
		<div className={styles.order}>
			<h1 className={styles.orderId}>034536</h1>
			<p className={styles.orderTitle}>идентификатор заказа</p>
			<div className={styles.icon}>
                <CheckMarkIcon type="primary" />
            </div>
			<p className={styles.orderStatus}>Ваш заказ начали готовить</p>
			<p className={styles.orderInformation}>Дождитесь готовности на орбитальной станции</p>
		</div>
	);
}
import React from 'react';
import styles from './order-details.module.css';
import orderCreated from '../../images/OrderCreated.png';

export default function OrderDetails() {
	return (
		<div className={styles.order}>
			<h1 className={styles.orderId}>034536</h1>
			<p className={styles.orderTitle}>идентификатор заказа</p>
			<div className={styles.icon}>
                <img src={orderCreated} alt="Order created"/>
            </div>
			<p className={styles.orderStatus}>Ваш заказ начали готовить</p>
			<p className={styles.orderInformation}>Дождитесь готовности на орбитальной станции</p>
		</div>
	);
}
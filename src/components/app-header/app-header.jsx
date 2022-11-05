import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export default function AppHeader() {
    return(
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <span className={styles.constructor}>
                    <BurgerIcon type="primary" />
                    Конструктор
                </span>
                <span className={styles.order}>
                    <ListIcon type="secondary" />
                    Лента заказов
                </span>
                <Logo />
                <span className={styles.personal}>
                    <ProfileIcon type="secondary" />
                    Личный кабинет
                </span>
            </nav>
        </header>
    );
}
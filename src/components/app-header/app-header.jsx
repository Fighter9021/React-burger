import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export default function AppHeader() {
    return(
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <a href="#" className={styles.constructor}>
                    <BurgerIcon type="primary" />
                    Конструктор
                </a>
                <a href="#" className={styles.order}>
                    <ListIcon type="secondary" />
                    Лента заказов
                </a>
                <Logo />
                <a href="#" className={styles.personal}>
                    <ProfileIcon type="secondary" />
                    Личный кабинет
                </a>
            </nav>
        </header>
    );
}
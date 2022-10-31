import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appHeader.module.css';

export default function AppHeader() {
    return(
        <header className={["pt-4 pb-4", styles.header].join(' ')}>
            <nav className={styles.navigation}>
                <span className="mr-2 ml-5 pr-5 text text_type_main-default" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10}}>
                    <BurgerIcon type="primary" />
                    Конструктор
                </span>
                <span className="mr-2 ml-5 pr-5 text text_type_main-default text_color_inactive" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10}}>
                    <ListIcon type="secondary" />
                    Лента заказов
                </span>
                <Logo />
                <span className="mr-5 ml-5 text text_type_main-default text_color_inactive" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10}}>
                    <ProfileIcon type="secondary" />
                    Личный кабинет
                </span>
            </nav>
        </header>
    )
}
import React from 'react';
import { closeIcon, infoIcon } from '../../static';

import './styles.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header__top-content">
                <p className="header__top-text">Редактирование группы синонимов поисковых фраз</p>
                <img className="header__top-image" src={closeIcon} alt="close" />
            </div>
            <div className="header__main">
                <p className="header__main-text">Синонимы</p>
                <img src={infoIcon} alt="info" />
            </div>
        </header>
    )
}

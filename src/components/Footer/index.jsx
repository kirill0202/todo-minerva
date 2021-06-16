import React from 'react';
import Button from '../Button/index';

import './styles.scss';

export default function Footer({ removeTodoLocalStorage, saveTodoLocalStorage, isShow }) {
    return (
        <footer className="footer">
            <Button title="сохранить изменения" disabled={!isShow} isSave={true} onClick={saveTodoLocalStorage}/>
            <Button title="очистить синонимы" disabled={!isShow} isCleare={true} onClick={removeTodoLocalStorage}/>
        </footer>
    )
};

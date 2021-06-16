import React from 'react';
import Button from '../Button/index';

import './styles.scss';

export default function Footer({ handlerRemoveTodos, handlerSaveAllTodos }) {
    return (
        <div className="footer">
            <Button title="сохранить изменения" isSave={true} onClick={handlerSaveAllTodos}/>
            <Button title="очистить синонимы" isCleare={true} onClick={handlerRemoveTodos}/>
        </div>
    )
}

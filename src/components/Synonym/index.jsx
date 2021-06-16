import React from 'react';
import Input from '../Input/index';
import Button from '../Button/index';
import TodoContainer from '../../containers/TodoContainer/index';
import Notification from '../Notification';

import './styles.scss';


export default function Synonym({ value, error, handlerChangeInput, handlerCreateTodo, handerShow, isShow, todoId, toggleShowSynonyms }) {
    return (
        <div className="synonym">
        {isShow && <div className="synonym__wrapper">
                <p className="synonym__text">добавление синонима:</p>
                <Input placeholder="Введите значение" value={value} onChange={handlerChangeInput}/>
                {error && <Notification error={error}/>}
                <div className="synonym__content">
                  <Button title="добавить" onClick={handlerCreateTodo}/>
                </div>
            </div>}
            <TodoContainer handerShow={handerShow} isShow={isShow} todoId={todoId} toggleShowSynonyms={toggleShowSynonyms}/>
        </div>

    )
}

import React from 'react';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import Notification from '../../components/Notification/index';

import { closeIcon } from '../../static';

import './styles.scss';

export default function EditTodo({ handlerChangeInput, value, error, toggleShowSynonyms, handlerEditTodo }) {
    return (
        <div className="edit">
            <p className="edit__text">редактирование синонина:</p>
            <Input placeholder="редактировать" value={value} onChange={handlerChangeInput}/>
            {error && <Notification error={error}/>}
            <div className="edit__content">
                <Button title="Сохранить" onClick={handlerEditTodo}/>
                <img 
                onClick={toggleShowSynonyms}
                className="edit__image" 
                src={closeIcon} 
                alt="close"/>
            </div>
        </div>
    )
};

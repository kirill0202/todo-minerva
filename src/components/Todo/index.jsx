import React from 'react';
import EditTodoContainer from '../../containers/EditTodoContainer/index';
import { editIcon, removeIcon } from '../../static';

import './styles.scss';

export default function Todo({ todo, handlerRemoveTodo, handerShow, toggleShowSynonyms, todoId, isShow }) {
    const findTodo = todo.find((item) => item.id === todoId);

    return <ul className="todo__lists">
        {todo.map((item) => {
            return <React.Fragment key={item.id}>
                <li className="todo__lists-item">
                    <div className="todo__lists-content">
                        {item.title}
                        <div className="todo__lists-images">
                            <img 
                            onClick={() => handerShow(item.id)}
                            src={editIcon} 
                            alt="edit"
                            className="todo__lists-image todo__lists-edit"/>
                            <img 
                            onClick={() => handlerRemoveTodo(item.id)}
                            src={removeIcon} 
                            alt="remove" 
                            className="todo__lists-image todo__lists-remove"/>
                        </div>
                    </div>
                </li>
             {item.id === todoId ? isShow || <EditTodoContainer findTodo={findTodo} handerShow={handerShow} toggleShowSynonyms={toggleShowSynonyms} todoId={todoId}/> : null}
            </React.Fragment>
        })}
    </ul>
};

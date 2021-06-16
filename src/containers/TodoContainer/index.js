import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from '../../components/Todo/index';
import { removeTodo, setTodos } from '../../store/todo';

export default function TodoContainer({ handerShow, isShow, todoId, toggleShowSynonyms }) {
    const { todo } = useSelector((state) => state.reducerTodo);
    const dispatch = useDispatch();

    const handlerRemoveTodo = (idTodo) => {
        dispatch(removeTodo(idTodo))
    };

    const getTodoLocalStorage = () => {
        const getTodo = window.localStorage.getItem('todo');
        const parseTodo = JSON.parse(getTodo);
        parseTodo && dispatch(setTodos(parseTodo))
    };

    useEffect(() => {
        getTodoLocalStorage();
    }, []);

    return <Todo 
    todo={todo} 
    todoId={todoId}
    handlerRemoveTodo={handlerRemoveTodo} 
    handerShow={handerShow} 
    isShow={isShow} 
    toggleShowSynonyms={toggleShowSynonyms}/>
}

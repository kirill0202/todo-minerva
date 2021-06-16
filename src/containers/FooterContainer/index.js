import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Footer from '../../components/Footer/index';

import { allRemoveTodos } from '../../store/todo';

export default function FooterContainer() {
    const { todo } = useSelector((state) => state.reducerTodo);
    const dispatch = useDispatch();

    const handlerRemoveTodos = () => {
        dispatch(allRemoveTodos());
        window.localStorage.removeItem('todo');
    };

    const handlerSaveAllTodos = () => {
        window.localStorage.setItem('todo', JSON.stringify(todo));
    };

    return <Footer handlerRemoveTodos={handlerRemoveTodos} handlerSaveAllTodos={handlerSaveAllTodos}/>
};

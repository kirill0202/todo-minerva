import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Footer from '../../components/Footer/index';

import { allRemoveTodos } from '../../store/todo';

export default function FooterContainer({ isShow }) {
    const { todo } = useSelector((state) => state.reducerTodo);
    const dispatch = useDispatch();

    const removeRodoLocalStorage = () => {
        dispatch(allRemoveTodos());
        window.localStorage.removeItem('todo');
    };

    const saveTodoLocalStorage = () => {
        window.localStorage.setItem('todo', JSON.stringify(todo));
    };
    
    return <Footer isShow={isShow} removeRodoLocalStorage={removeRodoLocalStorage} saveTodoLocalStorage={saveTodoLocalStorage}/>
};

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditTodo from '../../components/EditTodo/index';
import { editTodo } from '../../store/todo';

export default function EditTodoContainer({ findTodo, toggleShowSynonyms, todoId }) {
    const { title } = findTodo;
    const [value, setValue] = useState(title);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handlerChangeInput = (e) => {
        setValue(e.target.value);
    };

    const handlerEditTodo = () => {
        if(!value){
            return setError({ message: "Поле недолжно быть пустым!"});
        }
        const data = {
            id: todoId,
            title: value
        }
        dispatch(editTodo(data));
        toggleShowSynonyms();
        setError(null);
    };

    return <EditTodo
        value={value}
        error={error}
        toggleShowSynonyms={toggleShowSynonyms}
        handlerEditTodo={handlerEditTodo}
        handlerChangeInput={handlerChangeInput} />
};

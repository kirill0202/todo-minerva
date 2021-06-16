import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Synonym from '../../components/Synonym';

import { createTodo } from '../../store/todo';

export default function SynonymContainer() {
    const [value, setValue] = useState("");
    const [isShow, setIsShow] = useState(true);
    const [todoId, setTodoId] = useState();
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const handlerChangeInput = (e) => {
        setValue(e.target.value)
    };

    const handerShow = (idTodo) => {
        setIsShow(false);
        setTodoId(idTodo);
    };

    const toggleShowSynonyms = () => {
        setIsShow(!isShow)
    };

    const handlerCreateTodo = () => {
        if(!value){
           return setError({ message : "Поле не должно быть пустым!" });
        }
        const data = {
            title: value,
            id: Date.now()
        };
        dispatch(createTodo(data));
        setValue("");
        setError(null);
    }

    return <Synonym
        value={value}
        isShow={isShow}
        todoId={todoId}
        error={error}
        handerShow={handerShow}
        toggleShowSynonyms={toggleShowSynonyms}
        handlerChangeInput={handlerChangeInput}
        handlerCreateTodo={handlerCreateTodo} />
}

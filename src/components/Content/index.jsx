import React, { useState } from 'react';
import Header from '../Header/index';
import SynonymContainer from '../../containers/SynonymContainer/index';
import FooterContainer from '../../containers/FooterContainer/index';

import './styles.scss';

export default function Content() {
    const [isShow, setIsShow] = useState(true);
    const [todoId, setTodoId] = useState();

    const handerShow = (idTodo) => {
        setIsShow(false);
        setTodoId(idTodo);
    };

    const toggleShowSynonyms = () => {
        setIsShow(!isShow)
    };

    return (
        <div className="content">
            <Header/>
            <SynonymContainer todoId={todoId} toggleShowSynonyms={toggleShowSynonyms} isShow={isShow} handerShow={handerShow}/>
            <FooterContainer isShow={isShow}/>
        </div>
    )
};

import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export default function Button({ title, onClick, isSave, isCleare, disabled }) {
    return <button disabled={disabled}
       className={
       classNames("button button-default",{ "button-save": isSave,  "button-cleare": isCleare })} 
       onClick={onClick}>{title}
    </button>
}

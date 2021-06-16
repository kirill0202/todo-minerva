import React from 'react'
import { errorIncon } from '../../static';
import './styles.scss';

export default function Notification({ error }) {
    return (
        <div className="notification">
            <img src={errorIncon} alt="error" />
            <p className="notification-text">{error.message}</p>
        </div>
    )
}

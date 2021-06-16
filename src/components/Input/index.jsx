import React from 'react'
import './styles.scss';

export default function Input({ placeholder, value, onChange }) {
    return <input placeholder={placeholder} value={value} onChange={e => onChange(e)} className="input"/>
}

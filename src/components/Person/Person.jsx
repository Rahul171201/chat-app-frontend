import React from 'react'
import './Person.css';

export default function Person(props) {
    return (
        <div>
            <li className='personlist'>{props.name}</li>
        </div>
    )
}

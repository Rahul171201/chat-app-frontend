import React from 'react';
import TickMark from '../TickMark/TickMark';
import './TextBox.css';

export default function TextBox() {
    return (
        <div className='textbox'>
            <div className='textmessage'><p>Hey! U wanna come today and play with us :)</p></div>
            <div className='time'>7:00 AM</div>
            <div className='ticklogo'><TickMark id={3}></TickMark></div>
        </div>
    )
}

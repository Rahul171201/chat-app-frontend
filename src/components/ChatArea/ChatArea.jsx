import React from 'react';
import './ChatArea.css';
import TextBox from '../TextBox/TextBox';

export default function ChatArea() {
    return (
        <div className='mainbox'>
            <div className='header'>
                <div className='profilepic'>
                    <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale' alt='ok' className='logoimage'></img>
                </div>
                <div className='profilename'>
                    <p className='name'>Pratyush</p>
                </div>
            </div>
            <div className='chatbox'>
                <TextBox></TextBox>
            </div>
        </div>
    )
}

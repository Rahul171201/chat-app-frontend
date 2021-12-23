import React from 'react';
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import './TickMark.css';

export default function TickMark({ id }) {
    if (id === 1) {
        return (
            <div>
                <BsCheck2></BsCheck2>
            </div>
        )
    }
    if (id === 2) {
        return (
            <div>
                <BsCheck2All></BsCheck2All>
            </div>
        )
    }
    if (id === 3) {
        return (
            <div>
                <BsCheck2All style={{color: "#516BEB"}}></BsCheck2All>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

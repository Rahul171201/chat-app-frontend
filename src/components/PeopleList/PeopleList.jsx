import React from 'react';
import './PeopleList.css';
import Person from '../Person/Person';

export default function PeopleList() {
    return (
        <div className='mainlist'>
            <Person name="RAHUL" status="online"></Person>
            <li className='personlist'>RIYAN</li>
            <li className='personlist'>PUPUN</li>
            <li className='personlist'>BAPU</li>
            <li className='personlist'>VICKY</li>
            <li className='personlist'>SMRUTI</li>
            <li className='personlist'>BAGULA</li>
            <li className='personlist'>SILU</li>
            <li className='personlist'>RAJESH</li>
            <li className='personlist'>RINKU</li>
            <li className='personlist'>SUSHIL</li>
            <li className='personlist'>RAJA</li>
        </div>
    )
}

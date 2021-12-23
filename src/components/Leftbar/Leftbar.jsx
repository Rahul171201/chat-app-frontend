import React from 'react';
import './Leftbar.css';
import PeopleList from '../PeopleList/PeopleList';

export default function leftbar() {
    return (
        <div className='mainboxleft'>
            <div className='headerleft'>
                <div className='logoleft'>
                    <img src='https://neilpatel.com/wp-content/uploads/2017/04/chat.jpg' alt='ok' className='logoimageleft'></img>
                </div>
                <div className='onlineleft'>
                    <p className='onlinetextleft'>32 Online</p>
                </div>
            </div>
            <div className='peoplelistleft'>
                <PeopleList></PeopleList>
            </div>
        </div>
    )
}

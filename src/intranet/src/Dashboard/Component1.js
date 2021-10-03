import React from 'react'
import Schedule from '../Props/Calendar/Schedule';

function component1() {
    return (
        <div>
        <div className='calendar'>
        <a href='./Schedule' exact component={Schedule}>Calender</a>
        </div>
        </div>
    )
}
export default component1;
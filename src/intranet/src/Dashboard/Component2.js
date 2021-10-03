import React from 'react';
import Library from '../Props/Library/Library'


function component2() {
    return (
        <div>
        <div className='calendar'>
        <a href='./library' exact component={Library}></a>
        </div>
        </div>
    )
}
export default component2;
import React from 'react';
import './Question.css';

const question = props => {
    return(
        <div className='Question'>
            {props.children}
        </div>
    )
}
export default question;
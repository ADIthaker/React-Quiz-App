import React from 'react';
import './Option.css';

const option = props => {
    return(
        <div className='option'>
            {props.children}
        </div>
    )
}
export default option;
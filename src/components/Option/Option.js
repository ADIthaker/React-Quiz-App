import React from 'react';
import './Option.css';

const Option = props => {

    let optionClass = 'option';
    if(props.selected===true){
        optionClass='option selected';
    }
    if(props.wrong===true){
        optionClass='option wrong'
    }
    if(props.right===true){
        optionClass ="option right"
    }
    if(props.result){
        optionClass = "none"
    }
    
    return(
        <div className={optionClass} onClick={props.click} >
            {props.children}
        </div>
    )
}
export default Option;
import React from 'react';
import classes from './Operator.css';

const operator = props => {
    
    let clickMethods = null;
    if(props.changeOperator){
        clickMethods = props.changeOperator;
    }else if(props.calculate){
        clickMethods = props.calculate;
    }
    
    return (
        <div className = {classes.Operator} onClick = {clickMethods}>
            {props.OperatorValue}
        </div>
    )
}

export default operator;    
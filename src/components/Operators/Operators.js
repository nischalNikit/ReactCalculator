import React from 'react';
import classes from './Operators.css';

import Operator from './Operator/Operator';

const operators = props => {
    return(
        <div className = {classes.Operators}>
            <Operator  
                changeOperator = {() => props.inputOperator("/")} 
                changeInput    = {() => props.inputValue("/")} 
                OperatorValue  = "/" 
            />
            <Operator  
                changeOperator = {() => props.inputOperator("*")}
                changeInput    = {() => props.inputValue("*")} 
                OperatorValue  = "*" 
            />
            <Operator  
                changeOperator = {() => props.inputOperator("-")}
                changeInput    = {() => props.inputValue("-")} 
                OperatorValue  = "-" 
            />
            <Operator  
                changeOperator = {() => props.inputOperator("+")}
                changeInput    = {() => props.inputValue("+")} 
                OperatorValue  = "+" 
            />
            <Operator  
                calculate     = {() => props.inputOperator("%")}
                OperatorValue = "%" 
            />
        </div>
    )
}

export default operators;
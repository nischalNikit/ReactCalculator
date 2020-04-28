import React from 'react';
import classes from './Operator.css';

const operator = props => {
    return (
        <div className = {classes.Operator} onClick = {props.changeOperator}>
            {props.OperatorValue}
        </div>
    )
}

export default operator;    
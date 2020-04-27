import React from 'react';
import classes from './Operators.css';

import Operator from './Operator/Operator';

const operators = props => {
    return(
        <div className = {classes.Operators}>
            <Operator OperatorValue = "/" />
            <Operator OperatorValue = "X" />
            <Operator OperatorValue = "-" />
            <Operator OperatorValue = "+" />
            <Operator OperatorValue = "=" />
        </div>
    )
}

export default operators;
import React from 'react';
import classes from './Operator.css';

const operator = props => {
    return(
        <div className = {classes.Operator}>
            {props.OperatorValue}
        </div>
    )
}

export default operator;
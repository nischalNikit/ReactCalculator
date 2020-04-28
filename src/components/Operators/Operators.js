import React, {Component} from 'react';
import classes from './Operators.css';

import Operator from './Operator/Operator';

class Operators extends Component{

    state = {
        operators: ['/','*','-','+','%']
    }

    render(){

    let OperatorDiv = this.state.operators.map((element) => {
        return(
        <Operator 
            changeOperator = {() => this.props.inputOperator(element)} 
            OperatorValue  = {element}
        />);    
    })

    return(
        <div className = {classes.Operators}>
           {OperatorDiv}
        </div>
    )}
}

export default Operators;
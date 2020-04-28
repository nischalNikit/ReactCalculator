import React, { Component } from 'react';
import classes from './Controls.css';

import Auxiliary from '../../hoc/Auxiliary';
import Control from './Control/Control';

class Controls extends Component {

    state = {
        numberControls: ["7", "8", "9","4","5","6","1","2","3","0","."]
    }

    render(){
    let numControls = this.state.numberControls.map((element) => {
        return <Control input = {() => this.props.inputValue(element)} controlValue = {element} />
    });

    return(
        <Auxiliary classes = {classes.Controls}>
            <Control clear     = {() => this.props.clearValue()}    controlValue = "AC"/>
            <Control input     = {() => this.props.inputValue("-")} controlValue = "+|-"/>
            <Control calculate = {() => this.props.calculate()}     controlValue = "="/>
            {numControls}
            <Control modify = {() => this.props.modifyValue()}   controlValue = " &#11013;" />
        </Auxiliary>
    )}
}

export default Controls;
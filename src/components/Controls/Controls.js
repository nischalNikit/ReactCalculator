import React from 'react';
import classes from './Controls.css';

import Auxiliary from '../../hoc/Auxiliary';
import Control from './Control/Control';

const controls = props => {
    return(
        <Auxiliary classes = {classes.Controls}>
            <Control clear  = {() => props.clearValue()}    controlValue = "AC"/>
            <Control input  = {() => props.inputValue("-")} controlValue = "+/-"/>
            <Control calculate = {() => props.calculate()}  controlValue = "="/>
            <Control input  = {() => props.inputValue("7")} controlValue = "7"/>
            <Control input  = {() => props.inputValue("8")} controlValue = "8"/>
            <Control input  = {() => props.inputValue("9")} controlValue = "9"/>
            <Control input  = {() => props.inputValue("4")} controlValue = "4"/>
            <Control input  = {() => props.inputValue("5")} controlValue = "5"/>
            <Control input  = {() => props.inputValue("6")} controlValue = "6"/>
            <Control input  = {() => props.inputValue("1")} controlValue = "1"/>
            <Control input  = {() => props.inputValue("2")} controlValue = "2"/>
            <Control input  = {() => props.inputValue("3")} controlValue = "3"/>
            <Control input  = {() => props.inputValue("0")} controlValue = "0"/>
            <Control input  = {() => props.inputValue(".")} controlValue = "." />
            <Control modify = {() => props.modifyValue()}   controlValue = "&larr;" />
        </Auxiliary>
    )
}

export default controls;
import React from 'react';
import classes from './Input.module.css';

const Input  = React.forwardRef((props, ref) => {
    //V137, with {...props.input} it is ensured that all the properties are set correctly to input
    return (
        <div className={classes.input}>
           <label htmlFor={props.input.id}>{props.label}</label>
           <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
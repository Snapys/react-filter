import React from 'react';
import styles from './Button.module.scss'

const Button = props => {
  const classes = styles.button + ' ' + props.className;

    return (
      <button className={classes} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  
  export default Button;
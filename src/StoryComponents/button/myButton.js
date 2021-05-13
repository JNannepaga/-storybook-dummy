import React from 'react';
import './myButton.css';

function MyButton(props) {
    const {styling, children, clickHandler} = props;
    return <button className={`button ${styling}`} onClick={clickHandler}>{children}</button>;
}

export default MyButton;
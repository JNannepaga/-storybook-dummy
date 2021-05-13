import React from 'react';
import './myInput.css';

function MyInput(props) {
    const {styling} = props;
    return <input type="text" className={`input ${styling}`}/>;
}

export default MyInput;
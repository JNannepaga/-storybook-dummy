import MyButton from './myButton';
import React from 'react';
import {action, actions} from '@storybook/addon-actions';

export default{
    title: 'Malips/MyButton',
    component: MyButton
}

export const primary = () => <MyButton styling = 'primary' clickHandler = {action('click handler')}> Primary </MyButton>
export const success = () => <MyButton styling = 'success'> Success </MyButton>
export const info = () => <MyButton styling = 'info'> Info </MyButton>
export const warning = () => <MyButton styling = 'warning'> warning </MyButton>


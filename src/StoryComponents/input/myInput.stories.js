import MyInput from './myInput';
import React from 'react';

export default{
    title: 'Malips/MyInput',
    component: MyInput
}

const Template = args => <MyInput styling = {args.styling}/>
export const small = Template.bind({});
small.args = {
    styling: 'small'
};

export const medium = Template.bind({});
medium.args = {
    styling: 'medium'
};

export const large = Template.bind({});
large.args = {
    styling: 'large'
};

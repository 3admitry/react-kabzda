import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion, {accordionPropsType} from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) =>  <Accordion {...args} />

export const MenuCollapsed = Template.bind({})

MenuCollapsed.args = {
    collapsed: true,
}

export const MenuCollapsed2 = () => {

    let [collapsed, setCollapsed] = useState(true)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion setCollapsed={changeCollapsed} collapsed={collapsed}/>
}




import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import CustomSelect from './CustomSelect';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'CustomSelect',
    component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;


const Template: ComponentStory<typeof CustomSelect> = (args) =>  <CustomSelect {...args} />

/*export const MenuCollapsed = Template.bind({})

MenuCollapsed.args = {
    collapsed: true,
}*/

export const CustomSelectUncotrolled = () => {

    let [collapsedSelect, setCollapsedSelect] = useState(true)
    let [selectTitle, setselectTitle] = useState('Select')

    const changeSelecTitle = (newTitle: string) => {
        setselectTitle(newTitle);
        setCollapsedSelect(!collapsedSelect)
    }
    const changeCollapsedSelect = () => {
        setCollapsedSelect(!collapsedSelect)
    }

    let selectItems = [
        {id: 1, title: 'Alex'},
        {id: 2, title: 'Ann'},
        {id: 3, title: 'Hally'},
        {id: 4, title: 'Richard'},
        {id: 5, title: 'Smith'},
    ];

    return <CustomSelect items={selectItems}
                         setCollapsed={changeCollapsedSelect}
                         collapsed={collapsedSelect}
                         selectTitle={selectTitle}
                         callbackNewSelectTitile={changeSelecTitle}
    />
}




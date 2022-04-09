import React, {useState} from 'react';
import './App.css';
import Accordion from './Accordion/Accordion';
import {Button} from './Button/Button';
import CustomSelect from './CustomSelect/CustomSelect';

type hookCollapseType = boolean

function App() {

    let [collapsed, setCollapsed] = useState<hookCollapseType>(true)
    let [collapsedSelect, setCollapsedSelect] = useState(true)
    let [selectTitle, setselectTitle] = useState('Select')

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const changeCollapsedSelect = () => {
        setCollapsedSelect(!collapsedSelect)
    }

    let [state, setState] = useState('red')
    const changeColorState = (color: string) => {
        setState(color)
    }

    const changeSelecTitle = (newTitle: string) => {
        setselectTitle(newTitle);
        setCollapsedSelect(!collapsedSelect)
    }


    let selectItems = [
        {id: 1, title: 'Alex'},
        {id: 2, title: 'Ann'},
        {id: 3, title: 'Hally'},
        {id: 4, title: 'Richard'},
        {id: 5, title: 'Smith'},
    ];


    return (
        <div>
            <Accordion setCollapsed={changeCollapsed} collapsed={collapsed}/>
            <Accordion setCollapsed={changeCollapsed} collapsed={collapsed}/>
            <Button changeColorState={changeColorState} state={state}/>
            <CustomSelect items={selectItems}
                          setCollapsed={changeCollapsedSelect}
                          collapsed={collapsedSelect}
                          selectTitle={selectTitle}
                          callbackNewSelectTitile={changeSelecTitle}
            />
        </div>
    );
}

export default App;

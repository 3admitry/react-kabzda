import React, {useState} from 'react';
import './App.css';
import Accordion from './Accordion/Accordion';
import {Button} from './Button/Button';

type hookCollapseType = boolean

function App() {

    let[collapsed, setCollapsed]=useState<hookCollapseType>(true)

    const changeCollapsed = () => {
        console.log(1)
        setCollapsed(!collapsed)
    }


    let[state, setState] = useState('red')
    const changeColorState = (color:string) => {
        setState(color)
    }

    return (
        <div>
            <Accordion setCollapsed={changeCollapsed} collapsed={collapsed}/>
            <Accordion setCollapsed={changeCollapsed} collapsed={collapsed}/>
            <Button changeColorState={changeColorState} state={state}/>
        </div>
    );
}

export default App;

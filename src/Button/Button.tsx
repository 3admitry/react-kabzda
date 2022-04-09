import React, {useState} from 'react';
import m from './Circle.module.css'
type propsType = {
    changeColorState: (v:string)=>void
    state: string
}

export const Button = (props:propsType) => {


    return (
        <div>
            <button onClick={()=> props.changeColorState('green')}>On</button>
            <button onClick={()=> props.changeColorState('red')}>Off</button>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <div className={m.circle}>
                <div className={m[props.state]}> </div>
            </div>
        </div>
    );
};


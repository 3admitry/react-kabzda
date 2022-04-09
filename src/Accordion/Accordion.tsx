import React, {useState} from 'react';

type accordionTitleProps ={
    title: string
    setColl: ()=>void
}
export type accordionPropsType = {
    setCollapsed: ()=>void
    /**
     * localState changing
     */
    collapsed: boolean
}


const Accordion = (props:accordionPropsType) => {

    /*const onClickCollapseHandler = () => {
        collapsed ? setCollapsed(false):setCollapsed(true)
    }*/

    return (
        <div>
            <AccordionTitle title='Menu' setColl={props.setCollapsed} />
            {!props.collapsed && <AccordionBody/>}
            {/*<button onClick={onClickCollapseHandler}>Toggle</button>*/}

        </div>
    );
};


const AccordionTitle = (props:accordionTitleProps) => {

    return (
        <div>
            <h3 onClick={()=>props.setColl()}>{props.title}</h3>
        </div>
    );
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    );
};

export default Accordion;
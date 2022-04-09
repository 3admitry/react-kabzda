import React, {MouseEventHandler} from 'react';

type customSelectProps = {
    items: { id: number, title: string }[]
    setCollapsed: () => void
    callbackNewSelectTitile: (newTitle: string) => void
    collapsed: boolean
    selectTitle: string
}

const CustomSelect = (props: customSelectProps) => {

    return (
        <div>
            <SelectTitle selectTitle={props.selectTitle} setCollapsed={props.setCollapsed}/>
            {!props.collapsed &&
                <SelectBody items={props.items} callbackNewSelectTitile={props.callbackNewSelectTitile}/>}
            {/*<button onClick={onClickCollapseHandler}>Toggle</button>*/}
        </div>
    );
};

type selectTitleProps = {
    selectTitle: string
    setCollapsed: () => void
}

const SelectTitle = (props: selectTitleProps) => {

    return (
        <div>
            <h3 onClick={() => props.setCollapsed()}>
                <span>{props.selectTitle}</span> ▾
            </h3>
        </div>
    );
};

type bodySelectProps = {
    items: { id: number, title: string }[]
    callbackNewSelectTitile: (newTitle: string) => void
}

const SelectBody = (props: bodySelectProps) => {
    return (
        <div>
            {props.items.map((el, index) => {
                return (
                    <div onClick={() => {
                        props.callbackNewSelectTitile(el.title);
                    }} key={index} id={JSON.stringify(el.id)}>{el.title}</div>
                )
            })}
        </div>
    );
};

export default CustomSelect;
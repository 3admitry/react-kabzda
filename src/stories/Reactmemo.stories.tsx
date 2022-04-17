import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import buttonStories from './Button.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React.memo demo',
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    let [count, setCounter] = useState(0);
    let [users, setUsers] = useState(['Dima', 'Miron', 'Darina']);

    return (
        <>
            <button onClick={() => (setCounter(count + 1))}>++</button>
            <Counter count={count}/>
            <Users users={users}/>
        </>

    )

}




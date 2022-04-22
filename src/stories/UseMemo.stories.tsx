import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import buttonStories from './Button.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UseMemo demo',
}


export const DifficultCounting = () => {

    let [a, setA] = useState(1);
    let [b, setB] = useState(1);

    let resultA = 1;
    let resultB = 1;

    resultA =  useMemo(() => {
        let tempResult=1;
        for (let i = 1; i <= a; i++) {
            let fake = 1;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }


    return (
        <>
            <div>
                <input type="text" value={a} onChange={(e) => {
                    setA(+e.currentTarget.value)
                }}/>
                <input type="text" value={b} onChange={(e) => {
                    setB(+e.currentTarget.value)
                }}/>
                <hr/>
                <div>
                    <div>
                        resultA: {resultA}
                    </div>
                    <div>
                        resultB: {resultB}
                    </div>
                </div>
            </div>
        </>

    )

}

const Counter = (props: { count: number }) => {
    console.log('Counter');
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const useMemoHelpReactMemo = () => {
    let [count, setCounter] = useState(0);
    let [users, setUsers] = useState(['Dima', 'Miron', 'Darina']);


    // При помощи useMemo мы помогаем React.Memo отслеживать изменение по входящим пропсам
    const newUsers = useMemo(()=>{
        return users.filter(u=> u.toLowerCase().indexOf('o') > -1)
    },[users])

    // изменение входящих пропсов
    const addUser = () => {
        return setUsers([...users, 'Oleg']);
    }

    return (
        <>
            <button onClick={() => (setCounter(count + 1))}>++</button>
            <button onClick={()=>{addUser()}}>addUser</button>
            <Counter count={count}/>
            <Users users={newUsers}/>
        </>

    )
}




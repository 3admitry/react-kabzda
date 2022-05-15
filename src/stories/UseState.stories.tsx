import React, {useMemo, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useState demo',
}


export const UseSTate = () => {

     const generateInit = () => {
        console.log('Init generated')
        let tempResult=1;
        for (let i = 1; i <= 10; i++) {
            let fake = 1;
            while (fake < 10000000) {
                fake++;
                Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult;
    }



    let[counter, setCounter]=useState<number>(generateInit);



    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={()=>setCounter(counter+1)} >++</button>
        </>

    )

}





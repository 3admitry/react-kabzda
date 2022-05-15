import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useEffect demo',
}


export const TimeCount = () => {

    let[currentTime, setCurrentTime]=useState<string>('');

    useEffect(()=>{
        setInterval(()=>{
        setCurrentTime(moment().format('h:mm:ss'))
    },1000)
    },[])


    return (
        <>
            {currentTime}
        </>

    )
}





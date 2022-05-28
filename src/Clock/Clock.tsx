import React, {useState} from 'react';

export const Clock = () => {
    let[date, setDate] = useState(new Date());
    return (
        <div>
            <span>{date.getHours()}</span>
            : <span>{date.getMinutes()}</span>
            : <span>{date.getSeconds()}</span>
        </div>
    );
};

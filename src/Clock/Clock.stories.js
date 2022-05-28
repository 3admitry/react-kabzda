import React, {useEffect, useState} from 'react';

import {Clock} from './Clock';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Clock',
    component: Clock,
};

const format2Digital = (num) => num < 10 ? '0' + num : num;
const timeToDegree = (sec) => sec * 6;

export const DigitalClock = () => {
    let [date, setDate] = useState(new Date());
    useEffect(() => {
        let idCounter = setInterval(function () {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(idCounter);
        }
    }, [])

    return (
        <div>
            <span>{format2Digital(date.getHours())}</span>
            : <span>{format2Digital(date.getMinutes())}</span>
            : <span>{format2Digital(date.getSeconds())}</span>
        </div>
    );
};

export const AnalogClock = () => {
    let [date, setDate] = useState(new Date());
    useEffect(() => {
        let idCounter = setInterval(function () {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(idCounter);
        }
    }, [])

    const styles = {
        secondsStyle: {transformOrigin: "center", transform: 'rotate(' + date.getSeconds()*6 + 'deg)'},
        minutesStyle: {transformOrigin: "center", transform: 'rotate(' + date.getMinutes()*6 + 'deg)'},
        hoursStyle: {transformOrigin: "center", transform: 'rotate(' + date.getHours()*30 + 'deg)'},
    }

    return (
        <div>
            <ClockFace styles={styles}/>
        </div>
    );
};

const ClockFace = (props) => {
    return <>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="clock">
                <g id="clockFace">
                    <path id="Ellipse 5 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M100 199C154.676 199 199 154.676 199 100C199 45.3238 154.676 1 100 1C45.3238 1 1 45.3238 1 100C1 154.676 45.3238 199 100 199ZM100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#747474"/>
                    <path id="Line 10 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M100 3.50861e-08L100 8L99 8L99 0L100 3.50861e-08Z" fill="#747474"/>
                    <path id="Line 12 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M8 100H0L0 99H8V100Z" fill="#747474"/>
                    <path id="Line 13 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M200 100H192V99H200V100Z" fill="#747474"/>
                    <path id="Line 11 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M100 192L100 200L99 200L99 192L100 192Z" fill="#747474"/>
                </g>
                <path id="arrowSeconds" style={props.styles.secondsStyle} fillRule="evenodd" clipRule="evenodd" d="M100 10L100 99H99L99 10H100Z" fill="black"/>
                <path id="arrowMinutes" style={props.styles.minutesStyle} fillRule="evenodd" clipRule="evenodd" d="M101 0L101 99H98L98 0H101Z" fill="black"/>
                <path id="arrowHours" style={props.styles.hoursStyle} fillRule="evenodd" clipRule="evenodd" d="M101 46L101 99H98L98 46H101Z" fill="black"/>
            </g>
        </svg>

    </>

}
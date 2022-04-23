import { useState, useEffect } from "react";

const toTwoDigitsString = (number) => {
    return number.toLocaleString(undefined, {minimumIntegerDigits: 2});
} 

const Clock = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(hour === 23 && minutes === 59  && seconds === 59){
                setHour(0);
                setMinutes(0);
                setSeconds(0);
            }
            else{
                if(seconds === 59){
                    setSeconds(0);
    
                    if(minutes === 59){
                        setMinutes(0);
                        setHour(hour + 1);
                    }
                    else{
                        setMinutes(minutes + 1);
                    }
                }
                else{
                    setSeconds(seconds + 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [seconds, minutes, hour])

    return (
        <div className="clock-digits">
            {toTwoDigitsString(hour)}
            :
            {toTwoDigitsString(minutes)}
            :
            {toTwoDigitsString(seconds)}
        </div>
    )
}

export default Clock;
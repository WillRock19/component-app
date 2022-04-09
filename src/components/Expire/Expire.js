import { useState, useEffect } from "react"

const Expire = ({expireIn, children}) => {

    const [isVisible, setIsVisible] = useState(true);
    const setTimer = (expireIn) => {
        setTimeout(() => setIsVisible(false), expireIn);
    };

    useEffect(() => {
        if(expireIn){
            setTimer(expireIn);
        }
    }, [expireIn]);

    return (
        isVisible 
            ? <>{children}</>
            : <></>
    )
}

export default Expire;
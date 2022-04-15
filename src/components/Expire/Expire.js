import { useState, useEffect } from "react"

const Expire = ({expireIn, children, onExpiringFn}) => {

    const [isVisible, setIsVisible] = useState(true);
    const setTimer = (expireIn) => {
        setTimeout(() => {
            setIsVisible(false);
            onExpiringFn?.();
        }, expireIn);
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
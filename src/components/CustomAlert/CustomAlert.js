
import { useState } from "react";
import Expire from "../Expire";
import {AiOutlineClose} from "react-icons/ai";

const defineAlertClass = (alertType) => {
    switch(alertType){
        case "s":
            return "success";
        case "e":
            return "error";
        default: 
            return "warning";
    }
}

const CustomAlert = ({message, alertType, alertOpen, closeIn, onCloseFn}) => {
    const [opened, setOpened] = useState(alertOpen);
    const onCloseHandler = () => {
        setOpened(false);
        onCloseFn?.();
    }

    return (
        opened 
        ? <Expire expireIn={closeIn}>
            <div className={`timmer-alert ${defineAlertClass(alertType)}`}>
                <span className="closeButton" onClick={onCloseHandler}>
                    <AiOutlineClose />
                </span>
                <span className="alert-message">{message}</span>
            </div>
          </Expire>
        : <></>
    )
}

export default CustomAlert;
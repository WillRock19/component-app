
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

const CustomAlert = ({message, alertType, closeIn, onCloseFn}) => {
    const onCloseHandler = () => {
        onCloseFn?.();
    }

    return (
        <Expire expireIn={closeIn} onExpiringFn={onCloseHandler}>
            <div className={`timmer-alert animate-alert ${defineAlertClass(alertType)}`}>
                <span className="closeButton" onClick={onCloseHandler}>
                    <AiOutlineClose />
                </span>
                <span className="alert-message">{message}</span>
            </div>
        </Expire>
    )
}

export default CustomAlert;
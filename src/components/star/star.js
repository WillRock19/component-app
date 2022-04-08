import { FaStar } from "react-icons/fa";

const Star = ({filled, onClick}) => {
    return (
        <FaStar color={filled? "orange" : "lightgray"} onClick={onClick} className="star" />
    );
}

export default Star;
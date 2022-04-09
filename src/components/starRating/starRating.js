import Star from "../Star";
import { useState } from "react";

const starIsFilled = (currentRating, starIndex) => {
    return  starIndex <= currentRating;
}

const StarRating = ({numberOfStars, onChange}) => {
    const [rating, setRating] = useState(0);
    const changeRating = (newRating) => {
        setRating(newRating);
        onChange?.(newRating);
    }

    return (
        <span className="star-rating">
            {Array(numberOfStars)
            .fill()
            .map((_, index) => 
                    <Star 
                     key={index} 
                     filled={starIsFilled(rating, index)} 
                     onClick={() => changeRating(index)} />)}
        </span>
    );
}

export default StarRating;
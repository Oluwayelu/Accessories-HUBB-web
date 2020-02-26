import React, { useState } from 'react'
import Star from 'react-star-ratings'

const Ratings = () => {
    const [ratings, setRatings] = useState(3.4)
    const changeRating = (newRating) => {
        setRatings(newRating)
    }
    return (
        <div>
            <Star 
                rating={ratings} 
                starDimension="15px" 
                starSpacing="1px" 
                starRatedColor="yellow" 
                numberOfStars={5} 
                name='rating'
            />
        </div>
    );
};

export default Ratings;
'use client';

import { FaStar, FaRegStar } from 'react-icons/fa';

interface Props {
  rating: number; 
  maxRating?: number; 
}

const RatingStars = ({ rating, maxRating = 5 }: Props) => {
  const parsedRating = parseFloat(rating.toString());

  return (
    <div className="flex items-center space-x-1">
        {[...Array(maxRating)].map((_, index) => {
            const starRating = index + 1;
            
            return (
                <div key={starRating}>
                    {starRating <= parsedRating ? (
                    <FaStar className="text-yellow-500" size={24} />
                    ) : (
                    <FaRegStar className="text-gray-400" size={24} />
                    )}
                </div>
            );
        })}
    </div>
  );
};

export default RatingStars;

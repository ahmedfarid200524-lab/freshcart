import React from "react";

type StarRatingProps = {
  rating: number;
  max?: number;
};

const StarRating = ({ rating, max = 5 }: StarRatingProps) => {
  // round to the nearest 0.5 so 4.3 -> 4.5, 4.2 -> 4, 4.8 -> 5
  const rounded = Math.round(rating * 2) / 2;
  const full = Math.floor(rounded);
  const half = rounded % 1 !== 0 ? 1 : 0;
  const empty = Math.max(0, max - full - half);

  return (
    <div className="flex items-center gap-1 text-sm">
      <span
        className="flex text-yellow-400"
        aria-label={`${rating} out of ${max} stars`}
      >
        {Array.from({ length: full }).map((_, i) => (
          <i key={`f${i}`} className="fa-solid fa-star"></i>
        ))}
        {half === 1 && <i className="fa-solid fa-star-half-stroke"></i>}
        {Array.from({ length: empty }).map((_, i) => (
          <i key={`e${i}`} className="fa-regular fa-star"></i>
        ))}
      </span>
      <span className="text-gray-500">{rating}</span>
    </div>
  );
};

export default StarRating;
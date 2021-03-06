import React from "react";
import "./Rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Rating({ rating, type }) {
  const ratingType = type;

  const stars = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ];
  if (rating === undefined) {
  } else {
    for (let i = 0; i < rating; i++) {
      stars[i].filled = true;
    }
  }

  if (ratingType === "client") {
    return (
      <span className="ClientStarRating">
        {stars.map((star, index) => (
          <Star key={index} filled={star.filled} />
        ))}
      </span>
    );
  } else if (ratingType === "tattoo") {
    return (
      <span className="ClientHeartRating">
        {stars.map((star, index) => (
          <Heart key={index} filled={star.filled} />
        ))}
      </span>
    );
  } else {
    return <div>Error: Type not found</div>;
  }
}

function Star({ filled }) {
  const library = filled ? "fas" : "far";
  return <FontAwesomeIcon className="star-color" icon={[library, "star"]} />;
}

function Heart({ filled }) {
  const library = filled ? "fas" : "far";
  return <FontAwesomeIcon className="star-color" icon={[library, "heart"]} />;
}

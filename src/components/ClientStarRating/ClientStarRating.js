import React from "react";
import "./ClientStarRating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ClientStarRating({ rating }) {
  const stars = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ];

  for (let i = 0; i < rating; i++) {
    stars[i].filled = true;
  }

  return (
    <span className="ClientStarRating">
      {stars.map((star, index) => (
        <Star key={index} filled={star.filled} />
      ))}
    </span>
  );
}

function Star({ filled }) {
  const library = filled ? "fas" : "far";
  return <FontAwesomeIcon className="star-color" icon={[library, "star"]} />;
}

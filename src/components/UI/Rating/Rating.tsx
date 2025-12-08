import React from "react";
import "./Rating.scss";

type IRatingProps = {
  value: number; // рейтинг 0–5
  max?: number;
};

const Rating = ({ value, max = 5 }: IRatingProps) => {
  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, i) => {
        const full = i + 1 <= value;
        const half = !full && i + 0.5 <= value;

        return (
          <div key={i} className="star-wrapper">
            <svg
              className={`star ${full ? "full" : half ? "half" : ""}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;

import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-lg font-bold">Movie Title</h3>
      <p>Movie description goes here...</p>
    </div>
  );
};

export default MovieCard;

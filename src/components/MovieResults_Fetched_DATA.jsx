import React from "react";
import MovieCard from "./MovieCard";

export default function MovieResults_Fetched_DATA({ results }) {
  // console.log(results)
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full gap-3">
      {results.map((result) => (
        <MovieCard address={result.id} data={result} key={result.id} />
      ))}
    </div>
  );
}

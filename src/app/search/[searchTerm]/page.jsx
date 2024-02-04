import MovieResults_Fetched_DATA from "@/components/MovieResults_Fetched_DATA";
import React from "react";

export default async function page({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6 ">No Movie Found</h1>}
      {results && <MovieResults_Fetched_DATA results={results} />}
    </div>
  );
}

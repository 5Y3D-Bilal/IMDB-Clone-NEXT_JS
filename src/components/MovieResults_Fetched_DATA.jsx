import React from "react";

export default function MovieResults_Fetched_DATA({ results }) {
    // console.log(results)
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result?.original_title}</div>
      ))}
    </div>
  );
}

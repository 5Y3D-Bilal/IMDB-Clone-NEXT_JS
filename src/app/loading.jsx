import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center mt-20">
      <svg viewBox="25 25 50 50" className="svg">
        <circle r="20" cy="50" cx="50" className="circle"></circle>
      </svg>
    </div>
  );
}

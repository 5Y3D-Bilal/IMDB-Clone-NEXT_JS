import React from "react";
import NavBarItems from "./NavBarItems";

export default function NavBar() {
  return (
    <div className="flex gap-3 justify-center p-4 bg-amber-400 text-lg dark:bg-[rgba(51,51,51,0.9)]">
      <NavBarItems title="Trending" param="fetchTrending" />
      <NavBarItems title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function Searchbox() {
  // navigate to searched movie
  const router = useRouter();
  //   Set Search Query
  const [search, setSearch] = useState();

  //   Form Handler
  const handleSumbit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSumbit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-md placeholder:text-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400 flex items-center gap-1"
        disabled={!search}
      >
        Search
        <CiSearch className="mb-1" />
      </button>
    </form>
  );
}

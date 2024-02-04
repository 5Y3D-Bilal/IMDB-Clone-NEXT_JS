import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

export default function MovieCard({ address, data }) {
  // console.log(data)
  return (
    <div
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 hover:-translate-y-2 duration-500"
      key={address}
    >
      <Link href={`/movie/${address}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            data.backdrop_path || data.poster_path
          }`}
          alt="Movie Poster"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{data.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {data.title || data.name}
          </h2>
          <p className="flex items-center">
            {data.release_date || data.first_air_date}
            <AiFillLike className="mb-1 mr-1 ml-3" />
            {data.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

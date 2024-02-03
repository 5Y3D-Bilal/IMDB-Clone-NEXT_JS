"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-500 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-2  decoration-amber-600 rounded-lg "
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

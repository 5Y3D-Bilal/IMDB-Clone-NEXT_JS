"use client";
// Dark and Light Mode icons
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [themee, setThemee] = useState(false);
  useEffect(() => setThemee(true), []);

  return (
    <div>
      {/* So on Refresh it will first moute and then show the right icon */}
      {themee &&
        //   If the theme is dark use light(Sun) icon
        (currentTheme === "dark" ? (
          <MdSunny
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500 hover:scale-110 duration-500 sunIcon"
          />
        ) : (
          //   else the theme is dark use dark(Moon) icon
          <BsMoonStarsFill
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500 hover:scale-110 duration-500"
          />
        ))}
    </div>
  );
}

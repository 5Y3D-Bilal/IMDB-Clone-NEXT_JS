//* To use server side rendring of data we need to use ("use client").
"use client";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-100 dark:bg-[rgba(27,27,27,0.9)] min-h-screen select-none transition-colors duration-500">{children}</div>
    </ThemeProvider>
  );
}

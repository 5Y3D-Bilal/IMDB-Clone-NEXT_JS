import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "./ThemeProvider";
import NavBar from "@/components/NavBar";

const iLeague_Spartannter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "by bilal567",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iLeague_Spartannter.className}>
        <Provider>
          <Header />
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

import Link from "next/link";
import Menuitem from "./menu-item";
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import DarkModeSwitcher from "./DarkModeSwitcher";

export default function Header() {
  return (
    <div className=" flex justify-between items-center p-3 lg:max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menuitem title="home" address="/" Icon={FaHome} />
        <Menuitem title="about" address="/about" Icon={IoMdInformationCircle} />
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitcher />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="w-full m-2">
      <Link className="flex" href={"/"}>
        <HomeIcon height={22} />
        Ana Sayfa
      </Link>
      <span></span>
      {pathName === "/" && (
        <div className="text-4xl text-center ">Hoş Geldin</div>
      )}
    </div>
  );
};

export default Header;

"use client";

import useScroll from "@/hooks/useScroll";
import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import { useEffect, useState } from "react";
import menu from "../../public/icons/menu.svg";
import { SideBar } from "./Sidebar";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="group cursor-pointer text-[16px] lg:text-[20px] duration-200"
  >
    <span className="px-2 text-white">{label}</span>
    <div className="h-0.5 w-1 bg-transparent group-hover:w-full group-hover:bg-white duration-300" />
  </a>
);

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [navbarshow, setNavbarShow] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState(0);
  const scroll = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scroll.y > 300 && scroll.y - scroll.lastY > 0) setNavbarShow(false);
    else setNavbarShow(true);
  }, [scroll.y, scroll.lastY]);

  return (
    <div
      className={`w-full duration-300 py-4 z-50 fixed ${
        navbarshow ? "top-0" : "-top-24"
      } ${scrollY > 300 ? "bg-[#0a0a0a] backdrop-blur-sm shadow" : ""}`}
    >
      <SideBar open={sideBarOpen} close={() => setSideBarOpen(false)} />
      <div className="h-[60px] w-full flex items-center justify-center">
        <div className="w-[90vw] sm:w-[90vw] mx-auto h-full rounded-b-full flex items-center justify-between">
          <a href="/">
            <label className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer">
              {IndividualData.icon}
            </label>
          </a>
          <div className="sm:flex hidden items-center space-x-6">
            <NavItem href="/portfolio" label="Portfolio" />
            <NavItem href="/cv" label="CV" />
          </div>
          <Image
            loading="lazy"
            src={menu}
            onClick={() => setSideBarOpen(true)}
            width={36}
            height={36}
            alt="menu icon"
            className="w-9 sm:hidden"
          />
        </div>
      </div>
    </div>
  );
}

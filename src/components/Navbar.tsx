"use client";
import useScroll from "@/hooks/useScroll";
import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menu = "/icons/menu.svg";
import { SideBar } from "./Sidebar";

const NavItem = ({
  href,
  label,
  active,
  onClick,
}: {
  href?: string;
  label: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="group cursor-pointer text-[16px] lg:text-[20px] duration-200"
  >
    <span className="px-2 text-white">{label}</span>
    <div
      className={`h-0.5 duration-300 ${
        active
          ? "w-full bg-white"
          : "w-1 bg-transparent group-hover:w-full group-hover:bg-white"
      }`}
    />
  </a>
);

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [navbarshow, setNavbarShow] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [showCvModal, setShowCvModal] = useState(false);
  const scroll = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setActiveLink(pathname);
  }, [pathname]);

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

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    setTimeout(() => {
      router.push(href);
    }, 0);
  };

  const handleCvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCvModal(true);
  };

  return (
    <>
      <div
        className={`w-full duration-300 py-4 z-50 fixed ${
          navbarshow ? "top-0" : "-top-24"
        } ${
          scrollY > 300
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-black/40 backdrop-blur-sm"
        }`}
      >
<SideBar
  open={sideBarOpen}
  close={() => setSideBarOpen(false)}
  onCvClick={() => {
    setShowCvModal(true);
    setSideBarOpen(false);
  }}
/>
        <div className="h-[32px] w-full flex items-center justify-center">
          <div className="w-[90vw] sm:w-[90vw] mx-auto h-full rounded-b-full flex items-center justify-between">
            <Link href="/">
              <label className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer">
                {IndividualData.icon}
              </label>
            </Link>
            <div className="sm:flex hidden items-center space-x-6">
              <NavItem
                href="/portfolio"
                label="Portfolio"
                active={mounted && activeLink === "/portfolio"}
                onClick={(e) => handleLinkClick(e, "/portfolio")}
              />
              <a
                href="#"
                onClick={handleCvClick}
                className="group cursor-pointer text-[16px] lg:text-[20px] duration-200"
              >
                <span className="px-2 text-white">CV</span>
                <div className="h-0.5 duration-300 w-1 bg-transparent group-hover:w-full group-hover:bg-white" />
              </a>
            </div>
            <Image
              loading="lazy"
              src={menu}
              onClick={() => setSideBarOpen(true)}
              width={32}
              height={32}
              alt="menu icon"
              className="w-9 sm:hidden"
            />
          </div>
        </div>
      </div>

      {showCvModal && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setShowCvModal(false)}
              className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGrvqS5JZ8/7vorCJG6pkeFaOkbgYckGg/view?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
      )}
    </>
  );
}
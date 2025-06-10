"use client";

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import mail from "../../public/icons/mail.svg";
import phone from "../../public/icons/phone.svg";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  const navigate = useRouter();

  return (
    <>
      {/* Contact info section - visible only on md and larger screens */}
      <div className="lg:hidden w-full bg-black text-white">
        <div className="w-[95vw] sm:w-[90vw] mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-y-1 sm:gap-y-4 py-3">
          <div className="flex flex-col items-center gap-y-2 sm:gap-y-0">
            <div
              onClick={() => {
                navigate.push("/");
              }}
              className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer"
            >
              {IndividualData.icon}
            </div>
            <SocialMedia />
          </div>

          <div className="flex flex-col items-center sm:items-start  gap-2 mt-4">
            <a
              className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white hover:text-gray-300 transition-colors duration-200"
              href={`mailto:${IndividualData.mail}`}
            >
              <Image
                src={mail}
                width={32}
                loading="lazy"
                height={32}
                className="w-[20px]"
                alt="mail logo"
              />
              {IndividualData.mail}
            </a>
            <a
              className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white hover:text-gray-300 transition-colors duration-200"
              href={`tel:${IndividualData.phone}`}
            >
              <Image
                src={phone}
                loading="lazy"
                width={32}
                height={32}
                className="w-[20px]"
                alt="phone logo"
              />
              {IndividualData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Credit line - visible on all screen sizes */}
      <div className="lg:border-none border-t-[1px] bg-black text-white/70 text-center border-solid border-white/20 py-2 text-[12px]">
        Designed & Built by{" "}
        <a
          href="/"
          className="font-bold text-white pl-1 hover:text-gray-300 transition-colors duration-200"
        >
          {IndividualData.name}
        </a>
      </div>
    </>
  );
};

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import mail from "../../public/icons/mail.svg";
import { SocialMedia } from "./SocialMedia";

export const SidebarFooter = () => {
  return (
    <div className="mx-auto w-full px-4 py-2 space-y-2 border-t-[1px] border-solid border-white/70 ">
      <SocialMedia />
      <div className="flex flex-col items-center gap-2">
        <a
          className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
          href={`mailto:${IndividualData.mail}`}
        >
          <Image
            src={mail}
            className={" w-[15px] "}
            alt="mail logo"
            width={15}
            loading="lazy"
            height={15}
          />
          {IndividualData.mail}
        </a>
      </div>
    </div>
  );
};

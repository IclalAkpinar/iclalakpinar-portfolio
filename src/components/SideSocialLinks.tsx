import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import github from "../../public/icons/github.svg";
import instagram from "../../public/icons/instagram.svg";
import linkedin from "../../public/icons/linkedin.svg";

export const SideSocialLinks = () => {
  const iconClass =
    "w-6 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";
  return (
    <div className="fixed bottom-0 left-[5vw] hidden lg:block">
      <ul className="flex flex-col items-center gap-6 after:h-[90px] after:w-[1px] after:bg-gray-200 after:block after:mt-6">
        <li>
          <a href={IndividualData.github} target="_blank">
            <Image
              src={github}
              className={iconClass}
              width={40}
              height={40}
              loading="lazy"
              alt="github logo"
            />
          </a>
        </li>
        <li>
          <a href={IndividualData.linkedin} target="_blank">
            <Image
              src={linkedin}
              className={iconClass}
              width={40}
              loading="lazy"
              height={40}
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href={IndividualData.instagram} target="_blank">
            <Image
              src={instagram}
              className={iconClass}
              alt="instagram logo"
              width={40}
              height={40}
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

import { IndividualData } from "@/models/individual.data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import closeIcon from "../../public/icons/close.svg";

export const SidebarHeader = ({ close }: { close: () => void }) => {
  const navigator = useRouter();

  return (
    <div className="w-full flex items-center text-white justify-between px-4 py-2 border-b-[1px] border-solid">
      <h1
        onClick={() => {
          close();
          navigator.push("/");
        }}
        className="text-[35px] hover:scale-[1.03] font-bold duration-300 cursor-pointer"
      >
        {IndividualData.icon}
      </h1>
      <Image
        onClick={close}
        src={closeIcon}
        loading="lazy"
        alt="close"
        className="size-9 cursor-pointer"
        width={30}
        height={30}
      />
    </div>
  );
};

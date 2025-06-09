import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowIcon from "../../public/icons/arrow.svg";

const dashed = () => {
  return (
    <div className="group-hover:block flex-grow  hidden h-[0.2px] mx-1.5" />
  );
};

const arrow = () => {
  return (
    <Image
      src={arrowIcon}
      loading="lazy"
      alt="Arrow icon"
      width={4}
      height={4}
      className="size-4 hidden group-hover:block duration-300 group-hover:animate-slideRight "
    />
  );
};

const Title = (content: string, navigate: string, close: () => void) => {
  const navigator = useRouter();

  return (
    <a
      onClick={() => {
        close();
        navigator.push(navigate);
      }}
      rel={content + "link"}
      className={`group flex items-center justify-between duration-300 text-white hover:text-white px-2 py-1 rounded-xl text-[24px] font-bold ${
        navigate && "cursor-pointer   hover:bg-white/15"
      }`}
    >
      {content}
      {navigate && (
        <>
          {dashed()}
          {arrow()}
        </>
      )}
    </a>
  );
};

export const SidebarBody = ({ close }: { close: () => void }) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 px-2 py-6  flex-grow">
      {Title("Portfolio", "/portfolio", close)}
      {Title("CV", "/cv", close)}
    </div>
  );
};

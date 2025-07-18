import { useRouter } from "next/navigation";

const dashed = () => {
  return (
    <div className="group-hover:block flex-grow  hidden h-[0.2px] mx-1.5" />
  );
};

const Title = (
  content: string,
  navigate: string,
  close: () => void,
  isCV?: boolean,
  onCvClick?: () => void
) => {
  const navigator = useRouter();

  const handleClick = () => {
    close();
    if (isCV && onCvClick) {
      onCvClick();
    } else {
      navigator.push(navigate);
    }
  };

  return (
    <a
      onClick={handleClick}
      rel={content + "link"}
      className={`group flex items-center justify-between duration-300 text-white hover:text-white px-2 py-1 rounded-xl text-[24px] font-bold ${
        (navigate || isCV) && "cursor-pointer   hover:bg-white/15"
      }`}
    >
      {content}
      {(navigate || isCV) && <>{dashed()}</>}
    </a>
  );
};

export const SidebarBody = ({
  close,
  onCvClick
}: {
  close: () => void;
  onCvClick?: () => void;
}) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 px-2 py-6  flex-grow">
      {Title("Portfolio", "/portfolio", close)}
      {Title("CV", "", close, true, onCvClick)}
    </div>
  );
};
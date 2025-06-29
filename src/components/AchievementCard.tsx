import { AchievementItem } from "@/models/achievement";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AchievementCard({ data }: { data: AchievementItem }) {
  const router = useRouter();

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (data.path) {
      router.push(data.path);
    }
  };

  return (
    <div className="w-full max-w-[3000px] mx-auto bg-white/5 border-2 border-solid border-white/40 shadow-sm shadow-white/10 rounded-lg flex flex-col justify-between">
      <div className="relative px-2 pt-2 pb-2 flex flex-col sm:flex-row gap-4 min-w-[200px] h-full">
        {data.date && (
          <span className="absolute bottom-2 right-2 sm:top-2 sm:right-2 text-white text-xs px-2 py-1 rounded-full z-20 font-semibold">
            {data.date}
          </span>
        )}
        <div className="relative w-full sm:w-[40%] aspect-[4/3] bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={data.image}
            alt={data.title + " image"}
            fill
            className="object-cover w-full h-full rounded-lg"
            loading="lazy"
            quality={60}
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>
        <div className="w-full space-y-3 flex flex-col justify-center relative py-4 pb-8">
          <h1 className="font-bold line-clamp-2 text-[18px] sm:text-[20px] md:[24px]">
            {data.title}
          </h1>
          {data.description && (
            <p className="text-[12px] md:text-[14px] lg:text-[18px] opacity-85 line-clamp-3">
              {data.description}
            </p>
          )}
          {data.badge &&
            (data.path ? (
              <button
                onClick={handleBadgeClick}
                className="absolute bottom-0 sm:bottom-2 left-0 sm:left-auto sm:right-2 bg-white/5 text-white text-xs lg:text-sm font-semibold px-2 lg:px-3 py-1 rounded-lg z-20 shadow hover:bg-white-8 w-auto max-w-fit"
              >
                {data.badge}
              </button>
            ) : (
              <span className="absolute bottom-0 sm:bottom-2 left-0 sm:left-auto sm:right-2 bg-white/5 text-white text-xs lg:text-sm font-semibold px-2 md:px-3 py-1 rounded-lg z-20 shadow hover:bg-white-8 w-auto max-w-fit">
                {data.badge}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

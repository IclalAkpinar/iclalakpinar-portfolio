"use client";
import { PortfolioItem } from "@/models/portfolio";
import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PortfolioCard({ data }: { data: PortfolioItem }) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => {
        navigate.push(data.path);
      }}
      className="cursor-pointer w-full max-w-[3000px] mx-auto bg-white/5 border-2 border-solid border-white/40 shadow-sm shadow-white/10 rounded-lg flex flex-col justify-between items-center"
    >
      <div className="px-2 pt-2 pb-2 flex flex-col sm:flex-row gap-4 min-w-[200px] h-full">
        <div className="relative w-full sm:w-[65%] aspect-[5.5/3] bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={data.image[0]}
            alt={data.title + " image"}
            fill
            className="object-cover"
            loading="lazy"
            quality={60}
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>

        <div className="w-full space-y-3 flex flex-col justify-center relative py-4">
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0 z-10 text-primary hover:text-white text-2xltransition-colors"
              title="Go to link"
              onClick={(e) => e.stopPropagation()}
            >
              <span>
                <LinkOutlined {...({} as any)} />
              </span>
            </a>
          )}
          <h1 className="font-bold line-clamp-1 text-[20px]">{data.title}</h1>
          <p className="text-[16px] opacity-85 line-clamp-3">
            {data.description}
          </p>
          <div className="w-full pt-2 flex flex-wrap gap-2 justify-end">
            {data.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-white/10 text-xs text-white px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

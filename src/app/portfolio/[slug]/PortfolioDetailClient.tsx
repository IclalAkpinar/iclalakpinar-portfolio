"use client";

import { LinkOutlined } from "@ant-design/icons";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  slug: string;
  title: string;
  image: string[];
  technologies: string[];
  link?: string;
  description: string;
}

interface Props {
  project: Project;
}

export default function PortfolioDetailClient({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="w-[95vw] md:w-[80vw] lg:w-[65vw] 2xl:w-[60vw] mx-auto pb-20 min-h-screen">
        <h1 className="text-[34px] font-bold sm:text-[52px] mt-28 mb-10 text-center sm:text-start">
          {project.title}
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {project.image.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openModal(img)}
            >
              <Image
                src={img}
                width={400}
                height={300}
                alt={project.title + " image " + (i + 1)}
                className="w-full aspect-[16/9] object-cover rounded-lg border-[1px] border-solid border-white/20 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Sadece ikonun arkasında blur ve koyu arka plan */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 hover:bg-black/90 backdrop-blur-md rounded-full p-2 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Tüm görselde koyu blur efekti */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 text-sm text-white px-3 py-1 rounded-full border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-lg font-medium transition-colors"
              >
                <LinkOutlined {...({} as any)} />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-300 my- leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <Image
              src={selectedImage}
              width={1080}
              height={720}
              alt="Büyütülmüş görüntü"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

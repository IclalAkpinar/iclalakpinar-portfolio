import { portfolioData } from "@/models/portfolio";
import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function PortfolioDetailPage({ params }: Props) {
  // slug ile eşleşen projeyi bul
  const project = portfolioData.find((item) => item.slug === params.slug);

  console.log("Aranan slug:", params.slug); // Debug için
  console.log("Bulunan proje:", project); // Debug için

  if (!project) {
    return notFound();
  }

  return (
    <div className="w-[95vw] md:w-[80vw] lg:w-[65vw] 2xl:w-[60vw] mx-auto pb-20 min-h-screen">
      <h1 className="text-[34px] font-bold sm:text-[52px] mt-28 mb-10 text-center sm:text-start">
        {project.title}
      </h1>

      {/* Fotoğraflar */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
  {project.image.slice(0, 2).map((img, i) => (
    <Image
      key={i}
      src={img}
      width={400}
      height={300}
      alt={project.title + " image " + (i + 1)}
      className="w-full aspect-[16/9] object-cover rounded-lg border-[1px] border-solid border-white/20"
      loading="lazy"
    />
  ))}
</div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
        {/* Teknolojiler */}
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
              className="inline-flex items-start gap-2 text-lg font-medium  transition-colors"
            >
              <LinkOutlined {...({} as any)} />
            </a>
          )}
        </div>
      </div>
      {/* Açıklama */}
      <p className="text-gray-300 my-8 leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}

// Static params generation for better performance
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

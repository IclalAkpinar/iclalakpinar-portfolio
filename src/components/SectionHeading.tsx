interface SectionHeadingProps {
  title: string;
  className?: string;
  mb?: number;
}

export const SectionHeading = ({
  title,
  className = "",
  mb = 12,
}: SectionHeadingProps) => {
  const marginBottom = `${mb * 0.25}rem`;

  return (
    <h2
      className={`text-5xl md:text-6xl font-bold text-white mb-8 md:mb-12 ${className}`}
    >
      {title}
    </h2>
  );
};

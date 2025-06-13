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
  // Convert margin value to rem for more precise control
  const marginBottom = `${mb * 0.25}rem`;

  return (
    <h2
      className={`text-4xl md:text-6xl font-bold text-white ${className}`}
      style={{ marginBottom }}
    >
      {title}
    </h2>
  );
};

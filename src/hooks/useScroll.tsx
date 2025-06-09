import { useEffect, useState } from "react";

export default function useScroll() {
  const [data, setData] = useState<{
    y: number;
    lastY: number;
  }>({
    y: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          y: window.scrollY,
          lastY: last.y,
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}

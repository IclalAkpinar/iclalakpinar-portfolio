import PortfolioContainer from "@/containers/PortfolioContainer";

export default function PortfolioPage() {
  return (
    <div className="w-[95vw] md:w-[80vw] lg:w-[65vw] 2xl:w-[60vw] mx-auto pb-20 min-h-screen">
      <h1 className="text-[52px] font-bold sm:text-[65px] mt-28 mb-10 text-center sm:text-start">
        Portfolio
      </h1>
      <PortfolioContainer />
    </div>
  );
}

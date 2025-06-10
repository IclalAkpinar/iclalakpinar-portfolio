import { IndividualData } from "@/models/individual.data";

export const SideEmailLink = () => {
  return (
    <div className="fixed bottom-0 right-[5vw] hidden lg:block">
      <a
        href="mailto:iclalakpinar2404@gmail.com"
        className="text-white writing-vertical-lr hover:-translate-y-1 transition-transform duration-200 flex items-center gap-6 after:h-[90px] after:w-[1px] after:bg-white after:block after:mt-6"
      >
        {IndividualData.mail}
      </a>
    </div>
  );
};

import AchievementContainer from "@/containers/AchievementContainer";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section className="flex items-center justify-center w-full pb-12">
      <div className="w-[90vw] lg:w-[78vw] max-w-7xl mx-auto ">
        <SectionHeading title="Achievements" />
        <AchievementContainer />
      </div>
    </section>
  );
}

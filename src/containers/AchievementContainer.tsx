"use client";

import AchievementCard from "@/components/AchievementCard";
import { achievements } from "@/models/achievement";

export default function AchievementContainer() {
  return (
    <div className="space-y-6 overflow-x-hidden">
      {achievements.map((item) => (
        <AchievementCard key={item.id} data={item} />
      ))}
    </div>
  );
}

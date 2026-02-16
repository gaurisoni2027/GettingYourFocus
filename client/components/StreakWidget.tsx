import { Flame } from "lucide-react";
import { useFocusStreak } from "@/hooks/useFocusStreak";

export const StreakWidget = () => {
  const { streak, lastTask } = useFocusStreak();

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Flame className="text-orange-500" size={28} />
        <div>
          <p className="text-lg font-semibold">{streak} Day Streak</p>
          <p className="text-sm text-muted-foreground">
            Keep building momentum 🔥
          </p>
        </div>
      </div>

      {lastTask && (
        <p className="text-sm text-muted-foreground mt-4">
          Last focused on: {lastTask}
        </p>
      )}
    </div>
  );
};

import { StatsCards } from "@/components/StatsCards";
import { TaskList } from "@/components/TaskList";
import { StreakWidget } from "@/components/StreakWidget";


const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your tasks today.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Streak Widget */}
      <StreakWidget />

      {/* Task List */}
      <TaskList />

    </div>
  );
}

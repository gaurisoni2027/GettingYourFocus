import { StatsCards } from "@/components/StatsCards";
import { TaskList } from "@/components/TaskList";

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

      {/* Task List */}
      <TaskList />
    </div>
  );
}

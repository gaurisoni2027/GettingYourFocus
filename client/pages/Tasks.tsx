import { TaskList } from "@/components/TaskList";

export default function Tasks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">All Tasks</h1>
        <p className="text-muted-foreground mt-2">
          View and manage all your tasks in one place.
        </p>
      </div>
      <TaskList />
    </div>
  );
}

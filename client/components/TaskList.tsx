import { useState } from "react";
import { Search, Plus, Edit2, Trash2, ChevronDown, CheckCircle2, Circle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Design new dashboard layout",
    description: "Create mockups and wireframes for the dashboard UI",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Fix authentication bug",
    description: "Resolve login issues in production",
    priority: "high",
    completed: true,
  },
  {
    id: 3,
    title: "Write API documentation",
    description: "Document all REST endpoints and parameters",
    priority: "medium",
    completed: false,
  },
  {
    id: 4,
    title: "Update user profile page",
    description: "Implement profile editing and avatar upload",
    priority: "medium",
    completed: false,
  },
  {
    id: 5,
    title: "Optimize database queries",
    description: "Reduce query time for task retrieval",
    priority: "low",
    completed: true,
  },
  {
    id: 6,
    title: "Add dark mode toggle",
    description: "Implement theme switching functionality",
    priority: "low",
    completed: false,
  },
];

const getPriorityColor = (
  priority: "low" | "medium" | "high"
): string => {
  switch (priority) {
    case "high":
      return "bg-red-500/10 text-red-400 border border-red-500/20";
    case "medium":
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    case "low":
      return "bg-green-500/10 text-green-400 border border-green-500/20";
  }
};

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Tasks</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and track your tasks
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200">
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-card border border-border hover:border-primary px-4 py-2 rounded-lg text-foreground transition-colors duration-200 w-full sm:w-auto">
            <span className="text-sm font-medium">
              {filter === "all"
                ? "All Tasks"
                : filter === "completed"
                  ? "Completed"
                  : "Pending"}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
            {["all", "completed", "pending"].map((option) => (
              <button
                key={option}
                onClick={() =>
                  setFilter(option as "all" | "completed" | "pending")
                }
                className={cn(
                  "w-full text-left px-4 py-2 text-sm transition-colors",
                  filter === option
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-foreground hover:bg-sidebar-accent"
                )}
              >
                {option === "all"
                  ? "All Tasks"
                  : option === "completed"
                    ? "Completed"
                    : "Pending"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-1 p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors flex-shrink-0"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-primary transition-colors" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground transition-colors hover:text-foreground" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={cn(
                      "font-semibold text-foreground",
                      task.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {task.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {task.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2.5 py-1 rounded",
                        getPriorityColor(task.priority)
                      )}
                    >
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <button className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-muted-foreground hover:text-foreground">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-muted-foreground hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            {/* Illustration Placeholder */}
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-teal-500/10 border border-indigo-500/20">
              <div className="flex items-center justify-center">
                <Zap className="w-12 h-12 text-indigo-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No focus units yet.
            </h3>

            {/* Subtext */}
            <p className="text-muted-foreground max-w-sm text-center mb-8">
              Start by creating your first task and take control of your
              productivity.
            </p>

            {/* Create First Task Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-indigo-500/30">
              <Plus className="w-5 h-5" />
              Create First Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronDown,
  CheckCircle2,
  Circle,
  Zap,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useFocusStreak } from "@/hooks/useFocusStreak";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
}

const FOCUS_DURATION = 1500; // 25 minutes

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

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  const { incrementStreak } = useFocusStreak();

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleFocusComplete();
          return FOCUS_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleFocusComplete = () => {
    if (!activeTask) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === activeTask.id
          ? { ...task, completed: true }
          : task
      )
    );

    incrementStreak(activeTask.title);

    setIsRunning(false);
    setActiveTask(null);
    alert("🔥 Focus session completed! Great job!");
  };

  const startFocus = (task: Task) => {
    setActiveTask(task);
    setTimeLeft(FOCUS_DURATION);
    setIsRunning(true);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">

      {/* FOCUS MODAL */}
      {activeTask && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 text-white">
          <h2 className="text-3xl font-bold mb-6">
            {activeTask.title}
          </h2>

          <div className="text-6xl font-mono mb-8">
            {formatTime(timeLeft)}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
            >
              {isRunning ? "Pause" : "Resume"}
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setActiveTask(null);
              }}
              className="px-6 py-3 bg-red-600 rounded-lg font-semibold"
            >
              Cancel
            </button>
          </div>

          <p className="mt-8 text-muted-foreground">
            Stay focused. One task at a time.
          </p>
        </div>
      )}

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Tasks</h2>
      </div>

      {/* Task Cards */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">

              <button
                onClick={() => toggleTask(task.id)}
                className="mt-1"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              <div className="flex-1">
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

                {!task.completed && (
                  <button
                    onClick={() => startFocus(task)}
                    className="mt-3 flex items-center gap-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    <Flame className="w-4 h-4" />
                    Start Focus
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

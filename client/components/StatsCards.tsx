import { CheckCircle2, ListTodo, Clock } from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
}

export const StatsCards = () => {
  const stats: StatCard[] = [
    {
      icon: <ListTodo className="w-6 h-6" />,
      title: "Total Tasks",
      value: 24,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Completed Tasks",
      value: 16,
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Pending Tasks",
      value: 8,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-foreground mt-2">
                {stat.value}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

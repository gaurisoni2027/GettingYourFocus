import { useState, useEffect } from "react";

const STORAGE_KEY = "focus_streak_data";

interface FocusData {
  streak: number;
  lastDate: string;
  lastTask?: string;
}

export const useFocusStreak = () => {
  const [data, setData] = useState<FocusData>({
    streak: 0,
    lastDate: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const incrementStreak = (taskTitle: string) => {
    const today = new Date().toDateString();

    let newStreak = data.streak;

    if (data.lastDate !== today) {
      newStreak = data.streak + 1;
    }

    const updated = {
      streak: newStreak,
      lastDate: today,
      lastTask: taskTitle,
    };

    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const resetStreak = () => {
    const reset = { streak: 0, lastDate: "" };
    setData(reset);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
  };

  return { ...data, incrementStreak, resetStreak };
};

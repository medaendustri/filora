"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-md",
        "border border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-800",
        "text-gray-900 dark:text-gray-100",
        "hover:bg-gray-50 dark:hover:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "transition-all duration-200"
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
    </button>
  );
}

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
        className='w-8 h-8 rounded-full'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" ? <Sun /> : <Moon />}
    </div>
  )
}
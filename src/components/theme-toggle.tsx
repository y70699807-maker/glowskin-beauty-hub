import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggle}
        className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary sm:inline-flex"
      >
        <span className="size-2 rounded-full bg-primary" />
        {isDark ? "Dark" : "Light"}
      </button>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        onClick={toggle}
        className="relative h-[26px] w-[46px] shrink-0 rounded-full border border-border bg-secondary transition-colors"
      >
        <span
          className={`absolute left-[2px] top-[2px] size-[20px] rounded-full bg-card shadow-card transition-transform duration-300 ${
            isDark ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
}

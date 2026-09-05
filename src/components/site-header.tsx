import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#mission", label: "Mission" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-semibold text-primary-foreground">
            G
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Glowskin</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/admin"
            activeProps={{ className: "text-foreground font-medium" }}
            className="rounded-full px-3.5 py-2 transition-opacity hover:opacity-70"
          >
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-5 pb-4 pt-2 text-sm md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-3 py-3 text-muted-foreground hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="block rounded-2xl px-3 py-3 text-muted-foreground hover:bg-secondary"
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold">Glowskin</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cool glass, dewy skin. Made in small batches.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:opacity-70">
            Home
          </Link>
          <span className="size-1 rounded-full bg-primary" />
          <Link to="/about" className="hover:opacity-70">
            About
          </Link>
          <span className="size-1 rounded-full bg-primary" />
          <Link to="/mission" className="hover:opacity-70">
            Mission
          </Link>
        </div>
      </div>
    </footer>
  );
}

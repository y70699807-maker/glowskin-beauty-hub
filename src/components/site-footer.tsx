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
          <a href="#home" className="hover:opacity-70">
            Home
          </a>
          <span className="size-1 rounded-full bg-primary" />
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <span className="size-1 rounded-full bg-primary" />
          <a href="#mission" className="hover:opacity-70">
            Mission
          </a>
        </div>
      </div>
    </footer>
  );
}

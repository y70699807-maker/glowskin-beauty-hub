import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroSerum from "@/assets/hero-serum.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glowskin — Cool glass, dewy skin" },
      {
        name: "description",
        content:
          "Glowskin makes small-batch, fragrance-free skincare: weightless hydration for a calm, luminous finish.",
      },
      { property: "og:title", content: "Glowskin — Cool glass, dewy skin" },
      {
        property: "og:description",
        content: "Small-batch, fragrance-free skincare for a calm, luminous finish.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="rise-in lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                DEWY · CLINICAL · KIND
              </span>
              <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Cool glass,
                <br />
                <span className="text-primary">dewy</span> skin.
              </h1>
              <p className="mt-6 max-w-[44ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Glowskin Hyaluronic Veil sits on your skin like the cool weight of a glass
                dropper — a single press of weightless moisture that settles into a calm, luminous
                finish.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                  Shop the Veil
                </button>
                <Link
                  to="/about"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Our story
                </Link>
              </div>
              <div className="mt-9 flex items-center gap-6 text-xs font-medium text-muted-foreground">
                <span>4.9 ★ · 2,140 reviews</span>
                <span className="hidden sm:inline">Fragrance-free</span>
                <span className="hidden sm:inline">Dermatologist-tested</span>
              </div>
            </div>

            <div className="rise-in lg:col-span-6">
              <div className="glowbox relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={heroSerum}
                  alt="Glowskin Hyaluronic Veil serum bottle on a pastel background"
                  width={1024}
                  height={1280}
                  className="size-full object-cover"
                />
                <div className="surface-card absolute bottom-4 left-4 flex items-center gap-3 px-4 py-3">
                  <span className="grid size-9 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    30ml
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">Hyaluronic Veil</p>
                    <p className="text-xs text-muted-foreground">Serum · $48</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { to: "/about", label: "About", text: "Small-batch care, made to be felt" },
              { to: "/vision", label: "Vision", text: "Skin that reads as rest, not routine" },
              { to: "/mission", label: "Mission", text: "Prove fewer steps can be enough" },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="surface-card glowbox block p-7 sm:p-8">
                <span className="mb-4 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {c.label}
                </span>
                <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight">
                  {c.text}
                </h2>
                <p className="mt-3 text-sm font-medium text-muted-foreground">Read more →</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

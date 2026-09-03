import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — Glowskin" },
      {
        name: "description",
        content:
          "Glowskin's vision: a two-step ritual is enough. Skin that reads as rest, not routine.",
      },
      { property: "og:title", content: "Our Vision — Glowskin" },
      {
        property: "og:description",
        content: "A two-step ritual is enough — skin that reads as rest, not routine.",
      },
    ],
  }),
  component: VisionPage,
});

const pillars = [
  {
    title: "Fewer steps",
    body: "A shelf of ten bottles is a chore. We design so two products can carry a whole routine.",
  },
  {
    title: "Calm textures",
    body: "Cool on contact, weightless after. Nothing that tingles for the sake of feeling active.",
  },
  {
    title: "Quiet packaging",
    body: "Glass, refills, and labels you can actually read. No noise on the counter.",
  },
];

function VisionPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="rise-in max-w-3xl">
          <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Vision
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Skin that reads as rest, not routine
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            A future where a two-step ritual is enough — where people look glowy because they feel
            held, not because they over-layered.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="surface-card glowbox p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

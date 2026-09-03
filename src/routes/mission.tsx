import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — Glowskin" },
      {
        name: "description",
        content:
          "Glowskin's mission: publish every formula, batch and test, and prove fewer steps can be enough.",
      },
      { property: "og:title", content: "Our Mission — Glowskin" },
      {
        property: "og:description",
        content: "Honest glass, honest numbers — every formula, batch and test published.",
      },
    ],
  }),
  component: MissionPage,
});

const commitments = [
  {
    label: "01",
    title: "Publish every formula",
    body: "Full ingredient percentages on the site, not just the pretty ones.",
  },
  {
    label: "02",
    title: "Date every batch",
    body: "Batch number and mix date printed on each bottle, traceable to its test results.",
  },
  {
    label: "03",
    title: "Test on real routines",
    body: "Eight-week panels with real skin, and we report what didn't work too.",
  },
  {
    label: "04",
    title: "Refill, don't replace",
    body: "Glass bottles designed to be kept, with refills for every core product.",
  },
];

function MissionPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="rise-in max-w-3xl">
          <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Mission
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Prove fewer steps can be enough
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We publish every formula, batch and test. Honest glass, honest numbers, and a standard
            our community can hold us to.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {commitments.map((c) => (
            <article key={c.label} className="surface-card glowbox flex gap-5 p-7">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold text-secondary-foreground">
                {c.label}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

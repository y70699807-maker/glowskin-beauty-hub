import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import aboutFlatlay from "@/assets/about-flatlay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Glowskin — Small-batch skincare" },
      {
        name: "description",
        content:
          "How Glowskin started: short formulas, proven actives, glass never plastic, and skincare that feels as calm as it works.",
      },
      { property: "og:title", content: "About Glowskin — Small-batch skincare" },
      {
        property: "og:description",
        content: "Short formulas, proven actives, glass never plastic — the Glowskin story.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="rise-in lg:col-span-6">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              About
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Small-batch care, made to be felt
            </h1>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Glowskin began in a quiet studio kitchen with one belief: skincare should feel as calm
              as it works. We blend a short list of proven actives into glass, never plastic, and
              keep formulas short enough to pronounce.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Every batch is mixed in small runs, tested on real routines, and dated on the bottle.
              Nothing is fragranced to feel expensive — the texture does that work instead.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "12", l: "actives" },
                { v: "100%", l: "glass" },
                { v: "0", l: "fragrance" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-secondary py-5">
                  <p className="font-display text-2xl font-semibold">{s.v}</p>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rise-in lg:col-span-6">
            <div className="glowbox aspect-[16/10] w-full overflow-hidden rounded-3xl bg-secondary">
              <img
                src={aboutFlatlay}
                alt="Flat lay of Glowskin glass jars and a dropper on cream textile"
                width={1280}
                height={800}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

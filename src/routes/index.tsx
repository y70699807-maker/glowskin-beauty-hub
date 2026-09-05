import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroSerum from "@/assets/hero-serum.jpg";
import aboutFlatlay from "@/assets/about-flatlay.jpg";

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

const visionPillars = [
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

const missionCommitments = [
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

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Home / Hero */}
        <section id="home" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-24">
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
                <a
                  href="#about"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Our story
                </a>
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

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="rise-in lg:col-span-6">
              <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                About
              </span>
              <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Small-batch care, made to be felt
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Glowskin began in a quiet studio kitchen with one belief: skincare should feel as
                calm as it works. We blend a short list of proven actives into glass, never plastic,
                and keep formulas short enough to pronounce.
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
        </section>

        {/* Vision */}
        <section id="vision" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="rise-in max-w-3xl">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Vision
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Skin that reads as rest, not routine
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A future where a two-step ritual is enough — where people look glowy because they feel
              held, not because they over-layered.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {visionPillars.map((p) => (
              <article key={p.title} className="surface-card glowbox p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-8 lg:py-24">
          <div className="rise-in max-w-3xl">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Mission
            </span>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Prove fewer steps can be enough
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We publish every formula, batch and test. Honest glass, honest numbers, and a standard
              our community can hold us to.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {missionCommitments.map((c) => (
              <article key={c.label} className="surface-card glowbox flex gap-5 p-7">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold text-secondary-foreground">
                  {c.label}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

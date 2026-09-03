import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Glowskin" },
      {
        name: "description",
        content:
          "Glowskin admin dashboard: weekly revenue, orders, customers and product stock at a glance.",
      },
      { property: "og:title", content: "Admin Dashboard — Glowskin" },
      {
        property: "og:description",
        content: "Track Glowskin revenue, orders, customers and product stock levels.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

const stats = [
  { label: "Revenue · 7d", value: "$18,240", delta: "▲ 12.4%", up: true },
  { label: "Orders · 7d", value: "342", delta: "▲ 6.1%", up: true },
  { label: "New customers", value: "97", delta: "▼ 2.3%", up: false },
  { label: "Repeat rate", value: "41%", delta: "▲ 3.8%", up: true },
];

const products = [
  { name: "Hyaluronic Veil Serum", price: "$48", stock: "1,240", status: "In stock" },
  { name: "Dew Barrier Cream", price: "$39", stock: "860", status: "In stock" },
  { name: "Glass Cleansing Gel", price: "$28", stock: "44", status: "Low stock" },
  { name: "Petal Sun Essence SPF 40", price: "$52", stock: "0", status: "Out" },
];

function statusClass(status: string) {
  if (status === "In stock") return "bg-mint text-mint-foreground";
  if (status === "Low stock") return "bg-butter text-butter-foreground";
  return "bg-rose text-rose-foreground";
}

function AdminDashboard() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
        <div className="rounded-[32px] border border-border bg-card p-5 shadow-panel sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground">
                Admin · Dashboard
              </p>
              <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Good morning, Sami
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Here's how Glowskin is tracking this week.
              </p>
            </div>
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              New product
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl bg-secondary p-5">
                <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{s.value}</p>
                <p
                  className={`mt-2 text-xs font-semibold ${
                    s.up ? "text-mint-foreground" : "text-rose-foreground"
                  }`}
                >
                  {s.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-border">
            <div className="flex items-center justify-between px-5 py-4">
              <h2 className="font-display text-lg font-semibold">Products</h2>
              <span className="text-xs font-medium text-muted-foreground">
                {products.length} items
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-y border-border text-left text-xs font-medium text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Product</th>
                    <th className="px-5 py-3 font-medium">Price</th>
                    <th className="px-5 py-3 font-medium">Stock</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr
                      key={p.name}
                      className={i < products.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-5 py-4 font-medium">{p.name}</td>
                      <td className="px-5 py-4">{p.price}</td>
                      <td className="px-5 py-4">{p.stock}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(
                            p.status,
                          )}`}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

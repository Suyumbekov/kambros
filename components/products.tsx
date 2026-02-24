import Image from "next/image"

const productCategories = [
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    alt: "Industrial chemical bottles and laboratory equipment",
    title: "Chemicals",
    items: [
      "Froth Flotation Reagents",
      "Flocculants",
      "Xanthates",
      "MIBC & Frothers",
      "SMBS & Caustic Soda",
      "Copper Sulphate (Blue Vitriol)",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Heavy mining machinery parts and industrial tyres",
    title: "Mining Machinery Spare Parts",
    items: [
      "Mining Tyres",
      "Motor Spare Parts",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    alt: "Steel grinding balls and mining mill supplies",
    title: "Mining Supplies",
    items: [
      "Steel Grinding Balls",
      "Ceramic Beads",
      "Grinding Cylpebs",
      "Grinding Rods",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "Industrial hardware tools and electronic equipment",
    title: "Other Mining Products",
    items: [
      "Hardware Products",
      "Software Products",
      "Industrial Tools",
      "Electronics",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1618840626133-54463084a141?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Industrial pipes, flanges and valves for hydro-power plants",
    title: "For Hydro-Power Plants",
    items: [
      "Pipes",
      "Flanges",
      "Valves",
      "Reducer Tee",
      "LR Elbow",
    ],
  },
]

export function Products() {
  return (
    <section id="products" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">
            What We Supply
          </p>
          <h2
            className="text-3xl font-bold text-secondary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-balance">Our Product Catalogue</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We supply a comprehensive range of industrial chemicals, mining machinery spare parts,
            supplies, and hydro-power plant components to operations worldwide.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Category Image */}
              <div className="relative h-44 w-full">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3
                    className="text-base font-semibold text-white drop-shadow"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Item List */}
              <ul className="space-y-2 p-5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

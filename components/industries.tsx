import { Mountain, Zap, Construction, FlaskConical, Car, Atom } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons"

const industries = [
    {
    icon: Mountain,
    title: "Mining",
    description:
      "Comprehensive supply solutions for the mining industry, from sourcing specialized equipment to managing delivery and compliance for smooth, efficient operations.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description:
      "End-to-end supply services for laboratories, including sourcing specialized equipment and chemical reagents, with full compliance and temperature-controlled logistics to ensure safe and precise delivery.",
  },

  {
    icon: Zap,
    title: "Power Generation",
    description:
      "Supplying mini hydro power plants with essential components, including pipes, flanges, power generators, and transformers, ensuring efficient and reliable energy production.",
  },
  {
    icon: Construction,
    title: "Drilling",
    description:
      "Providing drilling equipment and spare parts tailored for mining operations to ensure efficient and uninterrupted performance.",
  },
  {
    icon: Atom,
    title: "Chemical Reagents",
    description:
      "Delivering chemical reagents for use in both laboratory settings and mining operations, ensuring quality and consistency.",
  },
  {
    icon: (props: any) => <FontAwesomeIcon icon={faTruckPickup} {...props} />,
    title: "Special Vehicles",
    description:
      "Equipping industries with special vehicles designed to operate reliably across diverse temperatures, altitudes, and challenging conditions.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">Industries We Serve</p>
          <h2
            className="text-3xl font-bold text-primary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-balance">Expertise across critical global industries</span>
          </h2>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            KAMBROS LLC is a global supply chain company serving a broad spectrum of industries, including—but not limited to—mining, laboratories, power generation, drilling, special vehicles, and chemical reagents.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10"
            >
              <industry.icon className="mb-4 h-8 w-8 text-accent" />
              <h3
                className="mb-2 text-sm font-semibold text-primary-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {industry.title}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground/60">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

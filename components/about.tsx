import { Globe, Clock, Package, Users } from "lucide-react"

const stats = [
  { icon: Clock, value: "20+", label: "Years of Experience" },
  { icon: Globe, value: "2", label: "Global Offices" },
  { icon: Package, value: "5", label: "Industries Served" },
  { icon: Users, value: "100%", label: "Client Commitment" },
]

export function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">About Us</p>
            <h2
              className="text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-balance">A little extra in everything we do</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {"Kambros LLC's area of expertise covers a wide variety of equipment and spares and value added services such as sourcing, procurement, expediting and transportation."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are committed to providing practical solutions with regards to sourcing, procurement,
              expediting, inspection, consolidation of shipments, export packing and transportation
              services. So you no longer need different suppliers and forwarders, which saves a lot of
              time, effort and above all money.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you are interested in learning more about any of our services, feel free to call us.
              We would be happy to talk with you about how we can support your requirements in the best
              possible way.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center shadow-sm"
              >
                <stat.icon className="mb-4 h-6 w-6 text-accent" />
                <span
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

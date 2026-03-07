import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const procurementFeatures = [
  "Sourcing & procurement",
  "Expediting and quality inspection",
  "Consolidation of shipments",
  "Export packaging services",
  "Turnkey procurement solutions",
  "Cost-effective time-saving fulfillment",
]

const warehouseFeatures = [
  "Order management and fulfillment",
  "Pick, pack and ship operations",
  "Manufacturing and plant site delivery",
  "Professional Inspection",
  "Export Documentation",
  "Global Warehousing & Delivery",
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Procurement Services */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/test3.png"
              alt="Industrial warehouse with organized shelving and equipment for procurement services"
              fill
              className="object-contain"
            />
            <div className="absolute bg-primary/20" />
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">
              What We Do
            </p>
            <h2
              className="text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Procurement Services
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The right products are sourced from reliable manufacturers and received at the nearest warehouse for consolidation and control. Inspections are carried out either at the supplier’s site or at the warehouse to verify quality, compliance, and accuracy before shipment.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {procurementFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warehousing & Distribution */}
        <div id="warehousing" className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">
              Logistics
            </p>
            <h2
              className="text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {"Warehousing & Distribution"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cargo is packed according to transportation requirements, export documentation and formalities are prepared, and delivery is arranged through trusted logistics partners directly to the final destination, ensuring a smooth and reliable international supply process.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {warehouseFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
            <Image
              src="/images/warehouse.jpg"
              alt="Distribution warehouse with high shelving and logistics operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

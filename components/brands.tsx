"use client"

// Brand logos are served from /public/brands/
const brandLogos = [
  "abb-logo.svg",
  "Acumen-International.png",
  "Allen-Bradley.png",
  "allison-transmission-1.svg",
  "Amphenol.png",
  "ashcroft.png",
  "atlas-copco.svg",
  "auma.png",
  "baldor-motors-and-drives.svg",
  "belden-4.svg",
  "Bendix.png",
  "Billy-Pugh.png",
  "Blohm-voss.png",
  "bobcat-3.svg",
  "bosch.svg",
  "Braden.png",
  "bridgestone-26989.svg",
  "brother.png",
  "CAD.png",
  "cam-tech.png",
  "castrol-12.svg",
  "cat.svg",
  "Cavins.png",
  "Crosby.png",
  "danfoss.png",
  "den-con.png",
  "Detroit.png",
  "Deutz.png",
  "Dewalt.svg",
  "Dixon.png",
  "dodge.png",
  "Donaldson.png",
  "Drager.png",
  "eaton.png",
  "electrolux.png",
  "emerson.png",
  "Enerpac.png",
  "esab.png",
  "fag.png",
  "fisher.png",
  "Flender.png",
  "FMC.png",
  "Forum.png",
  "G-E.png",
  "gardner-denver.png",
  "Gearench.png",
  "GG_Logo_jpg.gif",
  "Global-Manufacturing.png",
  "good-year.png",
  "grohe.png",
  "grundfos.png",
  "gummi-USA.png",
  "hilti-1.svg",
  "hima.png",
  "hitachi-2.svg",
  "hobart.png",
  "HP.png",
  "hubbel.png",
  "Hydril.png",
  "hyundai.png",
  "IMI.png",
  "ina.png",
  "ingersoll-rand.png",
  "isuzu-2.svg",
  "jet-lube.png",
  "John-Deere.png",
  "karcher.png",
  "Kemper.png",
  "komatsu-3.svg",
  "KSB.png",
  "kubota-logo.svg",
  "Lang.png",
  "Lewa.png",
  "liebherr.svg",
  "lincoln-electric.png",
  "linde-1.svg",
  "MAN.png",
  "manitou.png",
  "Mattco.png",
  "Maytag.png",
  "McCoy.png",
  "Mercedes.png",
  "mersen.png",
  "mettler-toledo.png",
  "michelin.png",
  "milton-roy.png",
  "mitsubishi.png",
  "mobil.png",
  "MSA.png",
  "MTU.png",
  "nissan.png",
  "NOV.png",
  "odrill-MCM.png",
  "offshore-handling-systems.png",
  "Oteco.png",
  "Panolin.png",
  "parker.png",
  "pentair.png",
  "perkins.png",
  "premium.png",
  "probe.png",
  "rema-tiptop.png",
  "renault.png",
  "resinex.png",
  "Rexnord.png",
  "Rexroth.png",
  "Rubicon.png",
  "Safeguard.png",
  "samsung.png",
  "sandvik-2.svg",
  "shell.png",
  "siemens.png",
  "skf.png",
  "Stewart-Stevenson.png",
  "sti-screens.png",
  "Sullair.png",
  "terex.png",
  "total.png",
  "toyota.png",
  "vlamboog.png",
  "voith.png",
  "volvo.png",
  "weatherford.png",
  "Westco.png",
  "xylem.png"
]

// Split into two rows for the marquee
const brandsGroup1 = brandLogos.slice(0, Math.ceil(brandLogos.length / 2))
const brandsGroup2 = brandLogos.slice(Math.ceil(brandLogos.length / 2))

// Duplicate the lists so the marquee loops seamlessly
const marqueeItems1 = [...brandsGroup1, ...brandsGroup1]
const marqueeItems2 = [...brandsGroup2, ...brandsGroup2]

export function Brands() {
  return (
    <section id="brands" className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent font-medium">
          Trusted Partners
        </p>
        <h2
          className="text-3xl font-bold text-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-balance">Brands We Supply</span>
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground max-w-2xl">
          KAMBROS LLC is a global supply chain company serving a broad spectrum of industries. 
          We source and supply products from over 200 world-leading manufacturers, 
          ensuring quality and reliability for every order.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6">
        {/* Row 1 - Moves Left */}
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-4 brands-marquee-left">
            {marqueeItems1.map((logo, i) => (
              <BrandCard key={`row1-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="relative">
          {/* Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-4 brands-marquee-right">
            {marqueeItems2.map((logo, i) => (
              <BrandCard key={`row2-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframe styles */}
      <style jsx>{`
        .brands-marquee-left {
          width: max-content;
          animation: marquee-left 120s linear infinite;
        }
        .brands-marquee-right {
          width: max-content;
          animation: marquee-right 120s linear infinite;
        }
        .brands-marquee-left:hover, .brands-marquee-right:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

function BrandCard({ logo }: { logo: string }) {
  return (
    <div className="flex h-32 w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-8 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 group cursor-default">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/brands/${logo}`}
        alt="Brand Logo"
        className="h-[100px] w-[100px] object-contain opacity-60 transition-opacity group-hover:opacity-100 grayscale-0"
      />
    </div>
  )
}


import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Industries } from "@/components/industries"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Brands } from "@/components/brands"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Services />
      <Products />
      <Brands />
      <CTA />
      <Footer />
    </main>
  )
}

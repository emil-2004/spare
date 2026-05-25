import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ProductCategories from "@/components/sections/ProductCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesServed from "@/components/sections/IndustriesServed";
import TruckAssembly from "@/components/sections/TruckAssembly";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Workflow from "@/components/sections/Workflow";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TruckAssembly />
      <CompanyOverview />
      <ProductCategories />
      <WhyChooseUs />
      <IndustriesServed />
      <FeaturedProducts />
      <Workflow />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

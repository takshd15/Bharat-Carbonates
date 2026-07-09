import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import StatsStrip from "@/components/StatsStrip";
import Overview from "@/components/Overview";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import ManufacturingExcellence from "@/components/ManufacturingExcellence";
import Process from "@/components/Process";
import Infrastructure from "@/components/Infrastructure";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Hero />
      <StatsStrip />
      <Overview />
      <Products />
      <Industries />
      <ManufacturingExcellence />
      <Process />
      <Infrastructure />
      <Cta />
      <Footer />
    </div>
  );
}

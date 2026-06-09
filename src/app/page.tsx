import Hero from "@/components/home/Hero";
import OverviewSection from "@/components/home/OverviewSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <main id="top">
      <Hero />
       <OverviewSection />
       <WhyChooseUs />
    </main>
  );
}
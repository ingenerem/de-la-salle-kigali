import FadeIn from "../ui/FadeIn";
import AboutCard from "./AboutCard";
import NewsCard from "./NewsCard";
import ProgramsCard from "./ProgramsCard";

export default function OverviewSection() {
  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-3 ">

        <AboutCard />

        <ProgramsCard />

        <FadeIn className="h-full">
          <NewsCard />
        </FadeIn>
      </div>
    </section >
  );
}
import Link from "next/link";
import Card from "../ui/Card";

export default function ProgramsCard() {
  return (

    <div id="programmes" className="h-full scroll-mt-36 card-target rounded-2xl transition
             target:scale-[1.02]
             target:ring-4
             target:ring-yellow-400
             target:ring-offset-4">

      <Card className="p-6 h-full ">
      <p className="text-sm font-bold uppercase text-[var(--primary)]">
        Our Programmes
      </p>

      <div className="mt-2 h-1 w-10 bg-[var(--accent)]" />

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-semibold text-[var(--primary)]">
            Early Years (P1 – P3)
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            Play-based learning that builds curiosity,
            language and confidence.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--primary)]">
            Lower Primary (P4 – P6)
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            Building strong foundations in literacy,
            numeracy, ICT and life skills.
          </p>
        </div>
      </div>

      {/*<Link
        href="/academics"
        className="mt-6 inline-block font-semibold text-[var(--primary)] hover:text-[var(--accent)]"
      >
        View All Programmes →
      </Link>*/}
    </Card>

    </div>
    
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-950 px-6 py-5 text-white md:flex-row md:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              🎓
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Ready to take the next step?
              </h2>

              <p className="text-sm text-blue-100">
                We can't wait to welcome you to the De La Salle family.
              </p>
            </div>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
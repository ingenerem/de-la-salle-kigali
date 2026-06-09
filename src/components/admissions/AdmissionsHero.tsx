import Image from "next/image";
import Link from "next/link";

export default function AdmissionsHero() {
  return (
    <section className="bg-blue-950 px-4 py-10 text-white md:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Admissions
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Begin your journey with De La Salle
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
            Learn about the application process, required documents, and
            important admissions information for new families.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-100"
            >
              Apply Now
            </Link>

            <a
              href="#application-process"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Process
            </a>
          </div>
        </div>

        <div className="relative h-64 overflow-hidden rounded-3xl shadow-2xl md:h-72 lg:h-80">
          <Image
            src="/images/admission-kids.png"
            alt="De La Salle students walking on campus"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
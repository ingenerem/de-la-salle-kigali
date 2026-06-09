type Step = {
  number: string;
  title: string;
  description: string;
};

type ApplicationProcessProps = {
  steps: Step[];
};

export default function ApplicationProcess({
  steps,
}: ApplicationProcessProps) {
  return (
    <section
      id="application-process"
      className="bg-white px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Application Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            Simple steps to apply
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Follow the steps below to begin the admissions process. Details may
            vary by grade level.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-lg font-bold text-white">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-blue-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
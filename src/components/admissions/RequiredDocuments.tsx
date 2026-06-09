export default function RequiredDocuments() {
  const documents = [
    {
      title: "Academic Records",
      description:
        "Previous report cards and transcripts.",
    },
    {
      title: "Birth Certificate",
      description:
        "Copy of the student's birth certificate.",
    },
    {
      title: "Passport Photos",
      description:
        "Recent passport-sized photographs.",
    },
    {
      title: "Transfer Documents",
      description:
        "Required for transferring students.",
    },
    {
      title: "Additional Requirements",
      description:
        "May vary depending on grade level.",
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Requirements
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
            Required Documents
          </h2>

          <p className="mt-4 text-slate-600">
            The following items are commonly requested during the admissions
            process. Exact requirements may vary.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {documents.map((document) => (
            <div
              key={document.title}
              className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-3xl">📄</div>

              <h3 className="font-bold text-blue-950">
                {document.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-blue-50 p-6 text-center">
          <p className="text-sm text-slate-700">
            Requirements may vary by grade level. Please contact the admissions
            office for the most up-to-date information.
          </p>
        </div>
      </div>
    </section>
  );
}
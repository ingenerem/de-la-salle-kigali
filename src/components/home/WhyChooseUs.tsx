import Card from "../ui/Card";

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-wider text-[var(--accent)]">
            Why Choose De La Salle Kigali
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[var(--primary)]">
            Building Future Leaders
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We nurture students academically, spiritually, socially, and morally
            in a caring Lasallian environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
              📚
            </div>

            <h3 className="font-bold text-[var(--primary)]">
              Academic Excellence
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Strong foundations that prepare learners for future success.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl">
              ✝️
            </div>

            <h3 className="font-bold text-[var(--primary)]">
              Faith & Values
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Character formation rooted in Christian values and service.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              🛡️
            </div>

            <h3 className="font-bold text-[var(--primary)]">
              Safe Environment
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              A welcoming community where every child feels supported.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
              🌟
            </div>

            <h3 className="font-bold text-[var(--primary)]">
              Leadership
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Encouraging responsibility, confidence, and service to others.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
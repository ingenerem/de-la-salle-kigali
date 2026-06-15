import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section >
      {/* Mobile hero */}
      <div className="relative overflow-hidden md:hidden">
        <Image
          src="/images/hero-kids.jpeg"
          alt="De La Salle Kigali students learning in class"
          fill
          priority
          className="object-cover object-top blur-[1.5px]"
        />

        <div className="absolute inset-0 bg-blue-950/70" />

        <div className="relative z-10 px-6 pt-7 pb-10 text-white">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
            Welcome To
          </p>

          <h1 className="mb-2 text-4xl font-bold leading-tight">
            Kigali De La Salle School
          </h1>

          <h2 className="mb-2 text-2xl font-bold leading-tight text-yellow-400">
            Teaching minds, touching hearts
            <br />
            and transforming lives
          </h2>

          <div className="mb-5 mt-4 h-[2px] w-40 bg-white" />

          <p className="max-w-[390px] text-base leading-7 text-blue-50">
            We provide a nurturing and joyful environment where every child is
            known, valued, and inspired to learn, grow and shine.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/#whyus"
              className="flex h-11 flex-1 items-center justify-center rounded-md bg-yellow-400 px-4 text-[11px] font-bold uppercase tracking-wide text-blue-950"
            >
              Why Choose Us
            </Link>

            <Link
              href="/admissions"
              className="flex h-11 flex-1 items-center justify-center rounded-md border border-white/80 px-4 text-[11px] font-bold uppercase tracking-wide text-white"
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>

     
     {/* Tablet/Desktop hero */}
<div className="hidden min-h-[560px] overflow-hidden bg-blue-950 md:grid md:grid-cols-[42%_58%]">
  
<div className="flex items-center px-6 py-12 text-white md:px-10 lg:px-20">
  <div className="max-w-[520px]">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 lg:mb-4 lg:text-sm">
      Welcome To
    </p>

    <h1 className="mb-3 text-3xl font-bold leading-tight md:text-4xl lg:mb-4 lg:text-5xl">
      Kigali De La Salle School
    </h1>

    <h2 className="text-2xl font-bold leading-tight text-yellow-400 md:text-2xl lg:text-3xl">
      Teaching minds, touching hearts
      <br />
      and transforming lives
    </h2>

    <div className="mb-5 mt-5 h-[2px] w-20 bg-white lg:mb-7 lg:mt-6 lg:w-24" />

    <p className="mb-7 max-w-[440px] text-base leading-7 text-blue-50 lg:mb-10 lg:text-lg lg:leading-8">
      We provide a nurturing and joyful environment where every child is known,
      valued, and inspired to learn, grow and shine.
    </p>

    <div className="flex flex-wrap gap-3 lg:gap-4">
      <Link
        href="/#whyus"
        className="flex h-11 items-center justify-center rounded-md bg-yellow-400 px-5 text-xs font-bold uppercase text-blue-950 lg:h-12 lg:px-7 lg:text-sm"
      >
        Why Choose Us
      </Link>

      <Link
        href="/admissions#admissions-top"
        className="flex h-11 items-center justify-center rounded-md border border-white px-5 text-xs font-bold uppercase text-white lg:h-12 lg:px-7 lg:text-sm"
      >
        Admissions Info
      </Link>
    </div>
  </div>
  </div>

  {/* Right curved image panel */}
  <div className="relative min-h-[560px] overflow-hidden rounded-l-[47%] border-l-2 border-blue-950/80">
   

    <div className="absolute inset-0 bg-blue-950/15" />
     <Image
      src="/images/hero-kids.jpeg"
      alt="De La Salle Kigali students learning in class"
      fill
      priority
      className="object-cover object-center blur-[1px]"
    />
  </div>
</div>

    </section>
  );
}
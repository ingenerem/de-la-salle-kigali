import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";

export default function AboutCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="/images/school-building.png"
          alt="De La Salle Kigali school building"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-bold uppercase text-[var(--primary)]">
          About De La Salle - Kigali
        </p>

        <div className="mt-2 h-1 w-10 bg-[var(--accent)]" />

        <p className="mt-4 text-sm leading-6 text-gray-600">
          De La Salle - Kigali is a Catholic Lasallian school committed to
          providing a safe, inclusive, and stimulating environment where
          children develop academically, socially, and morally.
        </p>

        <Link
          href="/about"
          className="mt-5 inline-block font-semibold text-[var(--primary)] hover:text-[var(--accent)]"
        >
          Read More →
        </Link>
      </div>
    </Card>
  );
}
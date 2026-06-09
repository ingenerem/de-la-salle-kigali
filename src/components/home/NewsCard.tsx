import Link from "next/link";
import Card from "../ui/Card";

export default function NewsCard() {
  return (
    
    <Card className="p-6">
      <p className="text-sm font-bold uppercase text-[var(--primary)]">
        Latest News & Events
      </p>

      <div className="mt-2 h-1 w-10 bg-[var(--accent)]" />

      <div className="mt-6 space-y-5">
        
        <article>
          <p className="text-xs text-gray-500">
            June 2026
          </p>

          <h3 className="mt-1 font-semibold text-[var(--primary)]">
            Admissions for the 2026 Academic Year Open
          </h3>
        </article>

        <article>
          <p className="text-xs text-gray-500">
            May 2026
          </p>

          <h3 className="mt-1 font-semibold text-[var(--primary)]">
            End of Term Parent Meeting
          </h3>
        </article>
      </div>

      <Link
        href="/news"
        className="mt-6 inline-block font-semibold text-[var(--primary)] hover:text-[var(--accent)]"
      >
        View All News →
      </Link>
      
    </Card>
  );
}
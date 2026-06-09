import Link from "next/link";
import { Menu } from "lucide-react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      {/* Main Header */}
      <div className="px-3 sm:px-4">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          {/* Left */}
          <div className="flex items-center gap-3 md:w-64">
            <button className="md:hidden" aria-label="Open menu">
              <Menu size={30} />
            </button>

            <Link href="/" >
  <Logo />
  </Link>
          </div>

          {/* Center */}
          <nav className="hidden flex-1 justify-center gap-8 md:flex">
            <Link href="/#top">Home</Link>
            <Link href="/admissions#admissions-top">Admissions</Link>
            <Link href="/#contact">Contact Us</Link>
          </nav>

          {/* Right */}
          <div className="ml-auto flex justify-end md:w-64">
            <Link
              href="/apply"
              className="rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white sm:px-4"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Soft Divider */}
      <div className="h-2 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Contact Strip */}
      <div className="bg-slate-100 text-gray-700">
  <div className="mx-auto flex items-center justify-center overflow-x-auto whitespace-nowrap text-[10px] sm:text-[11px] lg:min-h-8 lg:text-xs">
    <div className="flex items-center gap-5 lg:gap-10">
            <a href="tel:+250788123456" className="hover:text-[var(--accent)]">
              📞 +250 788 123 456
            </a>

            <a
              href="mailto:info@delasalle-kigali.rw"
              className="hover:text-[var(--accent)]"
            >
              ✉ info@delasalle-kigali.rw
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=KG+9+Ave,+Kacyiru,+Kigali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[var(--accent)]"
            >
              <FaMapMarkerAlt />
              <span>KG 9 Ave, Kacyiru, Kigali</span>
            </a>

            <a
              href="https://wa.me/250788123456"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80"
            >
              <FaWhatsapp className="text-xs text-[#25D366] lg:text-base" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
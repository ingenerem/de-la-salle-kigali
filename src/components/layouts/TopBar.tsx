import { FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="relative z-20 flex justify-center bg-white">
      <div className="-mt-1 w-full bg-[var(--primary)] text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5">
        <div className="flex min-h-8 items-center overflow-x-auto whitespace-nowrap px-4 text-[10px] sm:justify-center sm:text-[11px] lg:min-h-9 lg:px-8 lg:text-sm">
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
              className="hover:text-[var(--accent)]"
            >
              📍 KG 9 Ave, Kacyiru, Kigali
            </a>

            <a
              href="https://wa.me/250788123456"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-[var(--accent)]"
            >
              <FaWhatsapp className="text-xs lg:text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
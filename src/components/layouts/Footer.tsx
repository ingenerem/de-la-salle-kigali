import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-blue-950 text-white">
      {/* Curved Top */}
     <div className="relative h-10 bg-white">
  <svg
    className="absolute bottom-0 left-0 h-16 w-full"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,64 C240,120 480,0 720,56 C960,112 1200,24 1440,72 L1440,120 L0,120 Z"
      className="fill-blue-950"
    />
  </svg>
</div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* School Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="De La Salle Kigali Logo"
              width={90}
              height={90}
              className="mb-3"
            />

            <h2 className="text-xl font-bold">
              De La Salle Kigali
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
              A caring Lasallian school community nurturing faith,
              knowledge, character, and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-[var(--accent)]">
              Our values
            </h3>

            <div className="flex flex-col gap-2 text-sm text-white/80">
              <p>Excellence</p>
              <p>Respect</p>
              <p>Integrity</p>
              <p>Community</p>

             
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-[var(--accent)]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-[var(--accent)]" />
                +250 783 806 300
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[var(--accent)]" />
                 lasallekigali@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--accent)]" />
                Address somewhere ntibuka
              </p>

              <a
                href="https://wa.me/250788123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
              >
                <FaWhatsapp className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" border-t border-white/15 pt-2 text-center text-xs text-white/60">
          © 2026 De La Salle Kigali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
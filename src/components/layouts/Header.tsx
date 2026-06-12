"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md ">
      {/* Main Header */}
      <div className="relative">
        <div className="px-3 sm:px-4">
          <div className="mx-auto flex w-full max-w-7xl items-center">
            {/* Left */}
            <div className="flex items-center gap-3 md:w-64">
              <button
                className="lg:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>

              <Link href="/" >
                <Logo />
              </Link>
            </div>
          


          {/* Center */}
          <nav className="hidden flex-1 justify-center gap-8 lg:flex">
            <Link href="/#top">Home</Link>

            <Link href="/#about">About</Link>
            <Link href="/#programmes">Programmes</Link>
            <Link href="/admissions#admissions-top">Admissions</Link>

            <Link href="/#news">News</Link>
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

      {isMenuOpen && (
        <nav className="absolute left-0 top-full z-50 w-full border-t bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-blue-950">
            <Link href="/#top" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            <Link href="/#programmes" onClick={() => setIsMenuOpen(false)}>
              Programmes
            </Link>

            <Link
              href="/admissions#admissions-top"
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>

            <Link href="/#news" onClick={() => setIsMenuOpen(false)}>
              News
            </Link>

            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </nav>
      )}

      {/* Soft Divider */}
      <div className="h-2 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Contact Strip */}
      <div className="bg-slate-100 text-gray-700">
        <div className="mx-auto flex items-center justify-center overflow-x-auto whitespace-nowrap text-[10px] sm:text-[11px] lg:min-h-8 lg:text-xs">
          <div className="flex items-center gap-5 lg:gap-10">
            <a href="tel:+250788123456" className="hover:text-[var(--accent)]">
              📞 +250 783 806 300
            </a>

            <a
              href="mailto:lasallekigali@gmail.com"
              className="hover:text-[var(--accent)]"
            >
              ✉ lasallekigali@gmail.com
            </a>

            <a
              href="https://maps.google.com/?q=X4V3%2BHRF+Kigali+Rwanda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[var(--accent)]"
            >
              <FaMapMarkerAlt />
              <span>X4V3+HRF, Kigali, Rwanda</span>
            </a>

            <a
              href="https://wa.me/+250783806300"
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
      </div>
    </header>
  );
}
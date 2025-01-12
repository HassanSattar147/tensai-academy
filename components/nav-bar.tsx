"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { APPLY_FORM_LINK } from "./hero-section";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1A4DB5]">
            TensaiAcademy
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-[#1A4DB5]">
              About
            </Link>
            <Link
              href="#programs"
              className="text-gray-600 hover:text-[#1A4DB5]"
            >
              Programs
            </Link>
            <Link href="#why-us" className="text-gray-600 hover:text-[#1A4DB5]">
              Why Us
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#1A4DB5]">
              FAQ
            </Link>
            <Link href={APPLY_FORM_LINK} target="_blank">
              <Button className="bg-[#1A4DB5] hover:bg-[#4D31B4] text-white">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-600 hover:text-[#1A4DB5] px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-gray-600 hover:text-[#1A4DB5] px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#why-us"
              className="text-gray-600 hover:text-[#1A4DB5] px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-[#1A4DB5] px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link href={APPLY_FORM_LINK} target="_blank">
              <Button
                className="bg-[#1A4DB5] hover:bg-[#4D31B4] text-white w-full"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// components/Navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      {/* Main navigation */}
      <nav
        className={`${
          isScrolled ? "bg-white shadow-md" : "bg-slate-800"
        } transition-all duration-300 py-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  {/* <div className="h-8 w-8 bg-blue-600 rounded-md mr-2"></div> */}
                  <span
                    className={`font-bold text-3xl ${
                      isScrolled ? "text-slate-800" : "text-white"
                    }`}>
                    EVOLVE
                  </span>
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-6">
                <Link
                  href="/"
                  className={`${
                    isScrolled
                      ? "text-slate-800 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                  } px-2 py-2 text-sm font-medium`}>
                  Home
                </Link>
                {/* Services as direct link */}
                <Link
                  href="/services"
                  className={`${
                    isScrolled
                      ? "text-slate-800 hover:text-blue-600"
                      : "text-gray-300 hover:text-blue-300"
                  } px-2 py-2 text-sm font-medium`}>
                  Services
                </Link>
                <Link
                  href="/about"
                  className={`${
                    isScrolled
                      ? "text-slate-800 hover:text-blue-600"
                      : "text-gray-300 hover:text-blue-300"
                  } px-2 py-2 text-sm font-medium`}>
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    isScrolled
                      ? "text-slate-800 hover:text-blue-600"
                      : "text-gray-300 hover:text-blue-300"
                  } px-2 py-2 text-sm font-medium`}>
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-1.5 rounded-md ${
                  isScrolled
                    ? "text-slate-800 hover:text-blue-600"
                    : "text-gray-400 hover:text-white"
                } hover:bg-gray-100 focus:outline-none`}
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 md:hidden">
            <div className="bg-white shadow-lg divide-y divide-gray-200">
              <div className="px-2 py-2 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}>
                  Home
                </Link>

                <Link
                  href="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}>
                  Services
                </Link>

                <Link
                  href="/industries"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}>
                  Industries
                </Link>

                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}>
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
              <div className="py-3 px-4 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@evolve.com</span>
                </div>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

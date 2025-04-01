// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EVOLVE | Business Consultancy Services",
  description:
    "Professional business consultancy services to help your organization grow and succeed.",
};

export const brand = "Evolve";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// components/Footer.jsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-semibold text-lg">Evolve</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Helping businesses transform, grow, and excel in a competitive
              marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/strategy"
                  className="text-gray-400 hover:text-white text-sm">
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations"
                  className="text-gray-400 hover:text-white text-sm">
                  Operations Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial"
                  className="text-gray-400 hover:text-white text-sm">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital"
                  className="text-gray-400 hover:text-white text-sm">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-gray-400 text-sm">
              <p>Ground Floor, Ankit Apartment,</p>
              <p>Atrey Layout, Pratap Nagar,</p>
              <p>Nagpur, Maharashtra 440020</p>
              <p className="mt-3">contact@{brand}.com</p>
              <p>9156620658</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// app/page.jsx (Homepage)
import Image from "next/image";
import Navbar from "@/components/Navbar";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Strategic Solutions for Business Growth
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We help businesses transform challenges into opportunities with
                tailored consultancy services.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-700">
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80">
                {/* Replace with your actual hero image */}
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-32 w-32 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2-13l5 4-5 4v-8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive business solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Strategic Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Develop a clear roadmap for your business with our strategic
                planning services.
              </p>
              <Link
                href="/services/strategy"
                className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Operations Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Streamline your operations to maximize efficiency and reduce
                costs.
              </p>
              <Link
                href="/services/operations"
                className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Financial Advisory
              </h3>
              <p className="text-gray-600 mb-4">
                Expert financial guidance to help you make informed business
                decisions.
              </p>
              <Link
                href="/services/financial"
                className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Digital Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Leverage technology to create new business values and stay
                competitive.
              </p>
              <Link
                href="/services/digital"
                className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              See what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-500 text-sm">CEO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{brand}&apos;s strategic planning services completely
                transformed our approach to business. We&apos;ve seen a 40%
                growth since implementing their recommendations.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-500 text-sm">
                    CFO, Global Retail Ltd.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;The financial advisory team at {brand} helped us navigate
                through a complex acquisition. Their expertise was invaluable to
                our success. &quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">RM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Martinez</h4>
                  <p className="text-gray-500 text-sm">
                    COO, Manufacturing Solutions
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Operations optimization with {brand} resulted in a 30%
                reduction in production costs and improved workflow efficiency
                across all departments.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-8">
            Schedule a free consultation with our experts and discover how we
            can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

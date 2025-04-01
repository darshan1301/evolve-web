// app/page.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import herosection from "../../public/images/pexels-fauxels-3183197.jpg";
import informationtechnology from "../../public/images/information-tech.jpg";
import finance from "../../public/images/finances.jpg";
import healthcare from "../../public/images/healthcare.jpg";
import manufacturing from "../../public/images/manufacturing.jpg";

import {
  ArrowRight,
  ChevronRight,
  BarChart2,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      content:
        "The strategic insights provided by their team transformed our business approach. We've seen a 40% increase in operational efficiency since implementing their recommendations.",
      image: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "Rajesh Mehta",
      role: "CFO, Global Enterprises",
      content:
        "Their financial advisory services helped us navigate a complex acquisition. The level of expertise and attention to detail was exceptional throughout the entire process.",
      image: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Operations Director, Retail Solutions",
      content:
        "The operations optimization strategy they developed resulted in a 30% reduction in costs and significantly improved our workflow efficiency across all departments.",
      image: "/api/placeholder/60/60",
    },
  ];

  // Core services data
  const coreServices = [
    {
      id: 1,
      title: "Strategic Planning",
      description:
        "Develop clear business roadmaps with our expert strategic planning services focused on sustainable growth.",
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "Financial Advisory",
      description:
        "Make informed financial decisions with our comprehensive analysis and expert guidance.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Operational Excellence",
      description:
        "Streamline operations, reduce costs, and maximize efficiency across your organization.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 4,
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate risks with our comprehensive risk management solutions.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
  ];

  // Industry expertise data
  const industryExpertise = [
    {
      id: 1,
      title: "Technology & IT",
      image: informationtechnology,
    },
    {
      id: 2,
      title: "Finance & Banking",
      image: finance,
    },
    {
      id: 3,
      title: "Healthcare",
      image: healthcare,
    },
    {
      id: 4,
      title: "Manufacturing",
      image: manufacturing,
    },
  ];

  // Carousel state for testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Strategic Solutions for Business Growth
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We help businesses transform challenges into opportunities with
                tailored consultancy services.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-700 transition duration-300">
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden">
                <Image
                  src={herosection}
                  alt="Business Consultancy"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide comprehensive business solutions tailored to your
              specific needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our team has deep domain knowledge across a wide range of
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryExpertise.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition duration-300">
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {industry.title}
                  </h3>
                  <Link
                    href={`/industries/${industry.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    View solutions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              See what our clients have to say about their experience working
              with us.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  currentTestimonial === index
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0 right-0"
                }`}>
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                      /> */}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">250+</p>
              <p className="text-gray-600">Clients Worldwide</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
              <p className="text-gray-600">Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-8">
            Schedule a free consultation with our experts and discover how we
            can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition duration-300">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Clients/Partners Section */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-medium text-gray-600 mb-8">
            Trusted by Leading Companies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex justify-center opacity-70 hover:opacity-100 transition duration-300">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">
                    Client {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}

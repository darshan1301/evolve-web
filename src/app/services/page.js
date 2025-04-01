// app/services/page.jsx
import Link from "next/link";
import Image from "next/image";
import strategicplanning from "../../../public/images/pexels-kampus-8353804.jpg";
import financialadvisory from "../../../public/images/pexels-yankrukov-7693745.jpg";
import operations from "../../../public/images/pexels-tiger-lily-4481260.jpg";
import risk from "../../../public/images/pexels-n-voitkevich-6120214.jpg";
import technology from "../../../public/images/pexels-pixabay-39284.jpg";
import {
  BarChart2,
  TrendingUp,
  Users,
  Shield,
  Code,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  // Core services data
  const coreServices = [
    {
      id: 1,
      category: "strategy",
      title: "Strategic Planning",
      slug: "strategic-planning",
      description:
        "Develop a clear roadmap for your business with our strategic planning services focused on sustainable growth.",
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
      features: [
        "Comprehensive market analysis and competitive positioning",
        "Vision and mission statement development",
        "Long-term business objectives and KPI definition",
        "Actionable implementation roadmap",
        "Organizational alignment strategies",
      ],
      image: strategicplanning,
    },
    {
      id: 2,
      category: "finance",
      title: "Financial Advisory",
      slug: "financial-advisory",
      description:
        "Make informed financial decisions with our comprehensive analysis and expert guidance to maximize ROI.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      features: [
        "Financial health assessment and diagnostic",
        "Investment strategy formulation",
        "Cash flow optimization",
        "Risk analysis and mitigation planning",
        "Mergers and acquisitions advisory",
      ],
      image: financialadvisory,
    },
    {
      id: 3,
      category: "operations",
      title: "Operations Optimization",
      slug: "operations-optimization",
      description:
        "Streamline operations, reduce costs, and maximize efficiency across your organization.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      features: [
        "Process mapping and efficiency analysis",
        "Supply chain optimization",
        "Resource allocation improvement",
        "Workflow redesign and automation",
        "Quality management system implementation",
      ],
      image: operations,
    },
    {
      id: 4,
      category: "risk",
      title: "Risk Management",
      slug: "risk-management",
      description:
        "Identify, assess, and mitigate risks with our comprehensive risk management solutions.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      features: [
        "Risk assessment and prioritization",
        "Compliance and regulatory guidance",
        "Risk mitigation strategy development",
        "Business continuity planning",
        "Crisis management preparation",
      ],
      image: risk,
    },
    {
      id: 5,
      category: "technology",
      title: "Digital Transformation",
      slug: "digital-transformation",
      description:
        "Leverage cutting-edge technology to revolutionize your business processes and customer experience.",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Legacy system modernization",
        "Data strategy and analytics implementation",
        "Customer experience enhancement",
      ],
      image: technology,
    },
  ];

  // Filter services based on active tab
  const filteredServices = coreServices;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              We provide comprehensive business solutions tailored to your
              specific needs and objectives. Our expertise spans strategic
              planning, financial advisory, operations, technology, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`md:grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}>
                <div
                  className={`mb-8 md:mb-0 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="ml-3 text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-auto w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      // fill
                      height={300}
                      objectFit="cover"
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a structured approach to understand your business needs
              and deliver solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Discovery
              </h3>
              <p className="text-gray-600">
                We thoroughly analyze your current situation, challenges, and
                objectives.
              </p>

              {/* Connector line - visible on desktop only */}
              <div className="hidden md:block absolute -right-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a tailored plan with clear actions, timelines, and
                deliverables.
              </p>

              {/* Connector lines - visible on desktop only */}
              <div className="hidden md:block absolute -right-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
              <div className="hidden md:block absolute -left-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Implementation
              </h3>
              <p className="text-gray-600">
                We execute the strategy with your team, providing guidance at
                every step.
              </p>

              {/* Connector lines - visible on desktop only */}
              <div className="hidden md:block absolute -right-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
              <div className="hidden md:block absolute -left-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Optimization
              </h3>
              <p className="text-gray-600">
                We measure results, refine the approach, and ensure long-term
                success.
              </p>

              {/* Connector line - visible on desktop only */}
              <div className="hidden md:block absolute -left-4 top-10 w-8 h-0.5 bg-blue-200 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </main>
  );
}

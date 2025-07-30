import { useState } from "react";
import { BriefcaseIcon, ClipboardListIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Strategic Business Planning & Growth",
    icon: BriefcaseIcon,
    description: `description: At Smithswork LLC, our business development services are designed to help businesses identify growth opportunities and expand their market reach. We work with startups, small businesses, and established companies to develop comprehensive strategies that foster sustainable growth. Our services include market analysis, competitor benchmarking, and growth planning to create actionable roadmaps for success.

    We also focus on building strategic partnerships that can accelerate growth and unlock new revenue streams. By understanding your business’s unique value proposition, we help tailor a business development plan that positions you for long-term success. Whether you’re entering a new market, scaling operations, or refining your offerings, Smithswork provides the insights and tools needed to navigate the complexities of business growth.`
  },
  {
    title: "Project Management Services",
    icon: BriefcaseIcon,
    description: `Smithswork LLC specializes in delivering end-to-end project management solutions tailored to meet the unique needs of businesses across multiple industries. Whether it’s agriculture, construction, healthcare, or IT, our team leverages years of expertise to ensure projects are completed on time, within scope, and under budget. We utilize industry-leading methodologies like Agile and Waterfall to customize project delivery frameworks that align with each client’s goals.

    Our approach includes detailed project planning, risk assessment, resource management, and continuous monitoring to ensure optimal outcomes. Through proactive communication and collaboration, we ensure that all stakeholders are aligned throughout the project lifecycle, from inception to completion. Smithswork’s proven track record in managing complex projects enables businesses to drive efficiencies, mitigate risks, and achieve strategic objectives seamlessly.`
  },
  {
    title: "Strategic Fundraising Solutions",
    icon: CurrencyDollarIcon,
    description: `Smithswork LLC offers specialized fundraising services aimed at helping startups and small businesses secure the capital needed for growth and expansion. We work closely with venture capitalists, private equity firms, and other financial institutions to connect businesses with the right investors. Our team excels at crafting compelling value propositions and developing comprehensive fundraising strategies that align with each business’s growth trajectory.

    Our strategic approach focuses not just on securing funding, but also on fostering long-term relationships between businesses and investors. By identifying key growth opportunities and demonstrating scalability, we help businesses position themselves for sustainable success. Whether you’re seeking seed funding, growth capital, or strategic partnerships, Smithswork provides the expertise and network needed to unlock the next phase of your business’s evolution.`
  },
  {
    title: "Risk Management & Insurance",
    icon: ShieldCheckIcon,
    description: `Smithswork LLC provides businesses with comprehensive risk management strategies that protect against unforeseen challenges. We work with organizations of all sizes to assess potential risks in their operations and design custom mitigation frameworks to address them. From identifying vulnerabilities to implementing risk reduction strategies, our proactive approach ensures that businesses can navigate uncertainty with confidence.
    
    Our insurance services complement our risk management offerings, providing access to a wide range of personal and commercial insurance options. We partner with industry-leading carriers such as Chubb, Travelers, and Nationwide to offer competitive coverage for auto, home, general liability, workers’ compensation, and more. With a deep understanding of each client’s risk profile, we help secure the most effective insurance solutions, ensuring robust protection for both individuals and businesses.`
  }
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const Icon = services[activeIndex].icon;

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 relative overflow-hidden">
        
        {/* Watermark Icon */}
        <div className="absolute top-4 left-4 opacity-10">
          <Icon className="w-16 h-16 text-gray-400" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900 relative z-10">
          {services[activeIndex].title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 whitespace-pre-line relative z-10">
          {services[activeIndex].description}
        </p>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2 relative z-10">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border ${
                activeIndex === index
                  ? "bg-[#FF7B47] text-white border-[#FF7B47]"
                  : "bg-white text-gray-800 border-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { BriefcaseIcon, ClipboardListIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Revenue Growth\nAcceleration Program",
    icon: BriefcaseIcon,
    idealFor: [
      "Contractors",
      "Auto shops",
      "B2B service providers seeking to scale"
    ],
    description: [
      "Revenue diagnostics & 90-day growth strategy",
      "Sales pipeline tuning and forecasting tools",
      "Lead generation strategy (digital + direct outreach)",
      "Weekly check-ins and performance tracking",
      "Outcome: A clear, measurable roadmap to revenue expansion"
    ]
  },
  {
    title: "Sales System Buildout\nfor Trades & Shops",
    icon: BriefcaseIcon,
    idealFor: [
      "Businesses relying on",
      "referrals or walk-ins that",
      "need structured selling"
    ],
    description: [
      "B2B sales playbook development",
      "CRM selection, setup & training",
      " Target customer segmentation and outreach framework",
      " Sales team coaching and accountability processes Outcome: Predictable sales process and shorter close cycles",
    ]
  },
  {
    title: "Revenue Growth\nAcceleration Program",
    icon: BriefcaseIcon,
    idealFor: [
      "Contractors",
      "Auto shops",
      "B2B service providers seeking to scale"
    ],
    description: [
      "Revenue diagnostics & 90-day growth strategy",
      "Sales pipeline tuning and forecasting tools",
      "Lead generation strategy (digital + direct outreach)",
      "Weekly check-ins and performance tracking",
      "Outcome: A clear, measurable roadmap to revenue expansion"
    ]
  },
  {
    title: "Revenue Growth\nAcceleration Program",
    icon: BriefcaseIcon,
    idealFor: [
      "Contractors",
      "Auto shops",
      "B2B service providers seeking to scale"
    ],
    description: [
      "Revenue diagnostics & 90-day growth strategy",
      "Sales pipeline tuning and forecasting tools",
      "Lead generation strategy (digital + direct outreach)",
      "Weekly check-ins and performance tracking",
      "Outcome: A clear, measurable roadmap to revenue expansion"
    ]
  },
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const Icon = services[activeIndex].icon;

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto bg-white p-4 relative overflow-hidden">
        
        {/* Watermark Icon */}
        <div className="absolute top-4 left-4 opacity-10">
          <Icon className="w-16 h-16 text-gray-400" />
        </div>
  
        {/* Title */}
        <h2 className="text-3xl whitespace-pre-line font-bold mb-8 text-gray-900 relative z-10">
          {services[activeIndex].title}
        </h2>
  
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* Ideal For */}
          <div>
            <h3 className="font-bold mb-2">Ideal for:</h3>
            <ul className="list-none space-y-1 text-gray-700" style={{ fontFamily: "sans-serif, serif" }}>
              {services[activeIndex].idealFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
  
          {/* What You Get */}
          <div>
            <h3 className="font-bold mb-2">What You Get:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700" style={{ fontFamily: "sans-serif, serif" }}>
              {services[activeIndex].description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
  
        </div>
  
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

import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../public/images/IMG_1164.JPG";
import image2 from "../public/images/IMG_1160.JPG";
import image3 from "../public/images/IMG_1166.JPG";
import image4 from "../public/images/IMG_1165.JPG";
import image5 from "../public/images/IMG_1162.JPG";
import image6 from "../public/images/IMG_1161.JPG";
import image7 from "../public/images/IMG_1163.JPG";

const services = [
  { title: "Revenue Growth\nAcceleration Program", image: image1, idealFor: ["Contractors","Auto shops","B2B service providers seeking to scale"], description: ["Revenue diagnostics & 90-day growth strategy","Sales pipeline tuning and forecasting tools","Lead generation strategy (digital + direct outreach)","Weekly check-ins and performance tracking","Outcome: A clear, measurable roadmap to revenue expansion"] },
  { title: "Sales System Buildout\nfor Trades & Shops", image: image3, idealFor: ["Businesses relying on","referrals or walk-ins that","need structured selling"], description: ["B2B sales playbook development","CRM selection, setup & training","Target customer segmentation and outreach framework","Sales team coaching and accountability processes Outcome: Predictable sales process and shorter close cycles"] },
  { title: "Customer Retention &\nUpsell Optimization", image: image5, idealFor: ["Firms experiencing high","churn or low repeat","business"], description: ["Customer journey mapping","Upsell/cross-sell strategies (e.g. fleet packages, warranties","Referral and loyalty program setup","Client satisfaction measurement tools","Outcome: Increased client lifetime value and revenue stability"] },
  { title: "Marketing-to-Sales\nFunnel Alignment", image: image4, idealFor: ["Companies struggling to","convert marketing leads","into paying clients"], description: ["Offer and messaging optimization","High-converting lead magnets (checklists, guides, etc)","Landing page & follow-up email sequence development","CRM-integrated lead tracking and analytics","Outcome: Better ROI from marketing efforts and improved lead conversion"] },
  { title: "Revenue Operations-\nas-a-Service (RevOps)", image: image2, idealFor: ["Growing businesses","needing structure, data","and performance insight"], description: ["KPI dashboard setup (CAC, LTV, NRR, etc.)","Forecasting and revenue reporting tools","SOPs for quoting, renewals, and onboarding","Quarterly revenue audits and recommendations Outcome: Improved decision-making and financial visibility"] },
  { title: "Strategic Fundraising\nSupport (Equity or Debt)", image: image6, idealFor: ["Owners seeking capital to","grow, invest, or expand"], description: ["Pitch deck and financial modeling support","Capital strategy (SBA, debt, equity, AR financing)","Lender and investor introductions","Fundraising project coordination Outcome: Stronger access to capital with a compelling growth narrative"] },
  { title: "Partnership & Channel\nDevelopment", image: image7, idealFor: ["Businesses seeking new","revenue through alliances","and distribution"], description: ["Strategic partner mapping","Co-branded offer development","Partnership outreach & activation tools","Revenue-sharing model templates Outcome: New, recurring revenue streams via aligned partner"] },
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // Preload images once
  // useEffect(() => {
  //   services.forEach(service => {
  //     const img = new Image();
  //     img.src = service.image.src || service.image;
  //   });
  // }, []);

  const handleChange = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto bg-white relative overflow-hidden">
        
        {/* Top Section with Background Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          {services.map((service, index) => (
            <img
              key={index}
              src={service.image.src || service.image}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-3xl whitespace-pre-line font-bold text-white">
              {services[activeIndex].title}
            </h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 relative z-10">
          <div>
            <h3 className="font-bold mb-2">Ideal for:</h3>
            <ul className="list-none whitespace-pre-line space-y-1 text-gray-700">
              {services[activeIndex].idealFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">What You Get:</h3>
            <ul className="list-disc whitespace-pre-line pl-5 space-y-1 text-gray-700">
              {services[activeIndex].description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2 relative z-10 pb-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleChange(index)}
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

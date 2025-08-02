import Image from 'next/image'

export default function Stats() {
  const items = [
    {
      icon: "/people.f5a05521.svg",
      title: "Strategic Business Planning & Growth",
      description: "Actionable insights and tailored strategies to accelerate your business success.",
      link: "/services",
      dark: false
    },
    {
      icon: "/business.623a0dad.svg",
      title: "Project Management Services",
      description: "Expert project execution across industries, ensuring on-time and on-budget delivery.",
      link: "/services",
      dark: false
    },
    {
      icon: "/website.2001bc01.svg",
      title: "Strategic Fundraising Solutions",
      description: "Empowering startups and small businesses with targeted fundraising strategies for growth.",
      link: "/services",
      dark: false
    },
    {
      icon: "/award.b60ec45e.svg",
      title: "Risk Management & Insurance",
      description: "Comprehensive risk mitigation strategies paired with top-tier insurance solutions.",
      link: "/services",
      dark: true
    }
  ];

  return (
    <section className="w-full bg-white mt-48 py-16">
      <div className="w-[50%] sm:w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
          <div
            key={index}
            className={`p-8 min-h-[450px] flex flex-col justify-between rounded shadow-sm transition duration-300 ${
              item.dark
                ? "bg-[#242A42] text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div>
              <div className="w-12 h-12 relative mb-6">
                <Image src={item.icon} alt={item.title} layout="fill" />
              </div>
              <h3 className="text-lg font-bold mb-4">{item.title}</h3>
              <p className="mb-8 text-sm leading-relaxed">{item.description}</p>
            </div>
            <a
              href={item.link}
              className={`inline-flex items-center w-[150px] justify-center px-4 py-2 border rounded-full font-medium text-base sm:text-base transition-colors duration-300 ${
                item.dark
                  ? "border-[#FF7B47] bg-white text-[#FF7B47] hover:bg-[#242A42] hover:text-white"
                  : "border-black text-black hover:bg-[#242A42] hover:text-white"
              }`}
            >
              Learn More
              <span className="ml-2 text-lg">➜</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

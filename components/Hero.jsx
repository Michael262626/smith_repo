import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="hero-bg relative text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }} // <- Add your image here
    >
      <div className="max-w-7xl mx-auto pt-20 pb-24 px-4 text-center">
        <h1 className="text-5xl font-bold">
          Tailored Consulting Solutions<br />
          Sustainable Business Growth
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-lg">
          Driving success with industry-specific strategies, expert project management, and comprehensive risk mitigation.
        </p>
        <div className="mt-12 flex justify-center space-x-6 flex-wrap">
          <a
            href="#ContactUs"
            className="btn bg-[#FF7B47] border-[#FF7B47] text-white rounded-full px-8 py-3"
          >
            Request a Consultation
          </a>
          <a
            href="#Services"
            className="btn bg-transparent border border-white text-white rounded-full px-8 py-3 hover:bg-gray-300 hover:text-black transition duration-300"
            >
            Discover Our Services
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-[80%] text-black sm:w-full max-w-7xl py-6 mx-auto flex flex-col sm:flex-row justify-around gap-y-4 sm:gap-y-0 sm:bg-white sm:absolute drop-shadow-2xl sm:top-[92%] sm:left-1/2 sm:-translate-x-1/2">
        <div className="flex items-center space-x-2 bg-white p-6 justify-center">
          <div className="w-12 h-12 relative">
            <Image src="/people.f5a05521.svg" alt="" layout="fill" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">1,000 +</span>
            <span>Satisfied Clients</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white p-6 justify-center">
          <div className="w-12 h-12 relative">
            <Image src="/business.623a0dad.svg" alt="" layout="fill" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">972 +</span>
            <span>Businesses Helped</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white p-6 justify-center">
          <div className="w-12 h-12 relative">
            <Image src="/website.2001bc01.svg" alt="" layout="fill" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">98%</span>
            <span>
              Client Satisfaction<br />Rate
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white p-6 justify-center">
          <div className="w-12 h-12 relative">
            <Image src="/award.b60ec45e.svg" alt="" layout="fill" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">746 +</span>
            <span>
              Leading Industry<br />Expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export default function About() {
  return (
    <section id="AboutSmithswork" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8 text-center mb-12">
        <h2 className="text-5xl text-[#1F2937] font-bold mb-4">About Smithswork</h2>
        <p className="text-[#4A535F] max-w-3xl mx-auto leading-relaxed">
          Smithswork LLC is a trusted management consulting firm specializing in project management,
          business development, and risk management. Our tailored, industry-specific solutions
          empower businesses to overcome challenges, drive growth, and achieve sustainable success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-8">
        <div className="relative w-full max-w-md aspect-square sm:max-w-lg">
          <Image
            src="/people-working.8fc84075_w-2048-q-100 copy.png"
            alt="People working"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="sm:w-1/2 mt-12 sm:mt-0 sm:ml-36 prose max-w-lg">
        <div className='sm:ml-10'>
        <h3 className="text-3xl font-bold mb-4">Most trusted in our field</h3>
          <p className='text-[#566269] text-lg'>
            Our consulting solutions are built for <br /> businesses that value precision and <br /> reliability.
            We craft customized <br /> strategies that address the specific <br /> needs of each client, driving <br /> measurable success at every level.
          </p>
        </div> 
          <div className="flex items-start mt-6 space-x-4">
            <div className="w-28 h-12 relative">
              <Image src="/people-blue.b79761ca.svg" alt="People Oriented" layout="fill" />
            </div>
            <div>
              <h4 className="font-semibold">People Oriented</h4>
              <p className='text-[#566269] text-lg'>Fostering business growth <br /> through a people-first <br /> approach, ensuring <br /> sustainable success for our <br /> clients and their teams.</p>
            </div>
          </div>
          <div className="flex items-start mt-6 space-x-4">
            <div className="w-28 h-12 relative">
              <Image src="/guage-blue.678472dd.svg" alt="Attention to Detail" layout="fill" />
            </div>
            <div>
              <h4 className="font-semibold">Attention to Detail</h4>
              <p className='text-[#566269] text-lg'>Transforming small <br /> adjustments into <br /> significant results with <br /> meticulous attention to <br /> every detail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

const partners = [
  [
    {
      name: 'Kayode Ajayi-Smith',
      title: 'Founder & CEO',
      description: 'Business Leader | Risk Management & Insurance.',
      image: '/1696419019138-e-1732147200-v-beta-t-tz6wrDYWi-6a8zLCDYvkZhqAns6y1fcied7MN0wX90I-w-3840-q-100.jpg',
      education: 'MBA. -Lehigh University'
    },
    {
      title: 'Meet Kayode Ajayi-Smith',
      sub_description: 'MBA. -Lehigh University',
      description:
        'I am an accomplished Social Entrepreneur and seasoned Business Leader, recognized for my outstanding contributions in both the public and private sectors, spanning more than a decade. My extensive expertise traverses diverse industries, encompassing nonprofit organizations, management consulting, agriculture, and construction.'
    }
  ],
  [
    {
      title: 'Meet Valor Insurance',
      sub_description: 'Personal & Commercial Insurance',
      description:
        'Valor Insurance is committed to delivering personalized insurance solutions that meet the unique needs of our clients. With access to top carriers and a focus on client advocacy, we provide comprehensive coverage options and expert guidance in areas like auto, home, life, and commercial insurance.'
    },
    {
      name: 'Valor Insurance',
      title: 'Insurance Partner',
      description:
        'Independent Insurance Specialist | Customized Risk Management Solutions',
      image: '/valor-logo.5faba09f_w-640-q-100.jpg',
      education: 'Personal & Commercial Insurance'
    }
  ],
  [
    {
      name: 'Peter Leckemby',
      title: 'Business Growth Partner',
      description: 'Profit Acceleration Specialist',
      image: '/pl-logo.875cbe5a_w-640-q-100.png',
      education: 'Business Growth Strategies & Profit Optimization'
    },
    {
      title: 'Meet Peter Leckemby',
      sub_description: 'Business Growth Strategies & Profit Optimization',
      description:
        'Peter helps serious business owners unlock hidden profits in their businesses and build systems to work more efficiently and enjoy more free time without worrying about cash flow or spending tons on advertising. We dive into 12 key areas of your business to optimize and leverage exponential growth, adding double-digit profit growth within 30 days of working together.'
    }
  ],
  [
    {
      title: 'Meet SiteIT Solutions',
      sub_description: 'Agile Methodologies & Cloud-Based Business Solutions',
      description:
        'With extensive experience in software engineering and IT infrastructure, SiteIT Solutions delivers custom digital solutions that drive business transformation. With their expertise in Software Development and Cloud Technologies they empower businesses to optimize operations and ensure scalability in today’s digital landscape.'
    },
    {
      name: 'SiteIT Solutions',
      title: 'Software Development Partner',
      description:
        'Software Engineer | IT Infrastructure & Cloud Solutions Expert',
      image: '/brain-logo.svg',
      education: 'Agile Methodologies & Cloud-Based Business Solutions'
    }
  ]
]

export default function Partners() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl text-[#242A42] font-bold mb-4">
          Our Consulting Experts & <br /> Trusted Partners
        </h2>
        <p className="max-w-3xl text-[#242A42] mx-auto mb-24">
          Together with our trusted partners, our expert team delivers tailored, industry-specific solutions to tackle complex business challenges and drive sustainable success.
        </p>

        <div className="space-y-12">
          {partners.map((pair, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
            >
              {pair.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow rounded p-6 text-left"
                >
                  {partner.image && (
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                      <Image
                        src={partner.image}
                        alt={partner.name || partner.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className='bg-transparent !bg-white'>
                    <h3 className="text-xl font-semibold text-orange-600">
                      {partner.title}
                    </h3>
                    {partner.name && (
                      <h4 className="text-lg font-bold mb-2">{partner.name}</h4>
                    )}
                    <p className="mb-2">{partner.description}</p>
                    {partner.education && (
                      <p className="text-sm font-thin">{partner.education}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

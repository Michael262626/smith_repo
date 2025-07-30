import Image from 'next/image';
import { useRef } from "react";

const stories = [
  {
    name: 'Kevin Mera',
    title: 'Partner, Optimus Construction',
    image: '/1640036758493-e-1732752000-v-beta-t-IL-SJ4QADmq44GAFYZEK1v0tJerJKlf3F7iNKZnOBGw-w-3840-q-100.jpg',
    testimonial: 'I recently had the pleasure of collaborating with Kay and his team over at Smithworks LLC. They simplified the entire business insurance process for me. The team was friendly, well-informed, and always eager to address my questions or concerns. I strongly recommend them to anyone in search of an insurance agency that truly prioritizes its customers.'
  },
  {
    name: 'Ethan Westerholm',
    title: 'Founder, Homebeam Lighting LLC',
    image: '/18_w-3840-q-100.jpg',
    testimonial: 'Smithswork LLC has been incredible to work with. They maintain responsive communication and took the time to understand my business and provided tailored solutions that fit perfectly. I highly recommend Smithswork for their professionalism and personal touch.'
  },
  {
    name: 'Jessica Rivera',
    title: 'COO, Horizon Healthcare Group',
    image: '/1_w-3840-q-100.jpg',
    testimonial: 'The risk management strategies from Smithswork were a game-changer for our company. Their proactive approach helped us identify potential threats early on and implement comprehensive solutions. The team’s expertise in both risk management and insurance gave us the confidence to operate smoothly and focus on long-term success.'
  }
];

export default function SuccessStories() {
  const sliderRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5; // scroll speed
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <section className="bg-[#16213D] text-white py-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold mb-4">Client Success Stories</h2>
        <p className="max-w-3xl mx-auto mb-12">
          Overcoming complex business challenges with customized strategies and proven expertise, delivering measurable results for our clients.
        </p>
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-16 px-8 py-10 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >

          {stories.map((t, index) => (
            <div
              key={index}
              className="bg-white text-lg text-left text-gray-900 p-8 relative min-w-[700px] shadow-lg"
            >
              <div className="absolute -top-18 -left-8 w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ml-16">
                <h3 className="text-2xl mr-12 font-bold">{t.name}</h3>
                <span className="block mb-4">{t.title}</span>
                <p>{t.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

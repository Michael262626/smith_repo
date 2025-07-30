export default function Contact() {
  return (
    <section id="ContactUs" className="bg-[#16203C] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP - Text with Map */}
        <div className="mb-16 text-center space-x-4 grid grid-cols-1 sm:grid-cols-2 lg:text-left">
          <div>
            <h2 className="text-5xl font-bold mb-6">We Have a Global Reach</h2>
            <p className="max-w-3xl mx-auto lg:mx-0 mb-8">
              Smithswork LLC operates across multiple international locations, strategically 
              positioned to support businesses worldwide. Our expert consulting services 
              are available no matter where you are, helping you navigate complex 
              challenges and achieve lasting success.
            </p>
          </div>
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-48 lg:h-64">
            <img
              src="/map.png" // your half map image
              alt="Half Map"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* BOTTOM - Form + Happy Guy */}
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center items-center bg-gray-100">
            <img
              src="/happy-guy.png"
              alt="Global Reach"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 p-8 text-gray-900 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Get A Free Consultation</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name*</label>
                <input type="text" id="name" placeholder="Full Name" className="w-full bg-gray-100 p-2 rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email*</label>
                <input type="email" id="email" placeholder="example@gmail.com" className="w-full bg-gray-100 p-2 rounded" required />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Phone Number*</label>
                <input type="tel" id="phone" placeholder="(303) - 555 - 5555" className="w-full bg-gray-100 p-2 rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">Message*</label>
                <textarea id="message" placeholder="What can we help you with?" className="w-full bg-gray-100 p-2 rounded h-32" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FF7B47] text-white hover:bg-[#17213C] rounded p-3 font-semibold">
                Request Callback
              </button>
            </form>
          </div>

        </div>


      </div>
    </section>
  );
}

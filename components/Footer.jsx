import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="mb-6">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/logo.909f66e1.png" alt="Smith Works, LLC logo" width={161} height={55} />
            </a>
          </Link>
          <p className="mt-2">Smiths Work, LLC.<br />Providing Reliable Consulting since 2019</p>
        </div>
        <div className="flex space-x-12">
          <div>
            <h6 className="font-semibold mb-2">Services</h6>
            <ul>
              <li><Link href="/services#StrategicBusinessPlanningAndGrowth" legacyBehavior><a>Strategic Business Planning & Growth</a></Link></li>
              <li><Link href="/services#ProjectManagementServices" legacyBehavior><a>Project Management Services</a></Link></li>
              <li><Link href="/services#StrategicFundraisingSolutions" legacyBehavior><a>Strategic Fundraising Solutions</a></Link></li>
              <li><Link href="/services#RiskManagementAndInsurance" legacyBehavior><a>Risk Management & Insurance</a></Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Company</h6>
            <ul>
              <li><a href="#AboutSmithswork">About us</a></li>
              <li><a href="#ContactUs">Contact</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Legal</h6>
            <ul>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-200 py-4 text-center mt-10">
        Made With <span className="text-red-500">❤️</span> By <a href="https://siteitsolutions.com/" className="underline">SiteIT Solutions</a>.
      </div>
    </footer>
  )
}

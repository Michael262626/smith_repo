import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image src="/logo.909f66e1.png" alt="Smith Works, LLC logo" width={161} height={55} />
            </a>
          </Link>
          <div className="hidden sm:flex space-x-8 text-gray-700">
            <Link href="/" legacyBehavior><a className="hover:text-orange-500">Home</a></Link>
            <Link href="/services" legacyBehavior><a className="hover:text-orange-500">Services</a></Link>
            <a href="#AboutSmithswork" className="hover:text-orange-500">About Us</a>
            <a href="#ContactUs" className="hover:text-orange-500">Contact Us</a>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {drawerOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {drawerOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setDrawerOpen(false)}>
          <div className="fixed right-0 top-0 w-64 bg-white h-full shadow-lg p-4" onClick={e => e.stopPropagation()}>
            <nav className="flex flex-col space-y-4">
              <Link href="/" legacyBehavior><a onClick={() => setDrawerOpen(false)}>Home</a></Link>
              <Link href="/services" legacyBehavior><a onClick={() => setDrawerOpen(false)}>Services</a></Link>
              <a href="#AboutSmithswork" onClick={() => setDrawerOpen(false)}>About Us</a>
              <a href="#ContactUs" onClick={() => setDrawerOpen(false)}>Contact Us</a>
            </nav>
          </div>
        </div>
      )}
      <div className="h-16"></div> {/* Spacer for fixed navbar */}
    </>
  )
}

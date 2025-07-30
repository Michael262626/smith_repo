import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import ServicesCarousel from '../components/ServicesCarousel'

export default function Services() {
  return (
    <>
      <Head>
        <title>Smiths Work, LLC - Services</title>
        <meta name="description" content="Our Consulting Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-7xl mx-auto p-8">
        <ServicesCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

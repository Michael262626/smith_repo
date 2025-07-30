import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import SuccessStories from '../components/SuccessStories'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Smiths Work, LLC</title>
        <meta name="description" content="Tailored Consulting Solutions for Sustainable Business Growth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <SuccessStories />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

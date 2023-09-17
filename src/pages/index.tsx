import Image from 'next/image'
import Nav from '@/components/nav'
import Header from '@/components/header'
import Services from '@/components/services'
import About from '@/components/about'
import LatestProjects from '@/components/latestprojects'
import Footer from '@/components/footer'
import HeaderMobile from '@/components/mobile/headerMobile'
import AboutMobile from '@/components/mobile/aboutMobile'


export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <HeaderMobile />
      <Services />
      <About />
      <AboutMobile />
      <LatestProjects />
      <Footer />
    </main>
  )
}

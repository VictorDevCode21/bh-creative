import Services from '@/components/services'
import About from '@/components/about'
import LatestProjects from '@/components/latestprojects'
import AboutMobile from '@/components/mobile/aboutMobile'
import { allBlogs } from 'contentlayer/generated'
import Header from '@/components/header'
import HeaderMobile from '@/components/mobile/headerMobile'

export default function Home() {
  console.log(allBlogs)
  return (
    <main className='dark:text-light'>
      <Header />
      <HeaderMobile />
      <Services />
      <About />
      <AboutMobile />
      <LatestProjects />
    </main>
  )
}

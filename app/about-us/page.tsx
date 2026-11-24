// about-us/page.tsx
import Aboutchoose from '@/component/about/choose'
import AboutCeo from '@/component/about/founder'
import MissionVisionSection from '@/component/about/vision'
import AllBanner from '@/component/global/banner'
import AboutSection from '@/component/home/about'

function page() {
  return (
    <div>
      <AllBanner title='about us' para="QuickFix is Wembley Laboratories Ltd.' trusted adhesive brand, offering dependable bonding solutions for everyday repairs, professional work, and industrial applications." slug="about-us" />
      <AboutSection />
      <MissionVisionSection />
      <AboutCeo />
      <Aboutchoose />
    </div>
  )
}

export default page

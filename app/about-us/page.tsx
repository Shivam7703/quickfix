import Aboutchoose from '@/component/about/choose'
import FeatureCards from '@/component/about/feature'
import AboutCeo from '@/component/about/founder'
import ServiceHighlights from '@/component/about/highlight'
import Story from '@/component/about/story'
import MissionVisionSection from '@/component/about/vision'
import AllBanner from '@/component/global/banner'
import AboutSection from '@/component/home/about'
import FaqSection from '@/component/home/faq'
import React from 'react'

function page() {
  return (
    <div>
      <AllBanner title='about us' para="QuickFix is Wembley Laboratories Ltd.' trusted adhesive brand, offering dependable bonding solutions for everyday repairs, professional work, and industrial applications." slug="about-us" />
      <AboutSection />
      <MissionVisionSection />
      <Story />
      <AboutCeo />
      <FeatureCards />
      <Aboutchoose />
      <ServiceHighlights />
    </div>
  )
}

export default page

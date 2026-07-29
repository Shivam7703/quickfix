import Aboutchoose from '@/component/about/choose'
import FeatureCards from '@/component/about/feature'
import ServiceHighlights from '@/component/about/highlight'
import AboutProducts from '@/component/about/products'
import Story from '@/component/about/story'
import AllBanner from '@/component/global/banner'
import AboutSection from '@/component/home/about'
import FaqSection from '@/component/home/faq'
import React from 'react'

function page() {
  return (
    <div>
      <AllBanner title='about us' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="about-us"/>
      <AboutSection/>
      <Story/>
      <FeatureCards/>
      <Aboutchoose/>
      <AboutProducts/>
      <FaqSection/>
      <ServiceHighlights/>
    </div>
  )
}

export default page

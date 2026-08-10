import CareerSection from '@/component/career/caree'
import AllBanner from '@/component/global/banner'
import React from 'react'

function page() {
  return (
    <div>
                  <AllBanner title='Career' para='Join a team driven by innovation, quality, and purpose. Grow your career while creating adhesive solutions trusted by industries worldwide.' slug="career"/>
                  <CareerSection/>
    </div>
  )
}

export default page

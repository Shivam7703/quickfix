import CareerSection from '@/component/career/caree'
import AllBanner from '@/component/global/banner'
import React from 'react'

function page() {
  return (
    <div>
                  <AllBanner title='Career' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="career"/>
                  <CareerSection/>
    </div>
  )
}

export default page

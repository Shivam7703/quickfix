import AllBanner from '@/component/global/banner'
import Sustain from '@/component/sustain/sustainablity'
import React from 'react'

function page() {
  return (
    <div>
                    <AllBanner title='Sustainability' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="sustainability"/>
                    <Sustain/>
    </div>
  )
}

export default page

import AllBanner from '@/component/global/banner'
import ProductSection from '@/component/home/product'
import React from 'react'

function page() {
  return (
    <div>
            <AllBanner title='Our Products' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="products"/>
      <ProductSection isHome={false}/>
    </div>
  )
}

export default page

import React from 'react'
import ProductGallery from './progallery'
import ProductTabs from './description'
import Productside from './side'
import ServiceHighlights from '../about/highlight'
import ProductSection from '../home/product'

export default function Productdetail({pro}:any) {
  return (
    <div className='flex flex-wrap justify-center lg:p-16 bg-white md:p-12 relative xl:px-20' >
      <div className='md:w-[85%]  w-full'><ProductGallery data={pro}/><ProductTabs data={pro}/>        
</div>
      {/* <div className='md:w-[25%] w-full md:sticky top-16'><Productside/></div> */}
    </div>
  )
}


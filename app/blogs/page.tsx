import AllBanner from '@/component/global/banner'
import BlogSection from '@/component/home/blogs'
import React from 'react'

function page() {
  return (
    <div>

              <AllBanner title='Our Blogs' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="blogs"/>
           <BlogSection/>
    </div>
  )
}

export default page

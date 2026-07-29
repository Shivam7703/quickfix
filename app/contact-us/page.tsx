
import ContactForm from '@/component/contact/contactform'
import ContactSection from '@/component/contact/details'
import AllBanner from '@/component/global/banner'

function page() {
  return (
    <div>
      <AllBanner title='contact us' para='Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it.' slug="contact-us"/>
   <ContactSection/>
   <ContactForm/>
    </div>
  )
}

export default page

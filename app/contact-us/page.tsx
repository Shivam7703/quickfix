// app/contact-us/page.tsx
import type { Metadata } from 'next'
import ContactForm from '@/component/contact/contactform'
import ContactSection from '@/component/contact/details'
import AllBanner from '@/component/global/banner'

const SITE_URL = 'https://wembleysquickfix.com'

export const metadata: Metadata = {
  title: 'Contact Us – Product Enquiry, Vendor & Distributor Contact',
  description:
    'Contact Wembley\'s Quickfix for adhesive product enquiries, bulk orders, OEM requirements or distributor partnerships. Call +91-9805403302 or email us.',
  alternates: { canonical: '/contact-us/' },
  openGraph: {
    type: 'website',
    url: '/contact-us/',
    title: "Contact Wembley's Quickfix | Adhesive Enquiries India",
    description:
      'Get in touch for product enquiries, OEM requirements and distributor partnerships. Call +91-9805403302 or email info@wembleysquickfix.com.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Wembley's Quickfix | Adhesive Enquiries India",
    description:
      'Product enquiries, OEM requirements and distributor partnerships. Call +91-9805403302.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact-us/#webpage`,
      url: `${SITE_URL}/contact-us/`,
      name: "Contact Wembley's Quickfix",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: {
        '@type': 'Organization',
        name: 'Wembley Laboratories Ltd.',
        url: SITE_URL,
        email: 'info@wembleysquickfix.com',
        telephone: '+91-9805403302',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-9805403302',
            email: 'info@wembleysquickfix.com',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi'],
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_URL}/contact-us/` },
      ],
    },
  ],
}

function page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <AllBanner
        title="contact us"
        para="Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the need it."
        slug="contact-us"
      />
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default page
import Header from '../components/header'
import Image from 'next/image'
import peninsula from '/public/Charleston3d-bg.png'

export default function AboutPage() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="relative isolate h-screen overflow-hidden pt-14">
        <Image
          src={peninsula}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />

        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="relative text-center">
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-100 sm:text-5xl">
              What is Harvest Free Medical Clinic?
            </h3>
            <div className="mx-auto max-w-3xl">
              <p className=" mt-8  text-lg text-gray-100  sm:text-xl">
                Harvest Free Medical Clinic is a non-profit Christian
                organization with 501(c)(3) status. Established by Dr. Bob
                Freeman in February 2003, our primary volunteer staff exists to
                share the love and truth of the Lord Jesus Christ by providing
                free medical care and medications to those without resources to
                pay. All individuals are eligible without regard to faith,
                nationality, creed, or lifestyle.
              </p>
              <p className="mt-8 text-lg text-gray-100 sm:text-xl">
                Our clinic&apos;s focus is the evaluation and management of
                chronic illnesses and preventative care, limiting specialty
                medical/surgical referrals and acute care needs. We provide
                Mental Health for many, but advise complex cases to enroll at
                the County Health Department
              </p>
            </div>
            <div className=" mx-auto mt-12 max-w-3xl text-gray-100">
              <h3 className="mt-6 text-2xl font-bold leading-8 tracking-tight text-gray-100 sm:text-4xl">
                Clinic Info
              </h3>
              <p className="mt-8 text-lg text-gray-100 sm:text-xl">
                The clinic is open 9am-4pm Monday, Tuesday and Thursday by
                appointment only, NO WALK-INS.
              </p>
              <p className="mt-8 text-lg text-gray-100 sm:text-xl">
                To contact, call (843) 747-3526 and clearly state your name,
                phone number, and medical need. Due to volunter workforce, you
                must leave a message on the appropriate line as there are
                various options. Someone <span className="italic">will</span>{' '}
                return your call, 2-3 attemps. &quot;Mailbox full&quot; is one
                of several obstacles faced when contacting patients.
              </p>
              <p className="mt-8 text-lg text-gray-100 sm:text-xl">
                Medication refills require 3-5 business days. Please leave a
                message on the refill line. You will receive notification when
                your refill will be available for pickup at the HFMC pharmacy on
                the side of the building. If there is no response after 7 days,
                please recall the refill line. It is highly likely we have made
                efforts to communicate the status of requested refills. Pharmacy
                Hours: Monday-Friday 8am-1pm and 2-4pm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

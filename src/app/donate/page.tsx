import Header from '../components/header'
import Image from 'next/image'
import peninsula from '/public/Charleston3d-bg.png'

export default function DonatePage() {
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
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="relative text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A few ways to give
            </h1>
            <p className="mx-auto mt-12 max-w-2xl text-lg text-white sm:text-xl">
              Scan the QR code below, click the link to donate through a secure
              link, make checks out to Harvest Free Medical Clinic.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

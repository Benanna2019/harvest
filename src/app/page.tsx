import Header from './components/header'
import peninsula from '/public/Charleston3d-bg.png'
import Image from 'next/image'

export default function Example() {
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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Harvest Free Medical Clinic
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-gray-100 sm:text-xl">
              est. 2003
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-100 sm:text-2xl">
              Celebrating 20 years of service in the Low Country
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-100 sm:text-2xl">
              Our mission is to share the love of Jesus by providing quality
              free medical care to those without resources to pay
            </p>
            <p className="mt-20 text-lg leading-8 text-gray-100 sm:text-xl">
              1670 Drydock Ave
              <br />
              Building 10A
              <br />N Chas, SC 29405
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl">
              Phone: (843) 747-3526
              <br />
              Fax: (843) 747-3577
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

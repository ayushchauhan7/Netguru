import heavideo from '../assets/kw.mp4'
import React from "react";

const HeroSection = () => {
  return (
  <section className="py-16 bg-white px-4 md:px-20">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-semibold">
        Design, engineering & applied AI
      </h2>
      <a
          href="https://www.netguru.com/clients"
          className="text-green-600 underline text-sm"
      >
        More Case Studies
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Merck */}
      <div>
        <img
            src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?length=363"
            alt="Merck"
            className="rounded h-100 w-100"
        />
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          Merck — R&D Productivity
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/merck-ai-rd"
              className="underline text-black hover:text-green-600"
          >
            Speeding up Merck’s process from 6 months to 6 hours
          </a>
        </h3>
        <p className='text-black'>An AI Assistant that boosts R&D delivered in five weeks and under budget</p>
      </div>

      {/* Newzip */}
      <div>
        <img
            src="https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg"
            alt="Newzip"
            className="rounded h-100 w-100"
        />
        <img src="https://www.netguru.com/hubfs/_N23/assets/logos/newzip.svg" alt="newzip" className='pt-3' />
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          AI for Real Estate
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/ai-hyper-personalization-proptech"
              className="underline text-black hover:text-green-600"
          >
            60% more user engagement with hyper-personalization
          </a>
        </h3>
        <p className='text-black'>AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement</p>
      </div>

      {/* Card 3 */}
      <div>
        <img
            src="https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg"
            alt="UBS"
            className="rounded h-100 w-100"
        />
        <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg" alt=""/>
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          MOBILE APP REDESIGN
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/moonfare"
              className="underline text-black hover:text-green-600"
          >
            Team extension for mobile design revamp at speed
          </a>
        </h3>
        <p className='text-black'>Seamless and consistent experience, unified payment flows, and easier in-app navigation</p>
      </div>

      {/* Card 4 */}
      <div>
        <img
            src="https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png"
            alt="prospero"
            className="rounded h-100 w-100"
        />
        <img src="https://www.netguru.com/hubfs/_N23/assets/logos/prospero.svg" alt=""/>
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          Mobile MVP
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/volkswagen"
              className="underline text-black hover:text-green-600"
          >
            Mobile app MVP in 5 weeks for a New York fintech
          </a>
        </h3>
        <p className='text-black'>New version of a financial predictions app, complete with a revamped user interface and additional features</p>
      </div>

      {/* Card 5 */}
      <div>
        <video
            src={heavideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded h-100 w-100"
        />
        <img src="https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg" alt="" className='pt-2' />
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          Design system
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/olx"
              className="underline text-black hover:text-green-600"
          >
            Increased engineering efficiency and more consistent design
          </a>
        </h3>
        <p className='text-black'>Improved developer experience and more efficient engineering for the world's largest real estate franchise</p>
      </div>

      {/* Card 6 */}
      <div>
        <img
            src="https://www.netguru.com/hs-fs/hubfs/NewGlobe%20HP.jpg?width=1022&height=1022&name=NewGlobe%20HP.jpg"
            alt="Zabka"
            className="rounded h-100 w-100"
        />
        <img src="https://www.netguru.com/hubfs/_N23/assets/logos/new-globe.svg" className='pt-2' alt=""/>
        <p className="text-sm mt-2 text-gray-500 font-semibold italic">
          Edtech AI
        </p>
        <h3 className="font-bold mt-2 text-lg">
          <a
              href="https://www.netguru.com/clients/zabka"
              className="underline text-black hover:text-green-600"
          >
            Boosting content creation with GenAI from hours to seconds
          </a>
        </h3>
        <p className='text-black'>Content creation transformed into a streamlined process without compromising on quality</p>
      </div>
    </div>
  </section>
  )
};

export default HeroSection;
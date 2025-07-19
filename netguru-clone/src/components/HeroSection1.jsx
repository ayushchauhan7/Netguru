import React from "react";
import headerVideo from "../assets/ng-com-header-background.mp4";

const HeroSection1 = () => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src={headerVideo}
      autoPlay
      loop
      muted
      playsInline
      poster="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/video-placeholder.jpg?width=1920&height=1000&name=video-placeholder.jpg"
    />

    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

    {/* Hero Content */}
    <div className="relative z-20 px-6 lg:px-20 pt-32 md:pt-40 text-white max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-semibold">
        Accelerate <span className="text-green-400">digital</span>
      </h1>
      <p className="mt-10 text-lg md:text-xl font-medium max-w-xl">
        We speed up AI adoption and ramp up engineering and design teams to help you lead your industry.
      </p>
      {/* Trusted by */}
      <div className="mt-10 text-sm text-gray-300">
        <p className="mb-4">Trusted by:</p>
        <div className="flex flex-wrap gap-6 items-center">
          <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg" alt="IKEA" className="h-6" />
          <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg" alt="UBS" className="h-6" />
          <img src="https://www.netguru.com/hubfs/_N23/assets/logos/volkswagen.svg" alt="Volkswagen" className="h-6" />
          <img src="https://www.netguru.com/hubfs/_N23/assets/logos/olx.svg" alt="OLX" className="h-6" />
        </div>
      </div>
    </div>
    <div className=" absolute 
    hidden sm:block
    top-1/2 right-6 transform -translate-y-1/2 
    z-20">
				<div className="bg-gray shadow-xl  w-48">
					<img
						src="https://493098.fs1.hubspotusercontent-na1.net/hub/493098/hubfs/CTA%20AI%20agents%20ebook.png?width=340&height=340&name=CTA%20AI%20agents%20ebook.png"
						alt="Netguru Guide to AI Agents"
						className="mb-3"
					/>
					<p className="text-lg p-1 text-white font-semibold mb-2">
						Netguru Guide to AI Agents
					</p>
					<a
						href="https://www.netguru.com/resources/ai-agents-implementation-guide"
						className="inline-block p-1 text-white text-lg font-medium hover:underline"
					>
						GET YOURS →
					</a>
				</div>
			</div>
			<div
  className="
  absolute 
  bottom-4 right-4
  block sm:hidden
  z-20
  w-36 bg-gray-800 shadow-lg overflow-hidden
"
>
  <a
    href="https://www.netguru.com/resources/ai-agents-implementation-guide"
    className="block"
  >
    <img
      src="https://493098.fs1.hubspotusercontent-na1.net/hub/493098/hubfs/CTA%20AI%20agents%20ebook.png?width=340&height=340&name=CTA%20AI%20agents%20ebook.png"
      alt="Netguru Guide to AI Agents"
      className="w-full h-auto"
    />
    <div className="p-2">
      <p className="text-sm text-white font-semibold">
        Guide to AI Agents
      </p>
      <p className="text-xs text-white underline">GET YOURS →</p>
    </div>
  </a>
</div>
  </section>
);

export default HeroSection1;
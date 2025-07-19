import React from 'react';
import headerVideo from '../assets/ng-com-header-background.mp4';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
	return (
		<header className="relative w-full h-screen overflow-hidden">
			{/* Background Video */}
			<video
				src={headerVideo}
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
			/>

			{/* Dark Overlay */}
			<div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

			{/* Navbar */}
			<nav className="relative z-10 w-full px-6 lg:px-20 py-6 flex justify-between items-center">
				<div className="flex items-center gap-10">
					<a href="/" className="flex items-center gap-2">
						<img
							src="https://www.netguru.com/hubfs/images/logos/favicon.ico"
							alt="logo"
							className="w-6 h-6"
						/>
						<span className="text-white font-semibold text-xl">netguru</span>
					</a>

					<ul className="hidden md:flex gap-8 text-white font-medium">
						<li><a href="/services" className="hover:text-gray-300 transition">Services</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">Industries</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">Clients</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">About us</a></li>
						<li><a href="/blog" className="hover:text-gray-300 transition">Insights</a></li>
					</ul>
				</div>

				<a
					href="/estimate-project"
					className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full border border-white hover:bg-gray-100 transition"
				>
					Get in touch <ArrowRight size={16} />
				</a>
			</nav>

			{/* Main Content */}
			<div className="relative z-10 px-6 lg:px-20 pt-28 md:pt-40 text-white max-w-4xl">
				<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"> {/* Adjusted font sizes for responsiveness and bolder text */}
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

			{/* Floating CTA */}
			<div className=" absolute
    hidden sm:block
    top-1/2 right-6 transform -translate-y-1/2
    z-20">
				<div className="bg-gray-900 shadow-xl  w-48"> {/* Changed bg-gray to bg-gray-900 for proper background color */}
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

		</header>
	);
};

export default Navbar;
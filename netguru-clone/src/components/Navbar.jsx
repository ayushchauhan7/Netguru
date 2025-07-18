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
						<li><a href="#" className="hover:text-gray-300 transition">Insights</a></li>
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

			{/* Floating CTA */}
			<div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 z-20">
				<div className="bg-white shadow-xl rounded-lg p-4 w-48">
					<img
						src="https://thumbs.dreamstime.com/z/n-gray-color-illustration-n-gray-color-illustration-n-dot-monogram-289942276.jpg"
						alt="Netguru Guide to AI Agents"
						className="rounded mb-3"
					/>
					<p className="text-sm text-gray-800 font-semibold mb-2">
						Netguru Guide to AI Agents
					</p>
					<a
						href="https://www.netguru.com/resources/ai-agents-implementation-guide"
						className="inline-block text-green-600 text-xs font-medium hover:underline"
					>
						GET YOURS →
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

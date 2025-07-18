import React from 'react';

// A reusable arrow icon for the button
const ArrowIcon = () => (
	<svg
		className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
	</svg>
);


function HeroSection() {
	return (
		<div className="bg-gray-900">
			<section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

				{/* Background container for your image URL and an overlay */}
				<div className="absolute inset-0 z-0">
					{/* The local image import has been removed. */}
					<img
						// Just replace this URL with the one you want to use.
						src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/video-placeholder.jpg?width=1920&height=1000&name=video-placeholder.jpg"
						alt="Background"
						className="w-full h-full object-cover"
					/>
					{/* This dark overlay ensures your text is readable over the image. */}
					<div className="absolute inset-0 bg-gray-900/60"></div>
				</div>

				{/* Main Content */}
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
						Build impactful products <br className="hidden md:block" />
						<span className="text-green-400">faster than your competition</span>
					</h1>

					<div className="mt-10">
						<a
							href="#"
							className="group inline-flex items-center justify-center px-8 py-4 border-2 border-green-400 text-lg font-semibold rounded-md text-green-400 hover:bg-green-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-400 transition-all duration-300 transform hover:scale-105"
						>
							Estimate project
							<ArrowIcon />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HeroSection;
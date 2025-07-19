import React from 'react';
// IMPORTANT: Please ensure 'as.mp4' is moved into your 'src/assets/' directory.

// Data for the statistics grid on the right side.
const statsData = [
	{ value: "17+", label: "Years on market" },
	{ value: "400+", label: "People on board" },
	{ value: "2500+", label: "Projects delivered" },
	{ value: "73", label: "Our current NPS score" },
];

function WhyNetguruSection() {
	return (
		<div className=""> {/* Ensures a consistent dark background for the section */}
			<section className="relative max-w-full mx-auto py-24 px-4 sm:px-6 lg:px-8 text-white ">
				{/* Background Video */}
				<div className="absolute inset-0 z-0">
					<video
						src="https://www.netguru.com/hubfs/_N19%20Modules/Homepage/Videos/ng-com-header-background.mp4" // Use the imported video as the background
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover" // Subtle opacity for the background video
					/>
					{/* Dark overlay for text readability over the background video */}
					<div className="absolute inset-0 "></div>
				</div>

				{/* Main Content Grid (relative z-10 to stay above the background) */}
				<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

					{/* Left Column: Text Content */}
					<div className="flex flex-col gap-4">
						<img src="https://www.netguru.com/hubfs/_N23/assets/logos/netguru.svg" alt="" className="w-50 pb-4" />
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
							Why <span className="text-green-400">Netguru?</span>
						</h2>
						<p className="text-lg text-gray-300 mt-4 max-w-lg">
							With a worldwide footprint, record-high NPS, and end to end
							services, we are your one-stop shop for digital product talent.
						</p>
					</div>

					{/* Right Column: Statistics Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{statsData.map((stat, index) => (
							<div key={index} className=" bg-[#25292C]/60 p-8 rounded-lg text-center">
								<p className="text-5xl font-extrabold text-white">{stat.value}</p>
								<p className="mt-3 text-base text-gray-400">{stat.label}</p>
							</div>
						))}
					</div>
				</div>

			</section>
		</div>
	);
}

export default WhyNetguruSection;
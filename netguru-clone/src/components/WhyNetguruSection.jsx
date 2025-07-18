import React from 'react';
import headerVideo from "../assets/ng-com-header-background.mp4";

// Data for the statistics grid on the right side.
const statsData = [
	{ value: "17+", label: "Years on market" },
	{ value: "400+", label: "People on board" },
	{ value: "2500+", label: "Projects delivered" },
	{ value: "73", label: "Our current NPS score" },
];

function WhyNetguruSection() {
	return (
		<div className="">
			<section className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-white ">
				<video
					src={headerVideo}
					autoPlay
					loop
					muted
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover z-0"
				/>

				{/* Background Watermark Effect */}
<div
  aria-hidden="true"
  className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
>
  {/* Optional logo image */}
  <img
    src="https://www.netguru.com/hubfs/images/logos/favicon.ico"
    alt=""
    className="w-10 h-10 md:w-12 md:h-12 opacity-10"
  />
  <p className="absolute text-[6rem] md:text-[10rem] lg:text-[18rem] xl:text-[22rem] font-black text-white opacity-[0.03] -rotate-12 whitespace-nowrap">
    Netguru
  </p>
</div>

				{/* Main Content Grid */}
				<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

					{/* Left Column: Text Content */}
					<div className="flex flex-col gap-4">
						<p className="font-semibold text-gray-400">Netguru</p>
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
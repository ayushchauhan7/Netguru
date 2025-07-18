import React from "react";

const ServiceTop = () => {
	return (
		<section className="relative z-5">
			{/*<Nav />*/}
			{/* Background image overlay */}
			<div className="inset-0 items-center flex absolute">
				<img
					src="https://www.netguru.com/hs-fs/hubfs/Krak%C3%B3w%20Hub%20photoshoot%202022/Krak%C3%B3w%20Hub%20photoshoot%202022_2080.jpg?width=4336&height=2895&name=Krak%C3%B3w%20Hub%20photoshoot%202022_2080.jpg"
					alt="Kraków Hub photoshoot"
					className="w-full h-auto"
				/>
				<div className="absolute inset-0"></div>
			</div>
			{/* Content */}
			<div className="relative z-10 flex flex-col items-start justify-center h-[420px] px-6 md:px-16 lg:px-24">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
					Digital acceleration services<br />
					for <span className="text-green-400">business growth</span>
				</h1>
				<p className="text-white text-lg md:text-xl font-medium mb-6">
					Design. Development. Consulting. <span className="font-bold">15 years and counting.</span>
				</p>
				<button
					className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
				>
					Estimate project &rarr;
				</button>
			</div>

		</section>
	);
};

export default ServiceTop;

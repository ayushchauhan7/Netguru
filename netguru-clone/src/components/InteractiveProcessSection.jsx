import React from 'react';

const steps = [
	{
		id: 1,
		number: '01', // Added number field for display
		title: "Ideation",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/01_ideate.png?width=1800&height=1800&name=01_ideate.png", // Changed image URL to match video visual style (static SVG)
		description: "Rapid prototyping, research & development, user insights & testing",
	},
	{
		id: 2,
		number: '02', // Added number field for display
		title: "Design",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/02_design.png?width=1800&height=1800&name=02_design.png", // Changed image URL
		description: "Product design, UX & UI design, design system development",
	},
	{
		id: 3,
		number: '03', // Added number field for display
		title: "Development",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/03_develop.png?width=1800&height=1800&name=03_develop.png", // Changed image URL
		description: "Web development, mobile development, AI & GenAI, MVPs, cloud",
	},
	{
		id: 4,
		number: '04', // Added number field for display
		title: "Maintenance",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/04_maintain.png?width=1800&height=1800&name=04_maintain.png", // Changed image URL
		description: "Quality assurance, product management, end to end software maintenance",
	},
	{
		id: 5,
		number: '05', // Added number field for display
		title: "Scaling",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/05_scale.png?width=1800&height=1800&name=05_scale.png", // Changed image URL
		description: "Product strategy & expansion, continuous discovery, automation & optimization",
	},
];


function InteractiveProcessSection() {
	return (
		<section className="relative py-24 bg-[#25292C] px-4 md:px-20 overflow-hidden">
			{/* Background Video for ambient animation */}

			{/* Dark overlay to ensure text readability over the video */}
			<div className="absolute inset-0 bg-black/50 z-0"></div>

			{/* Header Section */}
			<div className="relative z-10 mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
				<h2 className="text-3xl md:text-4xl font-bold leading-tight text-white max-w-lg">
					Leverage full digital{" "}
					<span className="text-green-400">product expertise</span>
				</h2>
				<p className="text-gray-300 max-w-xl text-lg">
					Whether you want to consult on an idea, add missing capabilities,
					quickly expand your team, or hand over a project – we’ve got you
					covered.
				</p>
			</div>

			{/* Steps Grid */}
			<div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Changed to grid layout matching video */}
				{steps.map((step) => (
					<div
						key={step.id}
						className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
					>
						<div className="relative w-24 h-24 mb-4"> {/* Container for icon */}
							<img
								src={step.image}
								alt={step.title}
								className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" // Subtle scale on hover
							/>
						</div>
						<div className="mt-4">
							<h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
								<span className="text-green-500">{step.number}</span> {/* Display step number */}
								{step.title}
							</h3>
							<p className="text-gray-400 text-base">{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default InteractiveProcessSection;
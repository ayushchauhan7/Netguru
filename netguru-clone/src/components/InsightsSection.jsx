import React from 'react';

// --- Data for the insight cards ---
// This array holds the content for the three cards.
// Notice the 'type' property, which helps in rendering the correct card style.
const insightsData = [
	{
		id: 1,
		type: 'BLOG',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/Two%20creative%20millenial%20small%20business%20owners%20working%20on%20social%20media%20strategy%20brainstorming%20using%20adhesive%20notes%20in%20windows-1.jpeg?length=587',
		title: '8 Affordable Ways to Implement an AI Strategy',
		link: '#',
	},
	{
		id: 2,
		type: 'PODCAST',
		imageUrl: 'https://493098.fs1.hubspotusercontent-na1.net/hub/493098/hubfs/DT%20wDavid.png?length=696',
		title: 'Does AI Wear Sneakers? Adidas’s Journey With AI',
		link: '#',
	},
	{
		id: 3,
		type: 'BLOG',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/office%20video%20call.jpg?length=586',
		title: '10 Real-World Examples of How Team Extension Accelerates Delivery',
		link: '#',
	},
];

// A simple arrow icon component
const ArrowIcon = ({ className = "w-6 h-6" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
	</svg>
);


function InsightsSection() {
	return (
		<section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-12">
					<h2 className="text-4xl font-bold tracking-tight">
						Explore insights for <span className="text-green-400">acceleration</span>
					</h2>
					<a
						href="#"
						className="text-green-400 font-semibold inline-flex items-center gap-2 whitespace-nowrap group"
					>
						More disruptive insights
						<span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon className="w-5 h-5" />
            </span>
					</a>
				</div>

				{/* Insights Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{insightsData.map((insight) => (
						<a
							key={insight.id}
							href={insight.link}
							className="group flex flex-col bg-[#25292C] rounded-lg overflow-hidden transition-transform hover:scale-105"
						>
							<img src={insight.imageUrl} alt={insight.title} className="w-full h-56 object-cover" />

							<div className="p-6 flex flex-col flex-grow">
								{/* Conditional Card Header */}
								{insight.type === 'BLOG' && (
									<p className="text-sm font-semibold text-gray-400 mb-4">BLOG</p>
								)}
								{insight.type === 'PODCAST' && (
									<div className="mb-4">
										{/* You can replace this text with the "Disruption Talks" logo image */}
										<p className="text-lg font-bold text-white mb-2">Disruption Talks</p>
									</div>
								)}

								<h3 className="text-xl font-bold text-white flex-grow">{insight.title}</h3>

								<div className="mt-6 self-end transition-transform group-hover:translate-x-1">
									<ArrowIcon />
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default InsightsSection;
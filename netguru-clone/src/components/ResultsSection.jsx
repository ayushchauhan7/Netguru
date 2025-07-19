import React from 'react';

// Data for the statistics cards. This makes it easy to add, remove, or change stats.
const statsData = [
	{
		stat: '13 days',
		description: 'is all you need to onboard extra talent to your project',
	},
	{
		stat: '99%',
		description: 'faster content creation process—from 4 hours to 45 sec—for a European edtech',
	},
	{
		stat: '60%',
		description: 'more user engagement with hyper-personalization for a US proptech',
	},
	{
		stat: '77%',
		description: 'faster page speed for a meal delivery app',
	},
];

function ResultsSection() {
	return (
		<div className="bg-[#1a1a1a] text-white"> {/* Changed background color to precisely match the image */}
			<section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">

				{/* Header Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight"> {/* Adjusted font size and made it bolder for prominence */}
							See <span className="text-green-400">tangible results</span>
						</h2>
					</div>
					<div>
						<p className="text-lg text-gray-300">
							Over the years we’ve created a unique process that delivers
							exceptional results with blazing-fast efficiency.
						</p>
					</div>
				</div>

				{/* Statistics Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{statsData.map((item, index) => (
						<div key={index} className="bg-[#25292C] p-8 rounded-lg flex flex-col">
							<p className="text-5xl font-bold text-white mb-4">
								{item.stat}
							</p>
							<p className="text-gray-400">{item.description}</p>
						</div>
					))}
				</div>

			</section>
		</div>
	);
}

export default ResultsSection;
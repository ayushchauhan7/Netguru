import React from 'react';

// Data for the client logos. This makes it easy to add, remove, or change them.
// NOTE: Using placeholder URLs. Replace with your actual logo assets.
const clientLogos = [
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N19%20Modules/Clients/logos/vw.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/zabka.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/olx.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/spendesk.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/careem.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/solaris.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/moonfare.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg' },
	{ name: '', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/salzburg-ag.svg' },
];

function ClientsSection() {
	return (
		<div className=" bg-[#25292C]">
			<section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

				{/* Header Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					<div>
						<h2 className="text-4xl font-bold tracking-tight text-white">
							Benefit from our <span className="text-green-400">cross-industry experience</span>
						</h2>
					</div>
					<div>
						<p className="text-lg text-gray-300">
							With a wide range of services, and experience in multiple industries, such as finance, retail, proptech, or healthcare, we understand your challenges.
						</p>
					</div>
				</div>

				{/* Client Logos Grid */}
				<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
					{clientLogos.map((client, index) => (
						<div key={index} className="flex justify-center">
							<img
								src={client.logoUrl}
								alt={client.name}
								className="h-8 md:h-10 object-contain filter grayscale brightness-0 invert"
							/>
						</div>
					))}
				</div>

			</section>
		</div>
	);
}

export default ClientsSection;
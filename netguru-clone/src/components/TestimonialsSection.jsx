import React from "react";

// Data is moved into an array for easier management and scaling.
const testimonialsData = [

	{
		id: 1,
		logoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg",
		quote: "Netguru has been the best agency we've worked with so far.",
		authorName: "Adi Pavlovic",
		authorTitle: "Director of Innovation",
		authorImageUrl: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/testimonials/Adi_Pavlovic.jpg?length=114",
	},
	{
		id: 2,
		logoUrl: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
		quote: "Excellence and speed. It’s rare to get both, and Netguru delivers.",
		authorName: "Mark Greiner",
		authorTitle: "Digital Innovation Manager",
		authorImageUrl: "https://www.netguru.com/hs-fs/hubfs/Mark%20Greiner-2.jpeg?length=128",
	},

	{
		id: 3,
		logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/candis.svg',
		quote: 'Our first KPI is the time to hire, and Netguru provides candidates very fast.',
		authorName: 'Aleksander Heimrath',
		authorTitle: 'Chief Technology Officer',
		authorImageUrl: 'https://www.netguru.com/hs-fs/hubfs/aleksander-heimrath.1024x1024.jpg?length=71',
	},
	{
		id: 4,
		logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/total-processing.svg',
		quote: 'It doesn\'t feel like an external team, it feels like we\'re just working together.',
		authorName: 'Dally Singh',
		authorTitle: 'Chief Product Officer',
		authorImageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/testimonials/Dally_Singh.jpg?length=71',
	},
	{
		id: 5,
		logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/volkswagen.svg',
		quote: 'Let me put it this way: we have built a grand and impressive building. But without Netguru’s insights, we would be stuck on the ground-floor forever.',
		authorName: 'Artur Kryzan',
		authorTitle: 'Team Leader and CX Manager',
		authorImageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/testimonials/Artur_Kryzan.jpg?length=71',
	},
	{
		id: 6,
		logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/artemest.svg',
		quote: 'With Netguru, we’re now releasing many more features than we used to.',
		authorName: 'Marco Deseri',
		authorTitle: 'Chief Digital Officer',
		authorImageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/testimonials/Marco_Deseri.jpg?length=71',
	},
];

const TestimonialsSection = () => (
	<section className="bg-[#25292C] py-20 px-4 sm:px-6 lg:px-8">
		<div className="max-w-7xl mx-auto">
			{/* Section Header updated to match the image */}
			<h2 className="text-4xl font-bold text-white mb-12">
				Check our <span className="text-green-400">clients' words</span>
			</h2>

			{/* Grid updated for 6 items and mapped from the data array */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{testimonialsData.map((testimonial) => (
					<div
						key={testimonial.id}
						className="bg-black rounded-lg p-8 flex flex-col"
					>
						{/* Client Logo with filter to make it white */}
						<img
							src={testimonial.logoUrl}
							alt={`${testimonial.authorName}'s company logo`}
							className="h-8 mb-6 object-contain self-start filter grayscale brightness-0 invert"
						/>

						{/* Quote with dark theme text color and flex-grow */}
						<blockquote className="text-gray-300 text-lg mb-6 flex-grow">
							“{testimonial.quote}”
						</blockquote>

						{/* Author Info with dark theme text colors */}
						<div className="flex items-center gap-4 mt-auto">
							<img
								src={testimonial.authorImageUrl}
								alt={testimonial.authorName}
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<p className="font-bold text-white">{testimonial.authorName}</p>
								<p className="text-sm text-gray-400">{testimonial.authorTitle}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default TestimonialsSection;
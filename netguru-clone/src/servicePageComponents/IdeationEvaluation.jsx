const IdeationEvaluation = () => {
	const navItems = [
		'Ideation',
		'Product design',
		'Web development',
		'Mobile development',
		'Machine learning',
		'Support',
	];

	return (
		<div className="bg-black text-white font-sans w-full py-20 px-4">
			{/* Navigation */}
			<nav className="mb-24">
				<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-300">
					{navItems.map((item) => (
						<li key={item}>
							<a href="#" className="hover:text-white transition-colors duration-300 text-base">
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<h1 className="text-5xl md:text-6xl font-medium">
					One-stop shop for <span className="text-green-500">digital</span>
				</h1>

				{/* Description Paragraph */}
				<p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
					We help deliver digital excellence at every stage of the product journey, from early
					ideation to research, prototyping, testing, launch, and ongoing support. Explore our
					end-to-end services designed to improve business metrics and deliver delightful digital
					experiences.
				</p>
			</div>
		</div>
	);
};

export default IdeationEvaluation;
import React, { useState } from 'react';

// The data structure now includes descriptions that will be displayed under each image.
const steps = [
	{
		id: 1,
		title: "Ideation",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/01_ideate.png?width=1800&height=1800&name=01_ideate.png",
		description: "Rapid prototyping, research & development, user insights & testing",
	},
	{
		id: 2,
		title: "Design",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/02_design.png?width=1800&height=1800&name=02_design.png",
		description: "Product design, UX & UI design, design system development",
	},
	{
		id: 3,
		title: "Development",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/03_develop.png?width=1800&height=1800&name=03_develop.png",
		description: "Web development, mobile development, AI & GenAI, MVPs, cloud",
	},
	{
		id: 4,
		title: "Maintenance",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/04_maintain.png?width=1800&height=1800&name=04_maintain.png",
		description: "Quality assurance, product management, end to end software maintenance",
	},
	{
		id: 5,
		title: "Scaling",
		image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/05_scale.png?width=1800&height=1800&name=05_scale.png",
		description: "Product strategy & expansion, continuous discovery, automation & optimization",
	},
];


function InteractiveProcessSection() {
	const [activeStep, setActiveStep] = useState(1);

	return (
	<section className="py-24 bg-[#25292C] px-4 md:px-20">
  {/* Header Section */}
  <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
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

  {/* Horizontal Scrollable Card Slider */}
  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {steps.map((step) => (
      <div
        key={step.id}
        onClick={() => setActiveStep(step.id)}
        className="flex-shrink-0 w-[400px] md:w-[450px] cursor-pointer group"
      >
        <img
          src={step.image}
          alt={step.title}
          className="h-[400px] w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold text-white">{step.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

	);
}

export default InteractiveProcessSection;
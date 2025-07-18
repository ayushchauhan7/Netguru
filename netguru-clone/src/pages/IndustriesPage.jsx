import React from 'react';
import { ArrowRight, DollarSign, ShoppingCart, HeartPulse, Home, CheckCircle } from 'lucide-react';

// Import your separate Navbar and Footer components
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
// --- Data for Page Sections ---

const industries = [
	{
		icon: <DollarSign size={32} className="text-green-400" />,
		title: 'Fintech & Banking',
		description: 'Secure and scalable software for financial services, from mobile banking to payment processing.'
	},
	{
		icon: <ShoppingCart size={32} className="text-green-400" />,
		title: 'Retail & Ecommerce',
		description: 'Engaging online stores and platforms that boost sales and improve customer experience.'
	},
	{
		icon: <HeartPulse size={32} className="text-green-400" />,
		title: 'Healthcare',
		description: 'HIPAA-compliant applications for patient management, telehealth, and medical data analysis.'
	},
	{
		icon: <Home size={32} className="text-green-400" />,
		title: 'Proptech & Real Estate',
		description: 'Innovative solutions for property management, real estate marketplaces, and smart buildings.'
	}
];

const benefits = [
	'Deep domain expertise in your industry',
	'Faster time-to-market with agile development',
	'Scalable solutions that grow with your business',
	'Dedicated teams focused on your success'
];

const caseStudies = [
	{
		clientLogo: 'https://www.netguru.com/hubfs/solaris-logo-white.svg',
		title: 'A new core banking system for a Banking-as-a-Service pioneer',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/solarisbank-case-study-cover-1.jpg?width=1080&name=solarisbank-case-study-cover-1.jpg'
	},
	{
		clientLogo: 'https://www.netguru.com/hubfs/Ikea-logo-white.svg',
		title: 'A new app to help millions of customers design their dream kitchens',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/ikea-case-study-cover.jpg?width=1080&name=ikea-case-study-cover.jpg'
	}
];

// --- Page-Specific Sub-Components ---

const IndustriesHero = () => (
	<div className="relative bg-gray-900">
		<div className="absolute inset-0">
			<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team working on a project" />
			<div className="absolute inset-0 bg-gray-900 opacity-70"></div>
		</div>
		<Nav />
		<div className="relative max-w-4xl mx-auto pt-48 pb-24 text-center px-4">
			<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
				We build successful digital products for <span className="text-green-400">every industry</span>
			</h1>
			<p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
				From finance to healthcare, we craft custom software solutions that help businesses in all sectors grow and innovate.
			</p>
		</div>
	</div>
);

const IndustryCard = ({ icon, title, description }) => (
	<div className="bg-white rounded-lg shadow-lg p-8 transition hover:shadow-2xl hover:-translate-y-2">
		<div className="mb-6">{icon}</div>
		<h3 className="text-2xl font-bold mb-3">{title}</h3>
		<p className="text-gray-600 mb-6">{description}</p>
		<a href="#" className="font-semibold text-green-500 hover:text-green-600 flex items-center gap-2">
			Learn more <ArrowRight size={16} />
		</a>
	</div>
);

const IndustriesGrid = () => (
	<div className="bg-gray-50 py-24">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{industries.map(industry => (
					<IndustryCard key={industry.title} {...industry} />
				))}
			</div>
		</div>
	</div>
);

const BenefitsSection = () => (
	<div className="bg-white py-24">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
			<div>
				<h2 className="text-4xl font-bold mb-6">What you get</h2>
				<ul className="space-y-4">
					{benefits.map(benefit => (
						<li key={benefit} className="flex items-start">
							<CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
							<span className="text-lg text-gray-700">{benefit}</span>
						</li>
					))}
				</ul>
			</div>
			<div>
				<img className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Business meeting" />
			</div>
		</div>
	</div>
);

const FeaturedCaseStudies = () => (
	<div className="bg-gray-50 py-24">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-4xl font-bold text-center mb-16">See our partnerships in action</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{caseStudies.map(study => (
					<div key={study.title} className="relative rounded-lg overflow-hidden group h-96 bg-cover bg-center" style={{ backgroundImage: `url(${study.imageUrl})` }}>
						<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
						<div className="relative h-full flex flex-col justify-end p-8">
							<img src={study.clientLogo} alt="Client Logo" className="h-10 w-auto mb-6" />
							<h3 className="text-2xl font-bold text-white leading-tight">{study.title}</h3>
						</div>
						<a href="#" className="absolute inset-0" aria-label={study.title}></a>
					</div>
				))}
			</div>
		</div>
	</div>
);

const CtaSection = () => (
	<div className="bg-green-500">
		<div className="max-w-7xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
			<h2 className="text-4xl font-bold text-white">Ready to build your next big thing?</h2>
			<p className="mt-4 text-lg text-green-100">Let's turn your idea into a market-leading digital product.</p>
			<div className="mt-8">
				<a href="#" className="bg-white text-green-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
					Get in touch
				</a>
			</div>
		</div>
	</div>
);

// --- Main Page Component ---

function IndustriesPage() {
	return (
		<div className="bg-white">
			<IndustriesHero />
			<IndustriesGrid />
			<BenefitsSection />
			<FeaturedCaseStudies />
			<CtaSection />
			<Footer />
		</div>
	);
}

export default IndustriesPage;
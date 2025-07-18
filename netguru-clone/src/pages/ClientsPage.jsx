import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import your separate components
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
// --- Data for Components ---
const caseStudies = [
	{
		clientLogo: 'https://www.netguru.com/hubfs/damen-logo-white.svg',
		title: 'Building an IoT platform for a global shipbuilder',
		tags: ['Web', 'Mobile', 'UX/UI', 'Product Design'],
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/Damen-case-study-cover.jpg?width=1080&name=Damen-case-study-cover.jpg'
	},
	{
		clientLogo: 'https://www.netguru.com/hubfs/UBS-logo-white.svg',
		title: 'Developing a secure mobile banking app for a leading financial institution',
		tags: ['Mobile', 'Fintech', 'Security'],
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/ubs-case-study-cover.jpeg?width=1080&name=ubs-case-study-cover.jpeg'
	},
	{
		clientLogo: 'https://www.netguru.com/hubfs/solaris-logo-white.svg',
		title: 'A new core banking system for a Banking-as-a-Service pioneer',
		tags: ['Web', 'Fintech', 'Infrastructure'],
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/solarisbank-case-study-cover-1.jpg?width=1080&name=solarisbank-case-study-cover-1.jpg'
	},
	{
		clientLogo: 'https://www.netguru.com/hubfs/Ikea-logo-white.svg',
		title: 'A new app to help millions of customers design their dream kitchens',
		tags: ['Mobile', 'Retail', 'UX/UI'],
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/ikea-case-study-cover.jpg?width=1080&name=ikea-case-study-cover.jpg'
	},
];

const clientLogos = [
	{ name: 'IKEA', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg' },
	{ name: 'UBS', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg' },
	{ name: 'Volkswagen', logoUrl: 'https://www.netguru.com/hubfs/_N19%20Modules/Clients/logos/vw.svg' },
	{ name: 'Żabka', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/zabka.svg' },
	{ name: 'OLX', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/olx.svg' },
	{ name: 'Spendesk', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/spendesk.svg' },
];


// --- Sub-Components for this page ---

const ClientsHero = () => (
	<div className="relative bg-gray-900">
		<div className="absolute inset-0">
			<img className="w-full h-full object-cover" src="https://www.netguru.com/hs-fs/hubfs/_N23/assets/images/clients-bg.jpg?width=3840&name=clients-bg.jpg" alt="Abstract background" />
			<div className="absolute inset-0 bg-gray-900 opacity-80"></div>
		</div>
		<Nav />
		<div className="relative max-w-4xl mx-auto pt-48 pb-24 text-center px-4">
			<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
				We’ve helped over <span className="text-green-400">1,000 clients</span> build digital products
			</h1>
			<p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
				Discover how we deliver value to businesses, from Fortune 500 companies to early-stage startups.
			</p>
		</div>
	</div>
);

const CaseStudyCard = ({ clientLogo, title, tags, imageUrl }) => (
	<div className="relative rounded-lg overflow-hidden group h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
		<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
		<div className="relative h-full flex flex-col justify-end p-8">
			<img src={clientLogo} alt="Client Logo" className="h-10 w-auto mb-6" />
			<h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
			<div className="flex flex-wrap gap-2 mt-4">
				{tags.map(tag => (
					<span key={tag} className="bg-white bg-opacity-20 text-white text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
				))}
			</div>
		</div>
		<a href="#" className="absolute inset-0" aria-label={title}></a>
	</div>
);

const CaseStudiesSection = () => (
	<div className="bg-white py-24">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-4xl font-bold text-center mb-4">Our clients' stories</h2>
			<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
				Check out how our custom software development company delivered value to leading brands and startups.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{caseStudies.map((study, index) => (
					<CaseStudyCard key={index} {...study} />
				))}
			</div>
			<div className="text-center mt-16">
				<a href="#" className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
					View all case studies
				</a>
			</div>
		</div>
	</div>
);

const ClientLogosSection = () => (
	<div className="bg-gray-100 py-16">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
				{clientLogos.map((client) => (
					<div key={client.name} className="flex justify-center">
						<img src={client.logoUrl} alt={`${client.name} logo`} className="h-6 md:h-8 object-contain filter grayscale opacity-60 hover:opacity-100 transition" />
					</div>
				))}
			</div>
		</div>
	</div>
);

const CtaSection = () => (
	<div className="bg-gray-900">
		<div className="max-w-7xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
			<h2 className="text-4xl font-bold text-white">Let's build your next product together</h2>
			<p className="mt-4 text-lg text-gray-300">Have a project in mind? We are ready to help you bring it to life.</p>
			<div className="mt-8">
				<a href="#" className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
					Estimate your project
				</a>
			</div>
		</div>
	</div>
);


// --- Main Page Component ---

function ClientsPage() {
	return (
		<div>
			<ClientsHero />
			<CaseStudiesSection />
			<ClientLogosSection />
			<CtaSection />
			<Footer />
		</div>
	);
}

export default ClientsPage;
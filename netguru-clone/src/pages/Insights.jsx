import React from 'react';
import Footer from "../components/Footer.jsx";

// Import the Footer component here when it's ready
// import Footer from './Footer';

// --- Helper Data (for placeholders) ---
// In a real app, this data would come from a CMS or an API.
const articles = [
	// Row 1
	{
		category: 'Innovation',
		title: 'Unlocking Creativity: A Framework for Modern Teams',
		imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Engineering',
		title: 'The Future of Microservices Architecture',
		imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Design',
		title: 'Designing for Emotion: How to Create Memorable User Experiences',
		imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop',
	},
	// Row 2
	{
		category: 'Ruby on Rails',
		title: 'Ruby on Rails Development Cost Explained: From Planning to Launch',
		imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop',
	},
	{
		category: 'Startups',
		title: 'How to Hire Your First Ruby on Rails Developer: A Practical Guide for Startups (2025)',
		imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3000&auto=format&fit=crop',
	},
	{
		category: 'AI Agents',
		title: 'Testing AI Agents: Why Unit Tests Aren\'t Enough',
		imageUrl: 'https://images.unsplash.com/photo-1507146426996-32bb72b3b36d?q=80&w=2940&auto=format&fit=crop',
	},
	// Row 3
	{
		category: 'Innovation',
		title: 'Scaling Innovation in Enterprise Environments',
		imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Engineering',
		title: 'GraphQL vs. REST: A Deep Dive',
		imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Design',
		title: 'The Principles of Motion Design in UI',
		imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop',
	},
	// Row 4
	{
		category: 'Ruby on Rails',
		title: 'Performance Tuning Your Rails Application',
		imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Startups',
		title: 'Securing Your First Round of Funding',
		imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'AI Agents',
		title: 'Ethical Considerations for Autonomous AI',
		imageUrl: 'https://images.unsplash.com/photo-1620712943543-2858200e944a?q=80&w=2940&auto=format&fit=crop',
	},
	// Row 5
	{
		category: 'Innovation',
		title: 'Fostering a Culture of Experimentation',
		imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Engineering',
		title: 'Introduction to WebAssembly',
		imageUrl: 'https://images.unsplash.com/photo-1590902731213-9b6a112704f8?q=80&w=2874&auto=format=fit=crop',
	},
	{
		category: 'Design',
		title: 'Accessibility First: A Guide for Product Managers',
		imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2942&auto=format&fit=crop',
	},
	// Row 6
	{
		category: 'Ruby on Rails',
		title: 'Modern Frontend Development with Rails and Hotwire',
		imageUrl: 'https://images.unsplash.com/photo-1531403009284-440980c81345?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Startups',
		title: 'Building a Minimum Viable Product (MVP) that Works',
		imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'AI Agents',
		title: 'Reinforcement Learning in Practice',
		imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2874&auto=format&fit=crop',
	},
	// Row 7
	{
		category: 'Innovation',
		title: 'Digital Transformation in Legacy Industries',
		imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Engineering',
		title: 'Mastering CI/CD Pipelines with GitHub Actions',
		imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Design',
		title: 'Data-Driven Design: Using Analytics to Inform UX',
		imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
	},
	// Row 8
	{
		category: 'Ruby on Rails',
		title: 'Is Ruby on Rails Still Relevant in 2025?',
		imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop',
	},
	{
		category: 'Startups',
		title: 'Growth Hacking Strategies for Early-Stage Companies',
		imageUrl: 'https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2874&auto=format&fit=crop',
	},
	{
		category: 'AI Agents',
		title: 'The Rise of Large Language Model (LLM) Operations',
		imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2940&auto=format&fit=crop',
	},
];


// --- SVG Icons ---
const ArrowRightIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
	</svg>
);


// --- Components ---

const Header = () => (
	// Header with a dark background and a bottom border
	<header className="bg-black py-4 px-4 md:px-8 border-b border-gray-800 sticky top-0 z-50">
		<div className="max-w-7xl mx-auto flex justify-between items-center">
			{/* Logo */}
			<a href="/">
			<div className="text-2xl font-bold text-white flex items-center">
				{/* Simple 'N' logo */}
				<span className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold mr-2 rounded">N</span>
				netguru
			</div>
			</a>
			{/* Navigation links updated to match the image */}
			<nav className="hidden md:flex items-center space-x-8">
				<a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
				<a href="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</a>
				<a href="/netguru-clone/src/pages/ClientsPage" className="text-gray-300 hover:text-white transition-colors">Clients</a>
				<a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About us</a>
				<a href="/blog" className="text-gray-300 hover:text-white transition-colors">Insights</a>
			</nav>
			{/* Estimate project button */}
			<a href="/estimate-project">
			<div className="flex items-center space-x-4">
				<button className="hidden md:block bg-green-500 text-black font-bold py-2 px-5 rounded-md hover:bg-green-400 transition-colors">
					Estimate project →
				</button>
			</div>
			</a>
		</div>
	</header>
);

const HeroSection = () => (
	// Hero section with dark background and centered text
	<section className="bg-black text-white py-20 md:py-32 px-4 md:px-8">
		<div className="max-w-7xl mx-auto">
			{/* Main headline */}
			<h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
				Fuel your innovation <span className="text-green-400">fire</span>
			</h1>
			{/* Sub-headline */}
			<p className="mt-6 text-lg text-gray-400 max-w-2xl">
				Hand-picked, actionable insights for design, engineering, and innovation leaders at companies of all sizes
			</p>
		</div>
	</section>
);

const ArticleCard = ({ article }) => (
	// Article card with hover effect for the image and title
	<div className="group bg-gray-900/50 p-4 rounded-lg flex flex-col">
		<div className="overflow-hidden rounded-md flex-grow">
			<img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
		</div>
		<div className="mt-4 flex-grow flex flex-col">
			<h3 className="text-xl font-bold text-white mt-1 flex-grow group-hover:text-green-400 transition-colors">{article.title}</h3>
			<div className="mt-4 text-right">
            <span className="text-green-400 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                <ArrowRightIcon />
            </span>
			</div>
		</div>
	</div>
);

const Pagination = () => (
	<div className="flex justify-center items-center space-x-2 mt-16">
		<button className="bg-white text-black font-bold w-10 h-10 flex items-center justify-center rounded-md">1</button>
		<button className="text-gray-400 hover:text-white font-bold w-10 h-10 flex items-center justify-center rounded-md">2</button>
		<span className="text-gray-400">...</span>
		<button className="text-gray-400 hover:text-white font-bold w-10 h-10 flex items-center justify-center rounded-md">146</button>
		<button className="text-gray-400 hover:text-white font-bold w-10 h-10 flex items-center justify-center rounded-md">
			<ArrowRightIcon />
		</button>
	</div>
);

const ArticleGrid = ({ articles }) => (
	// Article grid section with a dark background
	<section className="bg-black py-16 md:py-24 px-4 md:px-8">
		<div className="max-w-7xl mx-auto">
			{/* Responsive grid layout */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{articles.map(article => (
					<ArticleCard key={article.title} article={article} />
				))}
			</div>
			{/* Pagination component replaces the "Load more" button */}
			<Pagination />
		</div>
	</section>
);


// --- Main Page Component ---
// Assembles the final page
const App = () => {
	return (
		<div className="bg-black font-sans min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<HeroSection />
				<ArticleGrid articles={articles} />
			</main>
			{/* The Footer component will go here.
            You can create a new file (e.g., Footer.js),
            build the footer component, and then import it at the top of this file.
          */}
			 <Footer />
		</div>
	);
};

export default App;

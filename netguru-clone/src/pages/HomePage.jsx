import React from 'react';
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/Hero.jsx";
import InteractiveProcessSection from "../components/InteractiveProcessSection.jsx";
import ResultsSection from "../components/ResultsSection.jsx";
import Footer from "../components/Footer.jsx";
import InsightsSection from "../components/InsightsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyNetguruSection from "../components/WhyNetguruSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import HomeCards from "../components/HomeCards.jsx"; // Assuming this is the correct import for HomeCards
const HomePage = () => {
	return (
		<div className='w-full min-h-screen'>
			
		<Navbar />
		<HomeCards />
		<HeroSection />
		<InteractiveProcessSection />
		<ResultsSection />
		<TestimonialsSection />
		<WhyNetguruSection />
		<ClientsSection />
		<InsightsSection />
		<Footer />
		
			</div>
	);
};
export default HomePage;

import React from 'react';
import Navbar from "../components/Navbar.jsx";
import HomeCards from "../components/HomeCards.jsx";
import InteractiveProcessSection from "../components/InteractiveProcessSection.jsx";
import ResultsSection from "../components/ResultsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyNetguruSection from "../components/WhyNetguruSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import HeroSection1 from "../components/HeroSection1.jsx"; // Importing the HeroSection1 component
import HeroSection from "../components/HeroSection.jsx";
import InsightsSection from "../components/InsightsSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
	return (
		<div className='w-full min-h-screen'>
			
		<Navbar />
		<HeroSection1/>
		<HomeCards />
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
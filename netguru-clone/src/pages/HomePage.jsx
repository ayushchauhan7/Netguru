import React from 'react';
import Navbar from "../components/Navbar.jsx";
import HomeCards from "../components/HomeCards.jsx";
import InteractiveProcessSection from "../components/InteractiveProcessSection.jsx";
import ResultsSection from "../components/ResultsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyNetguruSection from "../components/WhyNetguruSection.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import InsightsSection from "../components/InsightsSection.jsx";
import CtaHeroSection from "../components/Hero.jsx"; // Renamed for clarity to differentiate from Navbar's hero
import Footer from "../components/Footer.jsx";

const HomePage = () => {
	return (
		<div className='w-full min-h-screen'>
			<Navbar />
			<HomeCards />
			<InteractiveProcessSection />
			<ResultsSection />
			<TestimonialsSection />
			<WhyNetguruSection />
			<ClientsSection />
			<InsightsSection />
			<CtaHeroSection /> {/* This component is now correctly placed */}
			<Footer />
		</div>
	);
};
export default HomePage;
import React from 'react';
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import InteractiveProcessSection from "./components/InteractiveProcessSection.jsx";
import ResultsSection from "./components/ResultsSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import WhyNetguruSection from "./components/WhyNetguruSection.jsx";
import ClientsSection from "./components/ClientsSection.jsx";
import InsightsSection from "./components/InsightsSection.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	return (
		<>
		<Navbar />
			<HeroSection />
			<InteractiveProcessSection />
			<ResultsSection />
			<TestimonialsSection />
			<WhyNetguruSection />
			<ClientsSection />
			<InsightsSection />
			<Hero />
			<Footer />
		</>
	);
};
export default App;

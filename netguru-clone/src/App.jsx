import React from 'react';
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import InteractiveProcessSection from "./components/InteractiveProcessSection.jsx";
import ResultsSection from "./components/ResultsSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import WhyNetguruSection from "./components/WhyNetguruSection.jsx";
import ClientsSection from "./components/ClientsSection.jsx";

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
		</>
	);
};
export default App;

import React from 'react';
// import Navbar from "./components/Navbar.jsx";
// import HeroSection from "./components/HeroSection.jsx";
// import InteractiveProcessSection from "./components/InteractiveProcessSection.jsx";
// import ResultsSection from "./components/ResultsSection.jsx";
// import TestimonialsSection from "./components/TestimonialsSection.jsx";
// import WhyNetguruSection from "./components/WhyNetguruSection.jsx";
// import ClientsSection from "./components/ClientsSection.jsx";
// import InsightsSection from "./components/InsightsSection.jsx";
// import Hero from "./components/Hero.jsx";
// import Footer from "./components/Footer.jsx";
import EstimateProjectPage from "./pages/EstimateProjectPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Services from "./pages/Services.jsx";
import Insights from "./pages/Insights.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ClientsPage from "./pages/ClientsPage.jsx";
import IndustriesPage from "./pages/IndustriesPage.jsx";

const App = () => {
	return (
		<>
		<HomePage />
			<EstimateProjectPage />
			<Services />
			<Insights />
			<AboutUs />
			<ClientsPage />
			<IndustriesPage />
		</>
	);
};
export default App;

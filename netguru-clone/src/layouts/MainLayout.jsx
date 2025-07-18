import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
	return (
		<div className="bg-gray-900">
			<Navbar />
			<main>
				{/* Your page components (like EstimateProjectPage) will be rendered here */}

				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
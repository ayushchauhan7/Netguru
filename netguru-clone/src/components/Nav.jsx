import React from 'react';
import {ArrowRight} from "lucide-react";

const Nav = () => {
	return (
		<>
			{/* Dark Overlay */}
			<div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

			{/* Navbar */}
			<nav className="relative z-10 w-full px-6 lg:px-20 py-6 flex justify-between items-center">
				<div className="flex items-center gap-10">
					<a href="/" className="flex items-center gap-2">
						<img
							src="https://www.netguru.com/hubfs/images/logos/favicon.ico"
							alt="logo"
							className="w-6 h-6"
						/>
						<span className="text-white font-semibold text-xl">netguru</span>
					</a>

					<ul className="hidden md:flex gap-8 text-white font-medium">
						<li><a href="#" className="hover:text-gray-300 transition">Services</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">Industries</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">Clients</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">About us</a></li>
						<li><a href="#" className="hover:text-gray-300 transition">Insights</a></li>
					</ul>
				</div>

				<a
					href="#"
					className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full border border-white hover:bg-gray-100 transition"
				>
					Get in touch <ArrowRight size={16} />
				</a>
			</nav>
		</>

	);
};
export default Nav;

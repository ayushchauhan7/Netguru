import React, { useState } from "react";
// Make sure you have react-router-dom installed and configured
// import { Link } from "react-router-dom";

// Using <a> tags for standalone demonstration. Replace with <Link> if using React Router.
const Link = (props) => <Link href={props.to} {...props}>{props.children}</Link>;


const Navbar = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	return (
		<nav className="bg-black bg-opacity-80 backdrop-blur-sm shadow-md fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				{/* Logo */}
				<Link to="/" className="text-lg font-bold text-white">
					<img
						src="https://www.netguru.com/hubfs/_N23/assets/logos/netguru-logotype-white.svg"
						alt="Netguru Logo"
						className="h-6"
						onError="this.onerror=null;this.src='https://placehold.co/100x24/141414/FFFFFF?text=Netguru';"
					/>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-8 items-center">
					<li className="relative group">
						<a href="#" className="text-gray-300 hover:text-white transition-colors">
							Services
						</a>
						{/* Dropdown Menu */}
						<div className="absolute hidden group-hover:flex flex-col bg-black bg-opacity-90 backdrop-blur-md shadow-lg rounded-md py-4 px-6 w-[600px] mt-4 z-50">
							<div className="grid grid-cols-2 gap-6">
								<div>
									<h4 className="font-bold text-white mb-2">Ideation</h4>
									<ul className="space-y-2">
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rapid Prototyping</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research & Development</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">User Research & Testing</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Strategy</a></li>
									</ul>
								</div>
								<div>
									<h4 className="font-bold text-white mb-2">Software Development</h4>
									<ul className="space-y-2">
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">MVPs</a></li>
										<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Strategy</a></li>
									</ul>
								</div>
							</div>
							<a href="#" className="text-green-400 hover:text-green-300 mt-4 block text-right font-semibold">All services</a>
						</div>
					</li>
					<li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
					<li><Link to="/clients" className="text-gray-300 hover:text-white transition-colors">Clients</Link></li>
					<li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About us</Link></li>
					<li><Link to="/insights" className="text-white font-semibold">Insights</Link></li>
				</ul>

				{/* CTA Button */}
				<Link
					to="/estimateproject"
					className="hidden md:inline-block border border-gray-400 text-white py-2 px-5 rounded-md hover:bg-white hover:text-black transition-colors"
				>
					Get in touch <span aria-hidden="true">→</span>
				</Link>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden text-white focus:outline-none text-2xl"
					onClick={() => setIsMobileOpen(!isMobileOpen)}
				>
					{isMobileOpen ? '✕' : '☰'}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileOpen && (
				<div className="md:hidden bg-black bg-opacity-95 px-6 pb-6 pt-2 space-y-4">
					<Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
					<Link to="/industries" className="block text-gray-300 hover:text-white transition-colors">Industries</Link>
					<Link to="/clients" className="block text-gray-300 hover:text-white transition-colors">Clients</Link>
					<Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
					<Link to="/insights" className="block text-white font-semibold">Insights</Link>
					<Link to="/estimateproject" className="block mt-4 text-center border border-gray-400 text-white py-2 px-5 rounded-md hover:bg-white hover:text-black transition-colors">
						Get in touch <span aria-hidden="true">→</span>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

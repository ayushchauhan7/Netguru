import React from 'react';
import headerVideo from '../assets/ng-com-header-background.mp4';

const Navbar = () => {
	return (
		<header className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] flex items-center z-10">
			<nav className="container mx-auto flex items-center justify-between p-6 relative z-10">
				<div className="flex items-center">
					<img src="https://www.netguru.com/hubfs/images/logos/favicon.ico" alt="logo" className='w-8' />
					<a href="/" className="text-2xl pl-2 text-white mr-8 px-4 pt-1">
						Netguru
					</a>
					<ul className="hidden md:flex items-center space-x-8">
						<li>
							<a href="#" className="text-white hover:text-gray-300">
								Services
							</a>
						</li>
						<li>
							<a href="#" className="text-white hover:text-gray-300">
								Industries
							</a>
						</li>
						<li>
							<a href="#" className="text-white hover:text-gray-300">
								Clients
							</a>
						</li>
						<li>
							<a href="#" className="text-white hover:text-gray-300">
								About us
							</a>
						</li>
						<li>
							<a href="#" className="text-white hover:text-gray-300">
								Insights
							</a>
						</li>
					</ul>
				</div>
				<a
					href="#"
					className="hidden md:inline-block bg-white text-black py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
				>
					Get in touch
				</a>
			</nav>
			<video
				id="header-video"
				src={headerVideo}
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-100% h-720px object-cover z-0 aspect-video"
			/>

		</header>
	);
};

export default Navbar;
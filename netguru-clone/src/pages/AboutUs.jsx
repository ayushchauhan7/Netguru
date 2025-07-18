import React from 'react';
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer.jsx";
// import Footer from './Footer'; // <-- Uncomment this to import your Footer

// The new Navbar component logic is now inside the AboutUs component.
const NewNav = () => {
	return (
		<>
			{/* Dark Overlay - Placed within the relative container of the header */}
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />

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
					className="hidden md:flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full border border-white hover:bg-gray-100 transition"
				>
					Get in touch <ArrowRight size={16} />
				</a>
			</nav>
		</>
	);
};


const AboutUs = () => {
	return (
		<div className="bg-white">
			{/* Header Section with Integrated Navbar */}
			<header className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://www.netguru.com/hs-fs/hubfs/netguru-39-cut.jpg?length=3449')" }}>
				<NewNav />
				<div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-base font-semibold text-gray-300 tracking-wide uppercase">About Us</h2>
						<p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
							We are a digital acceleration company.
						</p>
						<p className="max-w-xl mt-5 mx-auto text-xl text-gray-200">
							Since 2008, we've been helping entrepreneurs and innovators shape the world through beautiful software.
						</p>
					</div>
				</div>
			</header>

			{/* Stats Section */}
			<section className="bg-gray-50 pt-12 sm:pt-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
							Trusted by companies worldwide
						</h2>
						<p className="mt-3 text-xl text-gray-500 sm:mt-4">
							We have delivered over 1000 projects to more than 600 clients.
						</p>
					</div>
				</div>
				<div className="mt-10 pb-12 bg-white sm:pb-16">
					<div className="relative">
						<div className="absolute inset-0 h-1/2 bg-gray-50" />
						<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="max-w-4xl mx-auto">
								<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
									<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Years in business</dt>
										<dd className="order-1 text-5xl font-extrabold text-indigo-600">16+</dd>
									</div>
									<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Projects delivered</dt>
										<dd className="order-1 text-5xl font-extrabold text-indigo-600">1000+</dd>
									</div>
									<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">NPS Score</dt>
										<dd className="order-1 text-5xl font-extrabold text-indigo-600">71</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values Section */}
			<section className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
						<p className="mt-4 text-lg text-gray-500">
							Our values shape the way we work with each other and with our clients.
						</p>
					</div>
					<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Exceed expectations</dt>
								<dd className="mt-2 text-base text-gray-500">Never settle for “good enough” when you know you can and should do better.</dd>
							</div>
						</div>
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Take ownership</dt>
								<dd className="mt-2 text-base text-gray-500">Embrace responsibility and take the initiative to get things done, holding yourself and others accountable.</dd>
							</div>
						</div>
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Be a partner</dt>
								<dd className="mt-2 text-base text-gray-500">Foster transparent collaboration, value diverse expertise, and build relationships on trust and respect.</dd>
							</div>
						</div>
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Act with empathy</dt>
								<dd className="mt-2 text-base text-gray-500">Operate with a people-first mindset, practicing compassion, respect, and kindness in every interaction.</dd>
							</div>
						</div>
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Seek continuous growth</dt>
								<dd className="mt-2 text-base text-gray-500">Stay curious, constantly learn, and be open to feedback in order to evolve professionally and personally.</dd>
							</div>
						</div>
						<div className="flex">
							<div className="ml-3">
								<dt className="text-lg font-medium text-gray-900">Make an impact</dt>
								<dd className="mt-2 text-base text-gray-500">Be an agent of change, striving to create an inclusive and sustainable future for people and the planet.</dd>
							</div>
						</div>
					</dl>
				</div>
			</section>

			{/* Team Section */}
			<section className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
					<div className="space-y-8 sm:space-y-12">
						<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
							<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
							<p className="text-xl text-gray-500">
								We are a team of passionate people who love to build great products.
							</p>
						</div>
						<ul role="list" className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
							{/* Team Member 1 */}
							<li>
								<div className="space-y-4">
									<img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Foster" />
									<div className="space-y-2">
										<div className="text-xs font-medium lg:text-sm">
											<h3>Michael Foster</h3>
											<p className="text-indigo-600">Co-Founder / CEO</p>
										</div>
									</div>
								</div>
							</li>
							{/* Team Member 2 */}
							<li>
								<div className="space-y-4">
									<img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Dries Vincent" />
									<div className="space-y-2">
										<div className="text-xs font-medium lg:text-sm">
											<h3>Dries Vincent</h3>
											<p className="text-indigo-600">Co-Founder / CTO</p>
										</div>
									</div>
								</div>
							</li>
							{/* Team Member 3 */}
							<li>
								<div className="space-y-4">
									<img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lindsay Walton" />
									<div className="space-y-2">
										<div className="text-xs font-medium lg:text-sm">
											<h3>Lindsay Walton</h3>
											<p className="text-indigo-600">Head of Product</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Footer component will be imported here */}
			 <Footer />
		</div>
	);
};

export default AboutUs;
import React from 'react';
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";

// Data for the client logos
const clientLogos = [
	{ name: 'Keller Williams', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/keller-williams.svg' },
	{ name: 'UBS', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg' },
	{ name: 'Merck', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg' },
	{ name: 'IKEA', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg' },
];

// Reusable input component for the form
const FormInput = ({ label, name, type = 'text', placeholder = '', required = false }) => (
	<div>
		<label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
			{label}{required && '*'}
		</label>
		<input
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
			className="w-full bg-grey border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
			required={required}
		/>
	</div>
);

function EstimateProjectPage() {
	return (
		<>
			<Nav />
		<div className="bg-black text-white">
			<div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">

				{/* Header Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						You need a partner. <br />
						<span className="text-green-400">We're here to help.</span>
					</h1>
					<p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
						We would like to understand your needs. Before we start, please fill in the form or send your RFP or inquiry via <a href="mailto:hello@netguru.com" className="text-green-400 font-semibold hover:underline">hello@netguru.com</a>.
					</p>
					<div className="mt-8 flex justify-center items-center gap-8">
						{clientLogos.map((client) => (
							<img key={client.name} src={client.logoUrl} alt={client.name} className="h-6 object-contain filter grayscale brightness-0 invert" />
						))}
					</div>
				</div>

				{/* Form Section */}
				<form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
					<FormInput label="First Name" name="first-name" required />
					<FormInput label="Last Name" name="last-name" required />
					<FormInput label="Email" name="email" type="email" required />
					<FormInput label="Phone Number" name="phone" type="tel" />
					<FormInput label="Company name" name="company" />
					<FormInput label="How did you hear about us?" name="source" required />

					<div className="md:col-span-2">
						<label htmlFor="project-details" className="block text-sm font-medium text-gray-300 mb-2">
							Tell us more about your project*
						</label>
						<textarea
							id="project-details"
							name="project-details"
							rows="6"
							className="w-full bg-gray border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
							required
						></textarea>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-300 mb-3">
							Do you need on NDA first?
						</label>
						<div className="flex gap-4">
							<label className="flex-1 has-[:checked]:bg-green-500 has-[:checked]:border-green-500 has-[:checked]:text-white cursor-pointer text-center border border-gray-600 rounded-md px-6 py-3 transition">
								<input type="radio" name="nda" value="yes" className="sr-only" />
								<span>Yes</span>
							</label>
							<label className="flex-1 has-[:checked]:bg-green-500 has-[:checked]:border-green-500 has-[:checked]:text-white cursor-pointer text-center border border-gray-600 rounded-md px-6 py-3 transition">
								<input type="radio" name="nda" value="no" className="sr-only" defaultChecked />
								<span>No</span>
							</label>
						</div>
					</div>

					<div className="md:col-span-2 mt-4">
						<div className="flex items-start">
							<input id="marketing-consent" name="marketing-consent" type="checkbox" className="h-5 w-5 mt-0.5 rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500" />
							<label htmlFor="marketing-consent" className="ml-3 text-sm text-gray-400">
								I agree to receive marketing communication from Netguru.
							</label>
						</div>
					</div>

					<div className="md:col-span-2 mt-6">
						<button type="submit" className="w-full bg-green-500 text-white font-bold py-4 px-8 rounded-md hover:bg-green-600 transition text-lg">
							Request Free Estimate
						</button>
					</div>
				</form>
			</div>
		</div>
			<Footer />
			</>
	);
}

export default EstimateProjectPage;
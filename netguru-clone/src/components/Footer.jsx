import React from 'react';

// --- Data for Footer Links & Logos ---
const socialLinks = [
	{ name: 'Behance', url: '#', icon: 'Be' },
	{ name: 'Facebook', url: '#', icon: 'f' },
	{ name: 'LinkedIn', url: '#', icon: 'in' }, // Corrected icon for LinkedIn
	{ name: 'Twitter', url: '#', icon: 'X' }, // Corrected icon for Twitter
];

const certificates = [
	{ name: 'B-Corp', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/b-corp.svg' },
	{ name: 'TUV Nord', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/tuv-nord.svg' },
];

const partnerships = [
	{ name: 'Microsoft', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/microsoft.svg' },
	{ name: 'AWS', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/aws.svg' },
	{ name: 'Mendix', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/mendix.svg' },
	{ name: 'Google Cloud Partner', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/google-cloud-partner.svg' },
	{ name: 'Webflow Premium Partner', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/webflow-premium-partner.svg' },
];

const recognitions = [
    { name: 'Clutch', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/clutch.svg' },
    { name: 'Awwwards', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/awwwards.svg' },
    { name: 'Inc. 5000', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/inc-5000.svg' },
    { name: 'EY Entrepreneur of the Year', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/ey-entrepreneur-of-the-year.svg' },
    { name: 'Forbes', logoUrl: 'https://www.netguru.com/hubfs/_N23/assets/logos/forbes.svg' },
];

function Footer() {
	return (
		<footer className="bg-black text-white"> {/* Changed background to black and text to white */}
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

				{/* Top Section: Info, Social, Newsletter */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Column 1: Company Info */}
					<div className="space-y-4">
						{/* Netguru mini-logo and text as seen in the image */}
						<div className="flex items-center gap-2 mb-4">
							<img src="https://www.netguru.com/hubfs/images/logos/favicon.ico" alt="Netguru logo" className="w-6 h-6" />
							<span className="text-white font-semibold text-xl">netguru</span>
						</div>
						<h3 className="font-bold text-white text-lg">Netguru S.A.</h3>
						<p className="text-sm">
							Nowe Garbary Office Center <br />
							ul. Małe Garbary 9 <br />
							61-756 Poznań, Poland
						</p>
						<div className="text-sm">
							<p>VAT-ID: PL7781454968</p>
							<p>REGON: 300826780</p>
							<p>KRS: 00001745671</p>
						</div>
						<a href="mailto:hello@netguru.com" className="text-sm hover:text-green-400 transition">
							hello@netguru.com
						</a>
					</div>

					{/* Column 2: Social Links */}
					<div>
						<h3 className="font-bold text-white text-lg mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							{socialLinks.map((link) => (
								<a key={link.name} href={link.url} className="text-gray-400 hover:text-white transition"> {/* Removed circular styling */}
									{link.icon}
								</a>
							))}
						</div>
					</div>

					{/* Column 3 & 4: Newsletter Signup */}
					<div className="lg:col-span-2">
						<h3 className="font-bold text-white text-lg">Digital Acceleration Editorial</h3>
						<p className="mt-2 mb-4 text-sm">Boost innovation with insights for change</p>
						<form className="flex flex-col sm:flex-row gap-4">
							<input type="email" placeholder="Your e-mail" className="flex-grow bg-gray border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400" />
							<button type="submit" className="bg-green-500 text-white font-bold px-6 py-2 rounded-md hover:bg-green-600 transition">
								Submit
							</button>
						</form>
						<p className="mt-4 text-sm text-gray-400"> {/* Added explanatory text */}
							Netguru is committed to processing the above information in order to subscribe you to the newsletter.
							Other information is used for statistical purposes and, from time to time, we would like to contact
							you about our products and services, as well as other content that may be of interest to you. If
							you consent to contact you for these purposes, please tick the checkbox.
						</p>
						<div className="mt-4 flex items-start">
							<input id="marketing-consent" type="checkbox" className="h-5 w-5 mt-0.5 rounded border-gray-600 bg-gray text-green-500 focus:ring-green-500" />
							<label htmlFor="marketing-consent" className="ml-3 text-sm text-gray-400">
								I agree to receive marketing communication from Netguru.
							</label>
						</div>
						<p className="mt-4 text-sm text-gray-400"> {/* Added unsubscribe text */}
							You can unsubscribe from these communications at any time. For more information on how to
							unsubscribe, our privacy practices please view our Privacy Policy.
						</p>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-800 pt-16">
					{/* Certificates & Partnerships */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h4 className="font-semibold text-white mb-6">Certificates:</h4>
							<div className="flex items-center gap-8">
								{certificates.map((cert, index) => (
									<img key={index} src={cert.logoUrl} alt={cert.name} className="h-16 object-contain filter grayscale brightness-0 invert" />
									))}
							</div>
						</div>
						<div>
							<h4 className="font-semibold text-white mb-6">Partnerships:</h4>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
								{partnerships.map((partner, index) => (
									<img key={index} src={partner.logoUrl} alt={partner.name} className="h-8 object-contain filter grayscale brightness-0 invert" />
									))}
							</div>
						</div>
					</div>

					{/* Recognitions */}
					<div>
						<h4 className="font-semibold text-white mb-6">Recognized by:</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
							{recognitions.map((rec, index) => (
								<img key={index} src={rec.logoUrl} alt={rec.name} className="h-10 object-contain filter grayscale brightness-0 invert" /> 
								))}
						</div>
					</div>
				</div>

            </div>

			{/* Bottom Bar */}
			<div className="bg-gray border-t border-gray-800">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
					<p>&copy; {new Date().getFullYear()} Netguru S.A. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 sm:mt-0">
						<a href="#" className="hover:text-white transition">Privacy Policy</a>
						<a href="#" className="hover:text-white transition">Terms of use</a>
						<a href="#" className="hover:text-white transition">Sitemap</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
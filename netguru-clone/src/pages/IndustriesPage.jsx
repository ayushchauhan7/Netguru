import React from 'react';
import { ArrowRight, DollarSign, ShoppingCart, HeartPulse, Home, CheckCircle } from 'lucide-react';

// Import your separate Navbar and Footer components
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
// --- Data for Page Sections ---
import ServiceTop from '../servicePageComponents/ServiceTop.jsx';
import SecondNavBar from '../servicePageComponents/secondNavBar.jsx';
import IdeationEvaluation from '../servicePageComponents/IdeationEvaluation.jsx';
import Card from '../servicePageComponents/card.jsx';
const industries = [
	{
		icon: <DollarSign size={32} className="text-green-400" />,
		title: 'Fintech & Banking',
		description: 'Secure and scalable software for financial services, from mobile banking to payment processing.'
	},
	{
		icon: <ShoppingCart size={32} className="text-green-400" />,
		title: 'Retail & Ecommerce',
		description: 'Engaging online stores and platforms that boost sales and improve customer experience.'
	},
	{
		icon: <HeartPulse size={32} className="text-green-400" />,
		title: 'Healthcare',
		description: 'HIPAA-compliant applications for patient management, telehealth, and medical data analysis.'
	},
	{
		icon: <Home size={32} className="text-green-400" />,
		title: 'Proptech & Real Estate',
		description: 'Innovative solutions for property management, real estate marketplaces, and smart buildings.'
	}
];

const benefits = [
	'Deep domain expertise in your industry',
	'Faster time-to-market with agile development',
	'Scalable solutions that grow with your business',
	'Dedicated teams focused on your success'
];

const caseStudies = [
	{
		title: 'Backend Solutions for Solaris, Europe’s Leading Banking-As-A-Service Company',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Solarisbank/solarisbank%20on%20a%20laptop%20.jpeg?length=593'
	},
	{
		title: 'Mobile-First: Supporting UBS Designers in Banking App Redesign',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/ikea-case-study-cover.jpg?width=1080&name=ikea-case-study-cover.jpg',
	},
	{
		title: 'Enabling In-App SEPA Payments for French Fintech Unicorn Spendesk',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/Bespoke_Hero_Background%20(1)-2.jpg?length=790' 
	},{
		title: 'Backend and Frontend Support for a German Private Equity Investing Platform',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Moonfare/moonfare%203.webp?length=593'
	},{
		title: 'Transforming the UX Design of a Rising Fintech Star in Mexico',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/swapcs.jpg?length=553'
	},{
		title: 'Developing and Refining A Payments App Design Based on Users’ Feedback',
		imageUrl: 'https://www.netguru.com/hs-fs/hubfs/hero.jpg?length=790'
	},
		
];


function CaseStudiesSection() {
  // Use the caseStudies array from above (or import if in another file)
  const caseStudies = [
    {
      title: 'Backend Solutions for Solaris, Europe’s Leading Banking-As-A-Service Company',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Solarisbank/solarisbank%20on%20a%20laptop%20.jpeg?length=593'
    },
    {
      title: 'Mobile-First: Supporting UBS Designers in Banking App Redesign',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Solarisbank/solarisbank%20on%20a%20laptop%20.jpeg?length=593'
    },
    {
      title: 'Enabling In-App SEPA Payments for French Fintech Unicorn Spendesk',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/Bespoke_Hero_Background%20(1)-2.jpg?length=790' 
    },
    {
      title: 'Backend and Frontend Support for a German Private Equity Investing Platform',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/N19%20Bespoke%20Case%20Studies/Moonfare/moonfare%203.webp?length=593'
    },
    {
      title: 'Transforming the UX Design of a Rising Fintech Star in Mexico',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/swapcs.jpg?length=553'
    },
    {
      title: 'Developing and Refining A Payments App Design Based on Users’ Feedback',
      imageUrl: 'https://www.netguru.com/hs-fs/hubfs/hero.jpg?length=790'
    },
  ];

  // Zig-zag margin top values for each card
  const zigzag = ["", "md:mt-16", "md:mt-32", "md:-mt-8", "md:mt-20", "md:-mt-4"];

  return (
    <div className="bg-[#25292C] font-sans w-full ">
      <IdeationEvaluation
        title="Finance "
        highlight=" case studies"
        description="Explore next-gen solutions we worked on with our finance clients."
        layout="row"
        bg="bg-[#25292C]"
      />
      <div
        className="
          flex overflow-x-auto gap-6 max-w-[80%] w-full m-auto
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible py-12
        "
      >
        {caseStudies.map((study, idx) => (
          <div
            key={study.title}
            className={`flex-shrink-0 w-[320px] md:w-auto ${zigzag[idx % zigzag.length]}`}
          >
            <Card title={study.title} imageUrl={study.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}


function IndustriesPage() {

	const navItems = ['Finance and banking',
		'Retail and ecommerce',
		'Healthcare',
		'Education'];

	return (
		<div className="">
			<Navbar />
			<ServiceTop
  backgroundImage="https://www.netguru.com/hs-fs/hubfs/13(1)%20(1).png?width=1600&height=800&name=13(1)%20(1).png"
  title="Cross-industry experience in"
  highlighted="digital acceleration"
  subtitle="We help businesses across industries drive profitability and customer satisfaction"
  buttonText="Let's Work Together"
  buttonHref="#"
/>
<SecondNavBar navItems={navItems}/>

<IdeationEvaluation
  title="Finance and "
  highlight="banking"
  description="The global financial landscape is constantly shifting. Your success will depend on the ability to adjust to the evolving environment and provide your clients with an amazing digital experience."
  layout="row"
/>

<CaseStudiesSection />
			<Footer />
		</div>
	);
}

export default IndustriesPage;
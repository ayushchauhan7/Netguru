import React from 'react';
// import Nav from "../components/Nav.jsx";
import ServiceTop from "../servicePageComponents/ServiceTop.jsx";
import IdeationEvaluation from "../servicePageComponents/IdeationEvaluation.jsx";
import Navbar from '../components/Navbar.jsx';
import SecondNavBar from '../servicePageComponents/secondNavBar.jsx';
import CaseStudies from '../servicePageComponents/caseStudies.jsx';
import Footer from '../components/Footer.jsx';
const Services = () => {
	const navItems = [
        'Ideation',
        'Product design',
        'Web development',
        'Mobile development',
        'Machine learning',
        'Support',
    ];

	return (
		<div>
            <Navbar/>
			<ServiceTop
  backgroundImage="https://www.netguru.com/hs-fs/hubfs/Krak%C3%B3w%20Hub%20photoshoot%202022/Krak%C3%B3w%20Hub%20photoshoot%202022_2080.jpg?width=4336&height=2895&name=Krak%C3%B3w%20Hub%20photoshoot%202022_2080.jpg"
  title="Digital acceleration services"
  highlighted="business growth"
  subtitle="Design. Development. Consulting. 15 years and counting."
  buttonText="Estimate project"
  buttonHref="#"
/>
<SecondNavBar navItems={navItems}/>
<IdeationEvaluation
  title="One-stop shop for digital"
  highlight="startups"
  description="We help deliver digital excellence at every stage of the product journey, from early ideation to research, prototyping, testing, launch, and ongoing support. Explore our end-to-end services designed to improve business metrics and deliver delightful digital experiences."
  bg="black"
/>

 <IdeationEvaluation
  title="Ideation and "
  highlight="evaluation"
  description="Ideas can take a while to mature. We’re here to speed up the process. Plan and evaluate the essential features of your product to accomplish your business goals and enjoy tangible results."
  layout="row"
  bg="#25292C"
/>       

<CaseStudies/>

<Footer/>
		</div>
	);
};
export default Services;

import React from 'react';
// import Nav from "../components/Nav.jsx";
import ServiceTop from "../servicePageComponents/ServiceTop.jsx";
import IdeationEvaluation from "../servicePageComponents/IdeationEvaluation.jsx";
import Navbar from '../components/Navbar.jsx';
import SecondNavBar from '../servicePageComponents/secondNavBar.jsx';

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
<IdeationEvaluation />
		</div>
	);
};
export default Services;

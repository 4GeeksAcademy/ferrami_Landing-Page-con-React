import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Container from "./Container.jsx";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Container />
			<Footer />
		</div>
	);
};

export default Home;

import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";

const Home = () => {
	return (
		<div >
			<Head>
				<title>Bugacedemy</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			
				
			

			<Hero/>
		</div>
	);
};

export default Home;

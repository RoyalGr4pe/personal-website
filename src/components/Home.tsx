import React from "react";
import HackingText from "./HackingText";
import ZigZagRoad from "./ZigZagRoad";

const Home = () => {
	return (
		<div className="w-full flex flex-col items-center space-y-10">
			{/* HackingText Section */}
			<HackingText />

			{/* Flow Road Section */}
			<ZigZagRoad />
		</div>
	);
};

export default Home;

import React from 'react';

const About = () => {
	const currentYear = new Date().getFullYear();
	const programmingStart = 2020;
	const programmingTime = currentYear - programmingStart;

	return (
		<div className="text-white p-8 font-semibold mx-auto">
			<h1 className="font-extrabold mb-8 text-center">About</h1>
			<p className="mb-4 leading-relaxed text-gray-300">
				Hi! I’m an aspiring <span className="text-orange-500">Electrical Engineer</span> with a passion for solving complex problems through innovative technology. I’ve been programming for over <span className="text-orange-500">{programmingTime} years</span>, building everything from <span className="text-orange-500">Discord bots</span> and <span className="text-orange-500">web scrapers</span> to full-stack <span className="text-orange-500">Next.js websites</span> and <span className="text-orange-500">Flask applications</span>. My work focuses on crafting efficient, user-friendly solutions — whether it’s automation, monitors, or scalable web development.
			</p>
			<p className="mb-4 leading-relaxed text-gray-300">
				My technical toolkit includes <span className="text-orange-500">Python</span>, <span className="text-orange-500">React/Next.js</span>, <span className="text-orange-500">TypeScript</span>, and database systems like <span className="text-orange-500">Firebase</span>, <span className="text-orange-500">MongoDB</span>, and <span className="text-orange-500">SQL</span>. Beyond coding, I’m deeply fascinated by <span className="text-orange-500">robotics</span>, <span className="text-orange-500">physics</span>, and <span className="text-orange-500">mathematics</span>—fields that inspire my dream of contributing to the growing <span className="text-orange-500">space sector</span>.
			</p>
		</div>
	);
};

export default About;

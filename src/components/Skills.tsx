import React from 'react'

const Skills = () => {
	const currentYear = new Date().getFullYear();

	const webDevelopmentStartYear = 2023;
	const flaskRestAPIsStartYear = 2022;
	const databasesStartYear = 2023;
	const automationStartYear = 2021;
	const dnsManagementStartYear = 2024;
	const microControllersStartYear = 2023;
	const csvStartYear = 2023;
	const stripeStartYear = 2022;
	const webscrapingStartYear = 2021;

	const webDevelopmentSkillYears = currentYear - webDevelopmentStartYear;
	const flaskRestAPIsSkillYears = currentYear - flaskRestAPIsStartYear;
	const databasesSkillYears = currentYear - databasesStartYear;
	const automationSkillYears = currentYear - automationStartYear;
	const dnsManagementSkillYears = currentYear - dnsManagementStartYear;
	const microControllersSkillsYears = currentYear - microControllersStartYear;
	const csvSkillsYears = currentYear - csvStartYear;
	const stripeSkillYears = currentYear - stripeStartYear;
	const webscrapingSkillYears = currentYear - webscrapingStartYear;

	const skills = [
		{
			name: "Web Development",
			experience: `${webDevelopmentSkillYears}+ Years, 3 Projects, React/Next.js`,
		},
		{
			name: "Flask Rest APIs",
			experience: `${flaskRestAPIsSkillYears}+ Years, 2 Projects, JWT Auth`,
		},
		{
			name: "Databases",
			experience: `${databasesSkillYears}+ Years, 3 Projects, Firebase/MongoDB`,
		},
		{
			name: "Automation",
			experience: `${automationSkillYears}+ Years, General Scripting Tasks`,
		},
		{
			name: "DNS Management",
			experience: `${dnsManagementSkillYears}+ Years, Create & Modify DNS Records. e.g. Handling Subdomains & Mail`,
		},
		{
			name: "Ardunio/Raspberry PI",
			experience: `${microControllersSkillsYears}+ Years, Webservers, General Circuit Board Manipulation`,
		},
		{
			name: "CSV Documents",
			experience: `${csvSkillsYears}+ Years, Google Sheets API, Reading & Writing Data In Python`,
		},
		{
			name: "Stripe API",
			experience: `${stripeSkillYears}+ Years, Managing customers, payments. Integration with MongoDB, Discord & Websites`,
		},
		{
			name: "Web Scraping",
			experience: `${webscrapingSkillYears}+ Years, 10+ Projects, Crawlers, Cookie Handling, APIs`,
		}
	];

	return (
		<div className="text-white p-8">
			<h1 className="mb-8 text-center">Skills</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="bg-[#0d1620] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-48"
					>
						<h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
						<p className="text-gray-300 mb-4 font-semibold">{skill.experience}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Skills;

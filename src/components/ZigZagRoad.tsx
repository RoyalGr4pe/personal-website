"use client";

import { useState, useEffect } from "react";

// Define initial colours
const startColours = ['#f97316', '#f67015', '#f46e15', '#f16c14', '#ef6a14', '#ea6513', '#e76312', '#e56112', '#e25e11', '#e05c11', '#dd5a11', '#db5811', '#d85510', '#d65310', '#d3510f', '#d14f0f', '#ce4c0e', '#cc4a0e', '#c9480d', '#c7460d', '#c4430c', '#c2410c', '#c2410c', '#c4430c', '#c7460d', '#c9480d', '#cc4a0e', '#ce4c0e', '#d14f0f', '#d3510f', '#d65310', '#d85510', '#db5811', '#dd5a11', '#e05c11', '#e25e11', '#e56112', '#e76312', '#ea6513', '#ef6a14', '#f16c14', '#f46e15', '#f67015', '#f97316'];


const steps = [
	"Crawlers, Automation",
	"Python, Next.js, TypeScript",
	"Web Development",
	"Firebase, MongoDB",
	"Focused on creating robust, scalable systems",
	""
];

// Logic for dynamic border classes
const getBorderClasses = (index: number) => {
	switch (index) {
		case 0:
			return "border-l-4 border-t-4";
		case 1:
			return "border-r-4 border-t-4";
		case 2:
			return "border-l-4 border-t-4";
		case 3:
			return "border-r-4 border-t-4";
		case 4:
			return "border-l-4 border-t-4";
		case 5:
			return "border-t-4";
		default:
			return "border-l-4 border-t-4";
	}
};

const ZigZagRoad = () => {
	// State to hold the current color positions (initially filled with startColours)
	const [colours, setColours] = useState([startColours]);

	useEffect(() => {
		// Set up an interval to animate the colours' movement
		const interval = setInterval(() => {
			setColours((prevColour) => {
				const newColours = prevColour.map((colour) => {
					// Rotate the colours to simulate movement by shifting last color to the front
					const newColour = [...colour];
					newColour.unshift(newColour.pop()!); // Move the last color to the front
					return newColour;
				});
				return newColours;
			});
		}, 30); // Animate every 30ms

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="max-w-lg mx-auto px-4">
			{steps.map((step, index) => (
				<div
					key={index}
					className={`animated-border relative text-md leading-8 shadow-md
            border-solid border-transparent
            ${getBorderClasses(index)} // Dynamically assigned based on index
          `}
					style={{
						borderImage: `${index % 2 === 0 ? `linear-gradient(to left, ${colours[0].join(', ')}) 1` : `linear-gradient(to right, ${colours[0].join(', ')}) 1`}`,
						transition: "border-image 0.5s ease-in-out",
					}}
				>
					{/* Inner content */}
					{index !== 5 && (
						<div className="relative bg-transparent py-4 px-6 text-gray-300 font-semibold">
							{/* Step Number */}
							<div
								className={`absolute w-8 h-8 rounded-full bg-darkBlue text-white text-center flex items-center justify-center text-sm
											${index % 2 === 0 ? "left-0 -ml-[18px] transform translate-x-full" : "right-0 -mr-[18px] transform -translate-x-full"}`}
								style={{
									top: "50%",
									transform: "translateY(-50%)",
								}}
							>
								{index + 1}
							</div>

							{/* Step Content */}
							<div className={`${index % 2 === 0 ? "text-start" : "text-end"}`}>{step}</div>
						</div>
					)}
				</div>
			))}
		</main>
	);
};

export default ZigZagRoad;

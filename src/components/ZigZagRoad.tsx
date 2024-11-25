import React from "react";

const steps = [
	"Crawlers, Automation",
	"Python, Next.js, TypeScript",
	"Web Development",
	"Firebase, MongoDB",
	"Focused on creating robust, scalable systems"
];

const ZigZagRoad = () => {
	return (
		<main className="max-w-lg mx-auto px-4">
			{steps.map((step, index) => (
				<div
					key={index}
					className={`relative text-md leading-7 shadow-md
						border-solid border-transparent
						${index % 2 === 0 ? "border-l-4 border-y-4" : "border-r-4"} 
						`}
					style={{
						borderImage: "linear-gradient(to right, #f97316, #c2410c) 1",
					}}
				>
					{/* Inner content */}
					<div className="relative bg-transparent py-4 px-6 text-gray-300 font-semibold">
						{/* Step Number */}
						<div
							className={`absolute w-8 h-8 rounded-full bg-gray-800 text-white text-center flex items-center justify-center text-sm 
								${index % 2 === 0 ? "right-full -mr-[14px]" : "left-full -ml-[14px]"}
							`}
						>
							{index + 1}
						</div>

						{/* Step Content */}
						<div className={`${index % 2 === 0 ? 'text-start': 'text-end'}`}>{step}</div>
					</div>
				</div>
			))}
		</main>
	);
};

export default ZigZagRoad;

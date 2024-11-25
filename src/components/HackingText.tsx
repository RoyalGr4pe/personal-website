"use client";

import React, { useEffect, useState } from "react";

const HackingText = () => {
	const [displayText, setDisplayText] = useState<string>("");
	const realText = "Empowering Progress Through Technology";
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/~`";

	const revealTextEffect = () => {
		let iteration = 0;
		let smallCount = 0;
		let currentText = new Array(realText.length).fill(""); // Start with empty string

		const interval = setInterval(() => {
			// Map over the currentText array to generate random letters
			currentText = currentText.map((letter, index) => {
				if (index < iteration) {
					return realText[index]; // Reveal the correct letter at the current index
				}

				// Preserve spaces, randomize all other characters
				if (realText[index] === " ") {
					return " "; // If it's a space in realText, just return a space
				}

				return letters[Math.floor(Math.random() * letters.length)]; // Keep randomizing other letters
			});

			// Update displayText with the current randomized text
			setDisplayText(currentText.join(""));

			// When all letters are revealed, stop the interval
			if (iteration >= realText.length) {
				clearInterval(interval);
			}

			// Increment the iteration to reveal the next letter
			iteration += 1 / (3 + smallCount);
			smallCount += 0.015;
		}, 40); // Speed of randomization (change every 40ms)
	};

	useEffect(() => {
		revealTextEffect(); // Start the effect when the component is mounted
	}, []);

	return (
		<div className="flex justify-center items-center text-white p-8">
			<h1 className={`text-xl font-mono text-center`}>{displayText}</h1>
		</div>
	);
};

export default HackingText;

"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Multiline input component
const MultilineInput = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		if (newValue.length <= 500) {
			setInputValue(newValue);
		}
	};

	return (
		<div className="relative max-w-[26rem]">
			<textarea
				id="project-description"
				value={inputValue}
				onChange={handleChange}
				rows={5}
				className="peer w-full font-semibold rounded-md bg-deepBlue p-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-deepBlue ring-2 focus:shadow-md focus:shadow-orange-500 ring-orange-500 focus:drop-shadow-lg"
				placeholder="Enter your project information here..."
				name="project_description"
			/>
			{/* Character counter */}
			<div className="absolute bottom-[-22px] right-2 text-sm text-gray-500">
				{inputValue.length} / 500
			</div>
		</div>
	);
};

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Send email using EmailJS
		if (form.current) {
			emailjs
				.sendForm(
					"service_bdacr2s", // EmailJS service ID
					"template_aeviutk", // EmailJS template ID
					form.current,
					"gR1-EDqJWp9PDHFvb" // EmailJS public key
				)
				.then(
					(result) => {
						console.log("Email sent successfully:", result.text);
						alert("Your message has been sent successfully!");
						form.current?.reset(); // Reset form after successful submission
					},
					(error) => {
						console.log("Error sending email:", error.text);
						alert("Failed to send your message. Please try again.");
					}
				);
		}
	};

	return (
		<form
			ref={form}
			onSubmit={handleSubmit}
			className="w-full sm:max-w-[26rem] flex flex-col gap-8 text-gray-300"
		>
			<div className="flex flex-col w-full sm:flex-row gap-8">
				{/* First Name */}
				<div className="group sm:w-48 font-semibold">
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						className="peer relative h-10 w-full rounded-md bg-deepBlue px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-deepBlue ring-2 focus:shadow-md focus:shadow-orange-500 ring-orange-500 focus:drop-shadow-lg"
					/>
				</div>

				{/* Last Name */}
				<div className="group sm:w-48 font-semibold">
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						className="peer relative h-10 w-full rounded-md bg-deepBlue px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-deepBlue ring-2 focus:shadow-md focus:shadow-orange-500 ring-orange-500 focus:drop-shadow-lg"
					/>
				</div>
			</div>

			{/* Project Title */}
			<div className="group sm:max-w-[26rem] font-semibold">
				<input
					type="text"
					name="project_title"
					placeholder="Project Title"
					className="peer relative h-10 w-full rounded-md bg-deepBlue px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-deepBlue ring-2 focus:shadow-md focus:shadow-orange-500 ring-orange-500 focus:drop-shadow-lg"
				/>
			</div>

			{/* Project Description */}
			<MultilineInput />

			{/* Email */}
			<div className="relative group sm:max-w-[26rem] font-semibold flex items-center">
				<input
					type="email"
					name="user_email"
					placeholder="Email Address"
					className="peer relative h-10 w-full rounded-md bg-deepBlue pl-12 pr-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-deepBlue ring-2 focus:shadow-md focus:shadow-orange-500 ring-orange-500 focus:drop-shadow-lg"
				/>
				<span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out text-orange-500">mail</span>
				<button className="absolute right-0 h-10 w-16 rounded-r-sm bg-orange-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out">Submit</button>
			</div>
		</form>
	);
};

export default ContactForm;
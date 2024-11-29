"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
	return (
		<div className="text-white p-8 mx-auto">
			<h1 className="font-extrabold mb-8 text-center">Projects</h1>
			<div className="flex flex-col gap-12">
				<ProjectBox
					imageLeft={true}
					title="Flippify"
					description="The ultimate platform for sellers to accelerate their profits. Earn more using our top of the range deal finding bots and tools to automate every step of the way. Track all your sales and get valuable insights in a user friendly clean interface."
					imageSrc={["https://i.imgur.com/QScpVjf.png", "https://i.imgur.com/L8U9PZl.png", "https://i.imgur.com/ShAp15t.png", "https://i.imgur.com/Jse1LIX.png"]}
					projectLink="https:flippify.co.uk?ref=nicks-website"
				/>
			</div>
		</div>
	);
};

interface ProjectBoxProps {
	imageLeft: boolean;
	title: string;
	description: string;
	imageSrc: string[];
	projectLink: string;
}


const ProjectBox: React.FC<ProjectBoxProps> = ({
	imageLeft,
	title,
	description,
	imageSrc,
	projectLink,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Handlers for navigating images
	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
	};

	const handlePrevImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + imageSrc.length) % imageSrc.length
		);
	};

	return (
		<div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6">
			{/* Image Section */}
			{imageLeft && (
				<div className="relative flex justify-center md:justify-start">
					<Images title={title} image={imageSrc[currentImageIndex]} imageSrc={imageSrc} handlePrevImage={handlePrevImage} handleNextImage={handleNextImage} />
				</div>
			)}

			{/* Content Section */}
			<div className="px-2 sm:px-6 md:px-0 text-center md:text-left">
				<h2 className="text-xl font-bold text-orange-500 mb-4">{title}</h2>
				<p className="text-gray-300 mb-4 font-semibold">{description}</p>
				<Link
					href={projectLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-orange-500 hover:text-orange-600 group relative"
				>
					<span>View Project</span>
					<span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
				</Link>
			</div>

			{/* Image Section for imageRight */}
			{!imageLeft && (
				<div className="relative flex justify-center md:justify-end">
					<Images title={title} image={imageSrc[currentImageIndex]} imageSrc={imageSrc} handlePrevImage={handlePrevImage} handleNextImage={handleNextImage} />
				</div>
			)}
		</div>
	);
};



interface ImagesProps {
	title: string;
	image: string
	imageSrc: string[],
	handlePrevImage: () => void;
	handleNextImage: () => void;
}


const Images: React.FC<ImagesProps> = ({
	title,
	image,
	imageSrc,
	handlePrevImage,
	handleNextImage,
}) => {
	return (
		<div className="relative group opacity-75 hover:opacity-100 transition-opacity duration-200">
			{/* Previous Arrow */}
			{imageSrc.length > 1 && (
				<span
					className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					onClick={handlePrevImage}
				>
					<IoIosArrowBack />
				</span>
			)}

			{/* Image */}
			<Image
				src={image}
				alt={`${title} image`}
				className="rounded-lg shadow-lg max-w-xs object-cover h-72 w-72"
				width={500}
				height={500}
			/>

			{/* Next Arrow */}
			{imageSrc.length > 1 && (
				<span
					className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					onClick={handleNextImage}
				>
					<IoIosArrowForward />
				</span>
			)}
		</div>
	);
};


export default Projects;

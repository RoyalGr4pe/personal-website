import type { Metadata } from "next";

import { Lato } from 'next/font/google';

const lato = Lato({ weight: '900', style: 'normal', subsets: ['latin'] });

import '../styles/globals.css';


export const metadata: Metadata = {
	title: "Portfolio",
	description: "Welcome to my online portfolio, showcasing innovative projects, skills, and insights into the world of technology and design. Explore my work, passions, and journey in the digital space.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=help,mail" />
			</head>
			<body
				className={`${lato.className} antialiased bg-deepBlue`}
			>
				{children}
			</body>
		</html>
	);
}

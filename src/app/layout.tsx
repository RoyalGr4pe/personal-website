import type { Metadata } from "next";

import { Lato } from 'next/font/google';

const lato = Lato({ weight: '900', style: 'normal', subsets: ['latin'] });

import '../styles/globals.css';


export const metadata: Metadata = {
	title: "Nick's Portfolio",
	description: "Welcome to my online portfolio, showcasing innovative projects, skills, and insights into the world of technology and design. Explore my work, passions, and journey in the digital space.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lato.className} antialiased bg-deepBlue`}
			>
				{children}
			</body>
		</html>
	);
}

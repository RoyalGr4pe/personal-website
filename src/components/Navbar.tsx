import React from 'react';
import Link from 'next/link';

interface NavbarItemProps {
	text: string;
	href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ text, href }) => {
	return (
	  <div className="text-sm relative group">
		<Link href={`#${href}`}>
		  <span className="transition-colors duration-300 ease-in-out text-gray-300 hover:text-white">
			{text}
		  </span>
		  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-orange-700 to-orange-500 scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
		</Link>
	  </div>
	);
  };


const Navbar = () => {
	return (
		<nav className="fixed left-0 top-0 w-full px-6 py-4 h-14 bg-deepBlue flex justify-center items-center gap-5 sm:gap-8">
			<NavbarItem text={"Home"} href={"home"} />
			<NavbarItem text={"About"} href={"about"} />
			<NavbarItem text={"Skills"} href={"skills"} />
			<NavbarItem text={"Projects"} href={"projects"} />
			<NavbarItem text={"Contact"} href={"contact"} />
		</nav>
	);
};


export default Navbar;
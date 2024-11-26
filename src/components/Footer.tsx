import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full text-center flex flex-col p-6 sm:flex-row font-semibold text-gray-500 gap-2 sm:gap-0">
			<div className="w-full flex justify-center sm:justify-start select-none">
				<p>© {new Date().getFullYear()} Nick</p>
			</div>
			<div className="w-full flex justify-center sm:justify-end gap-6">
				<FooterLink
					href="https://github.com/RoyalGr4pe"
					icon="/footer/github.svg"
					text="Github"
				/>
				<FooterLink
					href="https://www.linkedin.com/in/nicholas-james-131906247/"
					icon="/footer/linkedin.svg"
					text="LinkedIn"
				/>
			</div>
		</footer>
	)
}

export default Footer


const FooterLink = ({ href, icon, text }: { href: string; icon: string; text: string; }) => (
	<Link
		className="flex items-center gap-2 transition-all"
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Image aria-hidden src={icon} alt="" width={20} height={20} />
		{text}
	</Link>
);
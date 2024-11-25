import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="border-0 border-red-500 w-full text-center flex flex-col p-6 sm:flex-row font-semibold">
			<div className="w-full flex justify-center sm:justify-start">
				<p className="text-gray-500">© {new Date().getFullYear()} Nick</p>
			</div>
			<div className="w-full flex justify-center sm:justify-end gap-6">
				<FooterLink
					href="https://github.com/RoyalGr4pe"
					icon="/github-mark.svg"
					text="Github"
				/>
			</div>
		</footer>
	)
}

export default Footer


const FooterLink = ({ href, icon, text }: { href: string; icon: string; text: string; }) => (
	<Link
		className="flex items-center gap-2 text-gray-400 hover:text-white transition-all"
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Image aria-hidden src={icon} alt="" width={20} height={20} />
		{text}
	</Link>
);
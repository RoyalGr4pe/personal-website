import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="mt-5 border-0 border-red-500 w-full text-center flex flex-row p-6 sm:flex-col font-semibold">
			<div className="w-full sm:w-1/2 flex sm:items-start">
				<p className="text-gray-500">© {new Date().getFullYear()} Nick</p>
			</div>
			<div className="w-full sm:w-1/2 flex justify-end gap-6">
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
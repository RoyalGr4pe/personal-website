import Navbar from "@/components/Navbar"; 
import Home from "@/components/Home";
import Globe from "@/components/Globe";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function MainPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-between text-white font-sans">
			{/* Header */}
			<header className="z-20 w-full">
				<Navbar />
			</header>

			{/* Main Content */}
			<main className="mt-12 z-10 flex flex-col items-center w-full flex-1 gap-6">
				{/* Home */}
				<section id="home" className="border-0 border-green-500 w-full scroll-mt-20">
					<Home />
				</section>
				{/* Globe */}
				<section className="border-0 border-green-500 w-full max-w-4xl relative">
					<Globe />
				</section>
				<section id="about" className="border-0 border-green-500 px-6 flex items-center justify-center w-full max-w-4xl relative">
					<About />
				</section>
				<section id="skills" className="border-0 border-green-500 px-6 flex items-center justify-center w-full max-w-4xl relative">
					<Skills />
				</section>
				<section id="projects" className="border-0 border-green-500 px-6 flex items-center justify-center w-full max-w-4xl relative">
					<Projects />
				</section>
				<section id="contact" className="border-0 border-green-500 px-6 flex items-center justify-center w-full max-w-4xl relative">
					<Contact />
				</section>
			</main>
			
			{/* Footer */}
			<Footer />
		</div>
	);
}

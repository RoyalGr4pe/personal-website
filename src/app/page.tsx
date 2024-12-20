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
			<main className="h-full mt-14 z-10 flex flex-col gap-24 items-center w-full flex-1 mb-[400px] md:mb-0">
				{/* Home and Globe sections */}
				<div id="home" className="relative w-full grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-none scroll-mt-20 mb-24 sm:mb-0">
					<section className="border-0 border-green-500 sm:col-span-6 z-20 w-full px-6 sm:px-0 sm:pt-6">
						<Home />
					</section>

					{/* Ensure absolute positioning works properly with a height */}
					<section className="border-0 border-red-500 sm:col-span-6 absolute sm:static z-10 w-full h-[500px] top-0 left-0">
						<Globe />
					</section>
				</div>

				{/* About, Skills, Projects, and Contact sections */}
				<section id="about" className="border-0 flex items-center justify-center max-w-5xl scroll-mt-20">
					<About />
				</section>

				<section id="skills" className="border-0 flex items-center justify-center max-w-5xl scroll-mt-20">
					<Skills />
				</section>

				<section id="projects" className="border-0 flex items-center justify-center max-w-5xl scroll-mt-20">
					<Projects />
				</section>

				<section id="contact" className="border-0 mb-16 px-6 2xl:px-32 flex items-center justify-center w-full h-full scroll-mt-20">
					<Contact />
				</section>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

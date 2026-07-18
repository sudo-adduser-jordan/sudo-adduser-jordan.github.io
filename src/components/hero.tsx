import { personal } from "@/lib/data"
import SiriOrb from "./smoothui/siri-orb"

export default function Hero() {
	return (
		<section id="home" className="min-h-[70vh] lg:min-h-screen flex flex-col items-center justify-center gap-6 text-center relative">

			<SiriOrb />
			{/* <div className="flex justify-center items-center p-4">
				<div className="w-4 h-4 rounded-full bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
			</div> */}
			{/* 
			<div className="sm:hidden">
				<div className="relative w-full h-64 overflow-hidden flex items-center justify-center sm:hidden">
					<div className="w-72 h-72 absolute rounded-full blur-2xl opacity-70 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 animate-pulse" style={{ animationDuration: "4s", left: "10%", top: "10%" }} />
					<div className="w-72 h-72 absolute rounded-full blur-2xl opacity-70 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ animationDuration: "5s", right: "10%", bottom: "10%" }} />
					<div className="w-60 h-60 absolute rounded-full blur-2xl opacity-70 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 animate-pulse" style={{ animationDuration: "6s", left: "30%", top: "5%" }} />
					<div className="w-56 h-56 absolute rounded-full blur-2xl opacity-70 bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 animate-pulse" style={{ animationDuration: "7s", right: "20%", bottom: "20%" }} />
					<div className="absolute inset-0 z-0" />
				</div>
			</div> */}

			<h1 className="hidden sm:block text-2xl font-medium text-neutral-800 dark:text-neutral-100">
				<span>{personal.hero.line1}</span>
				<br />
				<span>{personal.hero.line2}</span>
			</h1>

			<div className="sm:hidden text-2xl font-medium text-neutral-800 dark:text-neutral-100">
				<span>{personal.hero.line1}</span>
				<br />
				<span>{personal.hero.line2}</span>
			</div>

			<div className="relative">
				<a
					href="#projects"
					className="inline-block text-xs tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300"
				>
					{personal.hero.cta}
				</a>
			</div>
		</section>
	)
}

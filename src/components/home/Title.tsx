import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Title() {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
			<h1 className="mb-8 font-bold text-5xl leading-[1.1] tracking-tight lg:text-7xl">
				Innovative <span className="text-page">Software</span>
				<br />
				Solutions <span className="text-page">Built to Scale</span>
			</h1>
			<p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground leading-relaxed lg:text-xl">
				We create cutting-edge software solutions that help businesses transform, scale, and achieve their digital ambitions with precision
				and excellence.
			</p>
			<div className="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-page px-9 py-4 font-bold text-white shadow-lg shadow-page/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-page/30 hover:shadow-xl active:scale-[0.98] sm:w-auto"
				>
					{/* Shimmer Accent */}
					<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

					<span className="relative flex items-center text-base">
						Get Started
						<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
					</span>
				</a>
				<a
					href="/projects"
					className="flex items-center justify-center rounded-full border-2 border-border bg-card/50 px-10 py-4 font-bold backdrop-blur-sm transition-all hover:border-page/50 hover:bg-card"
				>
					View Our Work
				</a>
			</div>
		</motion.div>
	)
}

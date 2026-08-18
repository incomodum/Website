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
			<p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground leading-relaxed lg:text-xl">
				We create cutting-edge software solutions that help businesses transform, scale, and achieve their digital ambitions with precision
				and excellence.
			</p>
			<div className="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					className="group relative flex transform-gpu items-center justify-center rounded-full bg-page px-10 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(var(--page-rgb),0.3)]"
				>
					Get Started
					<ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
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

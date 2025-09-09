import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Placeholder from "./Placeholder"

export default function Mission() {
	return (
		<section aria-labelledby="heading-mission" className="py-32">
			<div className="grid gap-12 lg:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center"
				>
					<h2 id="heading-mission" className="mb-6 font-bold text-4xl lg:text-5xl">
						Our <span className="text-page">Mission</span>
					</h2>
					<p className="mb-8 text-foreground/60 text-lg">
						We're on a mission to continuously enhance and improve technology, delivering innovative software solutions that drive growth
						and success. We focus on optimizing what can be improved, creating value through collaboration, creativity, and excellence.
					</p>
					<div>
						<a
							href="/mission"
							className="group inline-flex items-center rounded-full bg-page px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-page/20"
						>
							<span className="hidden md:block">Learn About Our Mission</span>
							<span className="md:hidden">Learn More</span>
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="relative aspect-square lg:aspect-auto"
				>
					<Placeholder className="aspect-square w-full overflow-clip rounded-3xl lg:max-w-[600px]" />
					<div className="-right-4 -top-4 absolute h-48 w-48 rotate-12 rounded-3xl bg-page/10" />
					<div className="-bottom-4 -left-4 -rotate-12 absolute h-48 w-48 rounded-3xl bg-[#1a1b50]/10 dark:bg-blue-600/10" />
				</motion.div>
			</div>
		</section>
	)
}

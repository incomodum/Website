import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Contact() {
	return (
		<div className="relative isolate w-full overflow-clip pt-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="z-10 mx-auto mb-16 rounded-3xl border bg-card/50 p-8 text-center lg:p-12"
			>
				<h2 className="mb-4 font-bold text-3xl">
					Ready to start your <span className="text-page">project</span>?
				</h2>
				<p className="mb-8 text-foreground/60">Let's discuss how we can help bring your ideas to life.</p>
				<a
					href="/contact"
					className="group inline-flex items-center rounded-full bg-page px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-page/20"
				>
					Get in Touch
					<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
				</a>
			</motion.div>
		</div>
	)
}

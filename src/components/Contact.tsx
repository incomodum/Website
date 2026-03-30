import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Contact() {
	return (
		<section className="w-full py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true }}
				className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-card/30 p-8 text-center backdrop-blur-sm md:p-12"
			>
				<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl">
					Ready to bring your <span className="text-page">vision</span> to life?
				</h2>

				<p className="mx-auto mb-10 max-w-md text-base text-muted-foreground">
					Let’s discuss your goals and build something that stands out. Simple, effective, and built for growth.
				</p>

				<div className="flex justify-center">
					<a
						href="/contact"
						className="group relative flex transform-gpu items-center justify-center overflow-hidden rounded-full bg-page px-10 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-page/20 hover:shadow-xl"
					>
						{/* Shimmer Effect on Button */}
						<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

						<span className="relative flex items-center">
							Get in Touch
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
						</span>
					</a>
				</div>

				{/* Subtle Glow Accents (Very faint) */}
				<div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-page/5 blur-3xl" />
				<div className="absolute -right-12 -bottom-12 h-24 w-24 rounded-full bg-page/5 blur-3xl" />
			</motion.div>
		</section>
	)
}

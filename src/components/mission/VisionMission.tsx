import { Lightbulb, Target } from "lucide-react"
import { motion } from "motion/react"

export default function VisionMission() {
	return (
		<section className="relative overflow-hidden py-20 lg:py-28">
			{/* Ambient Background Glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-page/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Vision Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						viewport={{ once: true }}
						whileHover={{ y: -6 }}
						className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-page/40 hover:bg-card hover:shadow-2xl hover:shadow-page/10 sm:p-10 lg:p-12"
					>
						{/* Top Edge Highlight Line */}
						<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/0 to-transparent transition-all duration-500 group-hover:via-page/40" />

						{/* Corner Background Accent Blob */}
						<div className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full bg-page/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-page/20" />

						<div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-page/10 text-page transition-all duration-300 group-hover:bg-page group-hover:text-white group-hover:shadow-lg group-hover:shadow-page/25 [&_svg]:size-7">
							<Target />
						</div>

						<h3 className="mb-4 font-bold text-3xl tracking-tight transition-colors group-hover:text-page">
							Our <span className="text-page">Vision</span>
						</h3>

						<p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/90 sm:text-lg">
							To be the leading force in digital innovation, creating technology solutions that shape the future of businesses
							worldwide. We envision a world where every organization can harness the full potential of technology.
						</p>

						{/* Animated Bottom Progress Line */}
						<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 ease-out group-hover:w-full" />
					</motion.div>

					{/* Mission Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
						viewport={{ once: true }}
						whileHover={{ y: -6 }}
						className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-page/40 hover:bg-card hover:shadow-2xl hover:shadow-page/10 sm:p-10 lg:p-12"
					>
						{/* Top Edge Highlight Line */}
						<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/0 to-transparent transition-all duration-500 group-hover:via-page/40" />

						{/* Corner Background Accent Blob */}
						<div className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full bg-page/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-page/20" />

						<div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-page/10 text-page transition-all duration-300 group-hover:bg-page group-hover:text-white group-hover:shadow-lg group-hover:shadow-page/25 [&_svg]:size-7">
							<Lightbulb />
						</div>

						<h3 className="mb-4 font-bold text-3xl tracking-tight transition-colors group-hover:text-page">
							Our <span className="text-page">Mission</span>
						</h3>

						<p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/90 sm:text-lg">
							To deliver exceptional software solutions that empower businesses to thrive in the digital age. We combine technical
							excellence with innovative thinking to create solutions that drive real business value.
						</p>

						{/* Animated Bottom Progress Line */}
						<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 ease-out group-hover:w-full" />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

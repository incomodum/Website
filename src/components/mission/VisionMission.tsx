import { Lightbulb, Target } from "lucide-react"
import { motion } from "motion/react"

export default function VisionMission() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Vision Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-card/30 p-10 backdrop-blur-sm transition-all hover:border-page/20 lg:p-14"
					>
						<div className="mb-8 inline-flex rounded-2xl bg-page/10 p-4 text-page transition-colors group-hover:bg-page group-hover:text-white">
							<Target className="size-8" />
						</div>
						<h2 className="mb-5 font-bold text-3xl tracking-tight">
							Our <span className="text-page">Vision</span>
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
							To be the leading force in digital innovation, creating technology solutions that shape the future of businesses
							worldwide. We envision a world where every organization can harness the full potential of technology.
						</p>
						<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 group-hover:w-full" />
					</motion.div>

					{/* Mission Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-card/30 p-10 backdrop-blur-sm transition-all hover:border-page/20 lg:p-14"
					>
						<div className="mb-8 inline-flex rounded-2xl bg-page/10 p-4 text-page transition-colors group-hover:bg-page group-hover:text-white">
							<Lightbulb className="size-8" />
						</div>
						<h2 className="mb-5 font-bold text-3xl tracking-tight">
							Our <span className="text-page">Mission</span>
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
							To deliver exceptional software solutions that empower businesses to thrive in the digital age. We combine technical
							excellence with innovative thinking to create solutions that drive real business value.
						</p>
						<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 group-hover:w-full" />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

import { Lightbulb, Target } from "lucide-react"
import { motion } from "motion/react"

export default function VisionMission() {
	return (
		<section className="px-8 py-16 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="rounded-3xl bg-card p-8 lg:p-12"
					>
						<div className="mb-6 inline-block rounded-2xl bg-page/10 p-4 text-page">
							<Target className="size-8" />
						</div>
						<h2 className="mb-4 font-bold text-2xl">Our Vision</h2>
						<p className="text-foreground/60">
							To be the leading force in digital innovation, creating technology solutions that shape the future of businesses
							worldwide. We envision a world where every organization can harness the full potential of technology to achieve their
							goals.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="rounded-3xl bg-card p-8 lg:p-12"
					>
						<div className="mb-6 inline-block rounded-2xl bg-page/10 p-4 text-page">
							<Lightbulb className="size-8" />
						</div>
						<h2 className="mb-4 font-bold text-2xl">Our Mission</h2>
						<p className="text-foreground/60">
							To deliver exceptional software solutions that empower businesses to thrive in the digital age. We combine technical
							excellence with innovative thinking to create solutions that drive real business value and lasting impact.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

import { ArrowRight, Sparkles, Target, Users } from "lucide-react"
import { motion } from "motion/react"

export default function Mission() {
	return (
		<section aria-labelledby="heading-mission" className="py-24">
			<div className="grid items-center gap-16 lg:grid-cols-2">
				<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
					<h2 id="heading-mission" className="font-bold text-4xl tracking-tighter lg:text-6xl">
						Our <span className="text-page">Mission</span>
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
						We're on a mission to continuously enhance technology, delivering innovative software solutions that drive growth. We focus on
						optimizing what can be improved, creating value through collaboration and excellence.
					</p>

					<ul className="space-y-4">
						{[
							{ icon: <Target className="size-5" />, text: "Precision Engineering" },
							{ icon: <Sparkles className="size-5" />, text: "Innovative Problem Solving" },
							{ icon: <Users className="size-5" />, text: "Collaborative Growth" }
						].map((item, i) => (
							<motion.li
								key={item.text}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.1 }}
								className="flex items-center gap-3 font-semibold"
							>
								<div className="text-page">{item.icon}</div>
								{item.text}
							</motion.li>
						))}
					</ul>

					<a
						href="/mission"
						className="group inline-flex transform-gpu items-center rounded-full bg-page px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
					>
						Learn Our Story
						<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
				</motion.div>

				{/* Visual Mission Replacement */}
				<div className="relative flex aspect-square items-center justify-center lg:h-125">
					<div className="absolute inset-0 rounded-full bg-page/5 blur-[100px]" />

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						className="relative z-10 flex aspect-square w-full max-w-100 items-center justify-center rounded-[3rem] border border-border bg-card shadow-2xl"
					>
						{/* Floating elements inside the mission "box" */}
						<motion.div
							animate={{ y: [0, -20, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="rounded-3xl bg-page p-8 text-white shadow-2xl shadow-page/40"
						>
							<Sparkles className="size-16" />
						</motion.div>

						{/* Orbiting Ring */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
							className="absolute inset-12 rounded-full border-2 border-page/20 border-dashed"
						/>
					</motion.div>

					{/* Background Decorative Accents */}
					<div className="absolute -top-4 -right-4 h-48 w-48 rotate-12 rounded-[2.5rem] bg-page/10" />
					<div className="absolute -bottom-4 -left-4 h-48 w-48 -rotate-12 rounded-[2.5rem] bg-blue-600/10" />
				</div>
			</div>
		</section>
	)
}

import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { motion } from "motion/react"

const values = [
	{
		icon: <Heart />,
		title: "Excellence",
		description: "We strive for excellence in everything we do, delivering the highest quality solutions."
	},
	{
		icon: <Users />,
		title: "Collaboration",
		description: "We believe in the power of teamwork and partnership with our clients."
	},
	{
		icon: <Lightbulb />,
		title: "Innovation",
		description: "We embrace new technologies and creative solutions to solve complex problems."
	},
	{
		icon: <Target />,
		title: "Impact",
		description: "We measure our success by the positive impact we create for our clients."
	}
]

export default function CoreValues() {
	return (
		<section className="relative overflow-hidden py-20 lg:py-28">
			{/* Ambient Background Glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-page/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mx-auto mb-16 max-w-3xl text-center"
				>
					<h2 className="text-balance font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
						Our Core <span className="text-page">Values</span>
					</h2>

					<p className="mt-4 text-balance text-muted-foreground text-sm sm:text-base">
						These principles guide everything we do and shape how we work with our clients and each other.
					</p>
				</motion.div>

				{/* Cards Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
				>
					{values.map((value) => (
						<motion.div
							key={value.title}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
							}}
							whileHover={{ y: -6 }}
							className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-page/40 hover:bg-card hover:shadow-2xl hover:shadow-page/10"
						>
							{/* Top Edge Highlight Line */}
							<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/0 to-transparent transition-all duration-500 group-hover:via-page/40" />

							{/* Corner Background Accent Blob */}
							<div className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-page/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-page/20" />

							{/* Icon Header */}
							<div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-page/10 text-page transition-all duration-300 group-hover:bg-page group-hover:text-white group-hover:shadow-lg group-hover:shadow-page/25 [&_svg]:size-6">
								{value.icon}
							</div>

							<h3 className="mb-3 font-bold text-xl tracking-tight transition-colors group-hover:text-page">{value.title}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed transition-colors group-hover:text-foreground/80">
								{value.description}
							</p>

							{/* Animated Bottom Line */}
							<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 ease-out group-hover:w-full" />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

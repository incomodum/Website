import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { motion } from "motion/react"

const values = [
	{
		icon: <Heart className="size-6" />,
		title: "Excellence",
		description: "We strive for excellence in everything we do, delivering the highest quality solutions."
	},
	{
		icon: <Users className="size-6" />,
		title: "Collaboration",
		description: "We believe in the power of teamwork and partnership with our clients."
	},
	{
		icon: <Lightbulb className="size-6" />,
		title: "Innovation",
		description: "We embrace new technologies and creative solutions to solve complex problems."
	},
	{
		icon: <Target className="size-6" />,
		title: "Impact",
		description: "We measure our success by the positive impact we create for our clients."
	}
]

export default function CoreValues() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mx-auto mb-16 max-w-3xl text-center"
				>
					<h2 className="mb-6 font-bold text-4xl tracking-tight lg:text-5xl">
						Our Core <span className="text-page">Values</span>
					</h2>
					<p className="text-lg text-muted-foreground">
						These principles guide everything we do and shape how we work with our clients and each other.
					</p>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((value, index) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative flex transform-gpu flex-col rounded-[2.5rem] border border-white/5 bg-card p-8 transition-all hover:-translate-y-2 hover:border-page/20 hover:shadow-2xl hover:shadow-page/5"
						>
							<div className="mb-6 inline-flex w-fit rounded-2xl bg-page/10 p-4 text-page transition-colors group-hover:bg-page group-hover:text-white">
								{value.icon}
							</div>
							<h3 className="mb-3 font-bold text-xl tracking-tight">{value.title}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed transition-colors group-hover:text-foreground/80">
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

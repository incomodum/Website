import { Heart, Lightbulb, Target, Users } from "lucide-react"
import { motion } from "motion/react"

export default function CoreValues() {
	return (
		<section className="px-8 py-16 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-3xl md:text-center">
					<h2 className="mb-6 font-bold text-3xl lg:text-4xl">
						Our Core <span className="text-page">Values</span>
					</h2>
					<p className="mb-12 text-foreground/60">
						These principles guide everything we do and shape how we work with our clients and each other.
					</p>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((value, index) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="rounded-3xl bg-card p-6 md:text-center"
						>
							<div className="mx-auto mb-4 inline-block rounded-2xl bg-page/10 p-4 text-page">{value.icon}</div>
							<h3 className="mb-2 font-bold text-xl">{value.title}</h3>
							<p className="text-foreground/60">{value.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

const values = [
	{
		icon: <Heart className="h-8 w-8" />,
		title: "Excellence",
		description: "We strive for excellence in everything we do, delivering the highest quality solutions."
	},
	{
		icon: <Users className="h-8 w-8" />,
		title: "Collaboration",
		description: "We believe in the power of teamwork and partnership with our clients."
	},
	{
		icon: <Lightbulb className="h-8 w-8" />,
		title: "Innovation",
		description: "We embrace new technologies and creative solutions to solve complex problems."
	},
	{
		icon: <Target className="h-8 w-8" />,
		title: "Impact",
		description: "We measure our success by the positive impact we create for our clients."
	}
]

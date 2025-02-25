import projects from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Projects() {
	return (
		<div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
			{projects.slice(0, 2).map((project, index) => (
				<motion.div
					key={project.slug}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: index * 0.1 }}
					viewport={{ once: true }}
					className="group relative overflow-hidden rounded-3xl bg-white"
				>
					<div className="aspect-[16/9] overflow-hidden">
						<img
							src={project.image || "/placeholder.svg"}
							alt={project.title}
							width={800}
							height={450}
							className="object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div className="p-8">
						<h3 className="mb-4 font-bold text-xl">{project.title}</h3>
						<p className="mb-6 text-gray-600">{project.description}</p>
						<a href={`/projects/${project.slug}`} className="inline-flex items-center text-[#ff7171]">
							Learn More
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</motion.div>
			))}
		</div>
	)
}

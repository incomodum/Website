import { ArrowRight } from "lucide-react"
import { type MotionStyle, motion } from "motion/react"
import projects from "@/lib/projects"

export default function Projects() {
	return (
		<div role="list" className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
			{projects.slice(0, 2).map((project, index) => (
				<motion.a
					key={project.slug}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: index * 0.1 }}
					viewport={{ once: true }}
					href={`/projects/${project.slug}`}
					aria-labelledby={`project-title-${index}`}
					style={project.color ? ({ "--page-color": `${project.color}` } as MotionStyle) : {}}
					className="group relative overflow-hidden rounded-3xl bg-card transition-shadow hover:shadow-xl"
				>
					<div className="overflow-hidden">
						<img
							src={project.image ? `/assets/projects/${project.image}-og.png` : "/placeholder.svg"}
							alt={project.title}
							width={1280}
							height={640}
							className="flex object-cover transition-transform duration-500 group-hover:scale-105 dark:hidden"
						/>
						<img
							src={project.image ? `/assets/projects/${project.image}-dark-og.png` : "/placeholder.svg"}
							alt={project.title}
							width={1280}
							height={640}
							className="hidden object-cover transition-transform duration-500 group-hover:scale-105 dark:flex"
						/>
					</div>
					<div className="p-8">
						<h3 id={`project-title-${index}`} className="mb-4 font-bold text-xl">
							{project.title}
						</h3>
						<p className="mb-6 text-foreground/60">{project.description}</p>
						<p className="inline-flex items-center text-page">
							Learn More
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</p>
					</div>
				</motion.a>
			))}
		</div>
	)
}

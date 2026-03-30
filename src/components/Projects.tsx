import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import projects from "@/lib/projects"
import { Badge } from "./ui/badge"

export default function Projects() {
	return (
		<div role="list" className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-16">
			{projects.slice(0, 2).map((project, index) => (
				<motion.div
					key={project.slug}
					initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: index * 0.1 }}
					viewport={{ once: true }}
					className="h-full"
				>
					<a
						href={`/projects/${project.slug}`}
						className="group flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-transparent bg-card transition-all duration-300 ease-out hover:border-page/20 hover:shadow-2xl hover:shadow-page/10"
					>
						{/* Image Container with stabilized hover */}
						<div className="relative overflow-hidden bg-muted">
							<img
								src={project.image ? `/assets/projects/${project.image}-og.png` : "/placeholder.svg"}
								alt={project.title}
								width={1280}
								height={640}
								className="backface-hidden flex h-fit w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-105 dark:hidden"
							/>
							<img
								src={project.image ? `/assets/projects/${project.image}-dark-og.png` : "/placeholder.svg"}
								alt={project.title}
								width={1280}
								height={640}
								className="backface-hidden hidden h-fit w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-105 dark:flex"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-card/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</div>

						{/* Content Section */}
						<div className="flex grow flex-col p-8">
							<div className="mb-4 flex flex-wrap gap-2">
								{project.technologies?.slice(0, 3).map((tech) => (
									<Badge
										key={tech}
										variant="secondary"
										className="border-none bg-page/10 text-page transition-colors hover:bg-page/20"
									>
										{tech}
									</Badge>
								))}
							</div>

							<h3 className="mb-3 font-bold text-2xl tracking-tight transition-colors group-hover:text-page">{project.title}</h3>

							<p className="mb-6 line-clamp-2 text-foreground/60 text-sm leading-relaxed">{project.description}</p>

							<div className="mt-auto flex items-center justify-between">
								<span className="inline-flex items-center font-semibold text-page">
									Learn More
									<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
								</span>

								{project.category && (
									<span className="font-medium text-[10px] text-muted-foreground/40 uppercase">{project.category}</span>
								)}
							</div>
						</div>
					</a>
				</motion.div>
			))}
		</div>
	)
}

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import projects from "@/lib/projects"
import { ProjectCard } from "../projects/ProjectsList"

export default function Projects() {
	const featuredProjects = projects.slice(0, 2)

	return (
		<section className="mx-auto max-w-7xl py-20" aria-labelledby="heading-featured-projects">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
			>
				{/* Title & Subtitle */}
				<div className="space-y-3">
					<h2 id="heading-featured-projects" className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
						Featured <span className="text-page">Projects</span>
					</h2>

					<p className="max-w-md text-muted-foreground text-sm sm:text-base">
						A highlighted selection of web applications, mobile platforms, and digital experiences we've crafted.
					</p>
				</div>

				{/* Gallery Link CTA */}
				<a
					href="/projects"
					className="group relative inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-5 py-2.5 font-semibold text-foreground text-sm backdrop-blur-md transition-all duration-300 hover:border-page/40 hover:bg-page/10 hover:text-page hover:shadow-lg hover:shadow-page/10 active:scale-95"
				>
					<span>View full gallery</span>
					<ArrowRight className="h-4 w-4 text-page transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</motion.div>

			{/* Project Cards Grid */}
			<div role="list" className="grid gap-8 md:grid-cols-2">
				{featuredProjects.map((project, index) => (
					<ProjectCard project={project} key={project.id} index={index} />
				))}
			</div>
		</section>
	)
}

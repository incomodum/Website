import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import projects from "@/lib/projects"
import { ProjectCard } from "../projects/ProjectsList"

export default function Projects() {
	const featuredProjects = projects.slice(0, 2)

	return (
		<section className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="heading-featured-projects">
			{/* Ambient Background Glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-page/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
				>
					{/* Title & Subtitle */}
					<div className="space-y-3">
						<h2 id="heading-featured-projects" className="text-balance font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
							Featured <span className="text-page">Projects</span>
						</h2>

						<p className="text-balance text-muted-foreground text-sm sm:text-base">
							A highlighted selection of web applications, mobile platforms, and digital experiences we've crafted.
						</p>
					</div>

					{/* Gallery Link CTA */}
					<a
						href="/projects"
						className="group relative flex w-full min-w-fit items-center justify-center gap-2 rounded-full border border-border/40 bg-card/40 px-5 py-2.5 font-semibold text-foreground text-sm backdrop-blur-md transition-all duration-300 hover:border-page/40 hover:bg-page/10 hover:text-page hover:shadow-lg hover:shadow-page/10 active:scale-95 md:w-fit"
					>
						<span>View full gallery</span>
						<ArrowRight className="size-4 text-page transition-transform duration-300 group-hover:translate-x-1" />
					</a>
				</motion.div>

				{/* Project Cards Grid */}
				<div role="list" className="grid gap-8 md:grid-cols-2">
					{featuredProjects.map((project, index) => (
						<ProjectCard project={project} key={project.id} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

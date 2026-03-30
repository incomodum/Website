import { ArrowRight, Inbox, Search } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import projects from "@/lib/projects"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const categories = [
	{ label: "All Projects", value: "all" },
	{ label: "Web Development", value: "web" },
	{ label: "Mobile Apps", value: "mobile" },
	{ label: "UI/UX Design", value: "design" },
	{ label: "Hackathon", value: "hackathon" }
]

export default function ProjectsList() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all")
	const [searchQuery, setSearchQuery] = useState("")

	const filteredProjects = projects.filter((project) => {
		const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
		const matchesSearch =
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase())
		return matchesCategory && matchesSearch
	})

	return (
		<div className="min-h-screen py-16 lg:py-24">
			{/* Header & Filters */}
			<section className="mx-auto mb-12 max-w-7xl">
				<div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="space-y-4">
						<h2 className="font-bold text-3xl lg:text-4xl">
							Featured <span className="text-page">Projects</span>
						</h2>
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<Button
									key={category.value}
									variant="ghost"
									className={`rounded-full px-6 transition-all ${
										selectedCategory === category.value
											? "bg-page text-white shadow-lg shadow-page/20 hover:bg-page/90"
											: "bg-card hover:bg-page/10 hover:text-page"
									}`}
									onClick={() => setSelectedCategory(category.value)}
								>
									{category.label}
								</Button>
							))}
						</div>
					</div>

					<div className="group relative">
						<Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-page" />
						<Input
							placeholder="Search by name or tech..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="h-12 w-full rounded-2xl border-none bg-card pr-4 pl-11 shadow-sm focus-visible:ring-2 focus-visible:ring-page md:w-87.5"
						/>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="mx-auto max-w-7xl">
				<motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</AnimatePresence>
				</motion.div>

				{/* Empty State */}
				<AnimatePresence>
					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							className="flex flex-col items-center justify-center py-32 text-center"
						>
							<div className="mb-4 rounded-full bg-card p-6 text-muted-foreground">
								<Inbox className="h-10 w-10" />
							</div>
							<h3 className="font-semibold text-xl">No projects found</h3>
							<p className="text-muted-foreground">Try adjusting your filters or search term.</p>
							<Button
								variant="link"
								className="mt-2 text-page"
								onClick={() => {
									setSelectedCategory("all")
									setSearchQuery("")
								}}
							>
								Clear all filters
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</div>
	)
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
	const isExternal = project.slug.includes("https://")
	const projectUrl = isExternal ? project.slug : `/projects/${project.slug}`

	return (
		<motion.div
			layout // Keep layout here for filtering transitions
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.4 }}
			className="h-full"
		>
			<a
				href={projectUrl}
				target={isExternal ? "_blank" : "_self"}
				// Added transform-gpu and fixed overflow to stabilize hover
				className="group flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-transparent bg-card transition-all duration-300 ease-out hover:border-page/20 hover:shadow-2xl hover:shadow-page/10"
			>
				{/* Image Container - Fixed height/fit logic */}
				<div className="relative overflow-hidden bg-muted">
					<img
						src={project.image ? `/assets/projects/${project.image}-og.png` : "/placeholder.svg"}
						alt={project.title}
						width={1280}
						height={640}
						// Added back-face visibility and blur-0 to prevent "shaking" text on scale
						className="backface-hidden flex h-fit w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-105 dark:hidden"
					/>
					<img
						src={project.image ? `/assets/projects/${project.image}-dark-og.png` : "/placeholder.svg"}
						alt={project.title}
						width={1280}
						height={640}
						className="backface-hidden hidden h-fit w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-105 dark:flex"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-linear-to-t from-card/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>

				{/* Content */}
				<div className="flex grow flex-col p-8">
					<div className="mb-4 flex flex-wrap gap-2">
						{project.technologies.slice(0, 3).map((tech: string) => (
							<Badge key={tech} variant="secondary" className="border-none bg-page/10 text-page transition-colors hover:bg-page/20">
								{tech}
							</Badge>
						))}
					</div>

					<h3 className="mb-3 font-bold text-2xl tracking-tight transition-colors group-hover:text-page">{project.title}</h3>
					<p className="mb-6 line-clamp-2 text-foreground/60 text-sm leading-relaxed">{project.description}</p>

					<div className="mt-auto flex items-center justify-between">
						<span className="inline-flex items-center font-semibold text-page">
							View Case Study
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
						</span>

						<span className="font-bold text-[10px] text-muted-foreground/40 uppercase tracking-widest">{project.category}</span>
					</div>
				</div>
			</a>
		</motion.div>
	)
}

import { ArrowRight, ExternalLink, Globe, Inbox, Layers, Palette, Search, Smartphone, Trophy, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import projects, { type Project } from "@/lib/projects"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const categories = [
	{ label: "All Projects", value: "all", icon: Layers },
	{ label: "Web Development", value: "web", icon: Globe },
	{ label: "Mobile Apps", value: "mobile", icon: Smartphone },
	{ label: "UI/UX Design", value: "design", icon: Palette },
	{ label: "Hackathon", value: "hackathon", icon: Trophy }
]

export default function ProjectsList() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all")
	const [searchQuery, setSearchQuery] = useState("")

	const hasActiveFilters = selectedCategory !== "all" || searchQuery.trim() !== ""

	const filteredProjects = projects.filter((project) => {
		const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
		const query = searchQuery.toLowerCase().trim()
		const matchesSearch =
			!query ||
			project.title.toLowerCase().includes(query) ||
			project.description.toLowerCase().includes(query) ||
			project.technologies.some((tech) => tech.toLowerCase().includes(query))

		return matchesCategory && matchesSearch
	})

	const handleClearFilters = () => {
		setSelectedCategory("all")
		setSearchQuery("")
	}

	return (
		<div className="mx-auto min-h-screen max-w-7xl py-16 lg:py-24">
			{/* Header & Filters */}
			<section className="mb-12">
				<div className="flex flex-col gap-6">
					{/* Top Header Row with Desktop Reset Button */}
					<div className="flex items-center justify-between gap-4">
						<div>
							<h2 className="font-bold text-3xl lg:text-4xl">
								Featured <span className="text-page">Projects</span>
							</h2>
							<p className="mt-1 text-muted-foreground text-sm">Explore case studies, web applications, and hackathon prototypes.</p>
						</div>

						{/* Desktop Reset Filters Button (hidden on mobile) */}
						<AnimatePresence>
							{hasActiveFilters && (
								<motion.div
									initial={{ opacity: 0, scale: 0.9, x: 10 }}
									animate={{ opacity: 1, scale: 1, x: 0 }}
									exit={{ opacity: 0, scale: 0.9, x: 10 }}
									transition={{ duration: 0.2 }}
									className="hidden lg:block"
								>
									<Button
										variant="outline"
										size="sm"
										onClick={handleClearFilters}
										className="h-9 rounded-full border-page/30 bg-page/5 px-4 text-page text-xs hover:bg-page/10 hover:text-page"
									>
										<X className="mr-1.5 h-3.5 w-3.5" />
										Reset Filters
									</Button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						{/* Category Filter Pills */}
						<div className="no-scrollbar -mx-4 -my-15 flex items-center gap-2 overflow-x-auto px-4 py-16 sm:mx-0 sm:flex-wrap sm:px-0">
							{categories.map((category) => {
								const Icon = category.icon
								const isActive = selectedCategory === category.value

								return (
									<button
										key={category.value}
										onClick={() => setSelectedCategory(category.value)}
										className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-medium text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-page sm:text-sm ${
											isActive ? "text-white" : "bg-card text-muted-foreground hover:bg-page/10 hover:text-foreground"
										}`}
									>
										{isActive && (
											<motion.div
												layoutId="activeCategoryPill"
												className="absolute inset-0 rounded-full bg-page shadow-lg shadow-page/25"
												transition={{ type: "spring", stiffness: 380, damping: 30 }}
											/>
										)}
										<span className="relative z-10 flex items-center gap-2">
											<Icon className="h-4 w-4" />
											{category.label}
										</span>
									</button>
								)
							})}
						</div>

						{/* Search Bar & Mobile Inline Reset Button */}
						<div className="flex w-full items-center gap-2 lg:w-80">
							<div className="group relative min-w-0 flex-1 lg:w-full">
								<Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-page" />
								<Input
									placeholder="Search name, tech, or description..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="h-11 w-full rounded-full border-none bg-card pr-10 pl-11 shadow-sm focus-visible:ring-2 focus-visible:ring-page"
								/>
								{searchQuery && (
									<button
										onClick={() => setSearchQuery("")}
										className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
										aria-label="Clear search"
									>
										<X className="h-3.5 w-3.5" />
									</button>
								)}
							</div>

							{/* Mobile Reset Filters Button */}
							<AnimatePresence>
								{hasActiveFilters && (
									<motion.div
										initial={{ width: 0, opacity: 0 }}
										animate={{ width: "auto", opacity: 1 }}
										exit={{ width: 0, opacity: 0 }}
										transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
										className="shrink-0 overflow-hidden lg:hidden"
									>
										<Button
											variant="outline"
											onClick={handleClearFilters}
											className="h-11 whitespace-nowrap rounded-full border-page/30 bg-page/5 px-4 text-page text-xs hover:bg-page/10 hover:text-page"
										>
											<X className="mr-1.5 h-3.5 w-3.5" />
											<span className="xs:inline hidden">Reset Filters</span>
											<span className="xs:hidden">Reset</span>
										</Button>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Grid & Empty State */}
			<section>
				<AnimatePresence mode="wait">
					{filteredProjects.length > 0 ? (
						<motion.div
							key="projects-grid"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
						>
							<AnimatePresence mode="popLayout">
								{filteredProjects.map((project, index) => (
									<ProjectCard key={project.id} project={project} index={index} />
								))}
							</AnimatePresence>
						</motion.div>
					) : (
						<motion.div
							key="empty-state"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className="flex flex-col items-center justify-center py-24 text-center"
						>
							<div className="mb-4 rounded-full bg-card p-6 text-muted-foreground">
								<Inbox className="h-10 w-10" />
							</div>
							<h3 className="font-semibold text-xl">No projects found</h3>
							<p className="mt-1 text-muted-foreground text-sm">Try adjusting your search terms or active category filters.</p>
							<Button variant="link" className="mt-3 text-page" onClick={handleClearFilters}>
								Clear all filters
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</div>
	)
}

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
	const isExternal = project.slug.startsWith("http://") || project.slug.startsWith("https://")
	const projectUrl = isExternal ? project.slug : `/projects/${project.slug}`

	const imageLight = project.image ? `/assets/projects/${project.image}-og.png` : "/placeholder.svg"
	const imageDark = project.image ? `/assets/projects/${project.image}-dark-og.png` : imageLight

	return (
		<motion.div
			layout
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.3, ease: "easeOut", delay: index ? index * 0.05 : 0 }}
			className="h-full"
		>
			<a
				href={projectUrl}
				target={isExternal ? "_blank" : "_self"}
				rel={isExternal ? "noopener noreferrer" : undefined}
				style={project.color ? ({ "--page-color": project.color } as React.CSSProperties) : undefined}
				className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-page/30 hover:shadow-page/10 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-page"
			>
				{/* Image Container with Fixed Aspect Ratio to Prevent Cumulative Layout Shift (CLS) */}
				<div className="relative aspect-2/1 w-full overflow-hidden bg-muted">
					<picture>
						<source media="(prefers-color-scheme: dark)" srcSet={imageDark} />
						<img
							src={imageLight}
							alt={project.title}
							loading="lazy"
							decoding="async"
							className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
							onError={(e) => {
								// Fallback if dark/light image fails to load
								;(e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
							}}
						/>
					</picture>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

					{/* Category Badge on Image */}
					<div className="absolute top-3 right-3">
						<span className="rounded-full border border-white/10 bg-background/80 px-2.5 py-1 font-bold text-[10px] text-muted-foreground uppercase tracking-wider backdrop-blur-md">
							{project.category}
						</span>
					</div>
				</div>

				{/* Content */}
				<div className="flex grow flex-col p-6 sm:p-8">
					{/* Tech Badges */}
					<div className="mb-4 flex flex-wrap gap-1.5">
						{project.technologies.slice(0, 3).map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="border-none bg-page/10 text-page text-xs transition-colors group-hover:bg-page/20"
							>
								{tech}
							</Badge>
						))}
						{project.technologies.length > 3 && (
							<Badge variant="outline" className="border-border/40 text-[10px] text-muted-foreground">
								+{project.technologies.length - 3}
							</Badge>
						)}
					</div>

					<h3 className="mb-2 font-bold text-2xl tracking-tight transition-colors group-hover:text-page">{project.title}</h3>

					<p className="mb-6 line-clamp-2 text-muted-foreground text-sm leading-relaxed">{project.description}</p>

					{/* Footer */}
					<div className="mt-auto flex items-center justify-between border-border/30 border-t pt-4">
						<span className="inline-flex items-center font-semibold text-page text-sm">
							{isExternal ? "View Repository / External" : "View Case Study"}
							{isExternal ? (
								<ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							) : (
								<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
							)}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	)
}

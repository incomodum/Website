import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowRight, Search } from "lucide-react"
import { Input } from "./ui/input"
import { motion, type MotionStyle } from "motion/react"
import projects from "@/lib/projects"

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
		<div className="py-16 lg:py-24">
			<section className="py-8">
				<div className="mx-auto max-w-7xl px-8 lg:px-16">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<Button
									key={category.value}
									variant={selectedCategory === category.value ? "default" : "outline"}
									className={`rounded-full ${selectedCategory === category.value ? "bg-page text-white hover:bg-page/90" : ""}`}
									onClick={() => setSelectedCategory(category.value)}
								>
									{category.label}
								</Button>
							))}
						</div>
						<div className="relative">
							<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-gray-400" />
							<Input
								autoComplete="off"
								placeholder="Search projects..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full rounded-full pl-10 md:w-[300px]"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-8 lg:py-12">
				<div className="mx-auto max-w-7xl px-8 lg:px-16">
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								style={project.color ? ({ "--color-page": `${project.color}` } as MotionStyle) : {}}
								className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:shadow-xl"
							>
								<div className="aspect-[16/9] overflow-hidden">
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										width={600}
										height={338}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
								<div className="flex flex-grow flex-col p-6">
									<div className="mb-4 flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span key={tech} className="rounded-full bg-page/10 px-3 py-1 text-page text-sm">
												{tech}
											</span>
										))}
									</div>
									<h3 className="mb-2 font-bold text-xl">{project.title}</h3>
									<p className="mb-4 text-gray-600">{project.description}</p>
									<div className="h-auto flex-grow" />
									<a
										href={project.slug.includes("https://") ? project.slug : `/projects/${project.slug}`}
										target={project.slug.includes("https://") ? "_blank" : "_self"}
										className="inline-flex items-center text-page"
									>
										View Project
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</a>
								</div>
							</motion.div>
						))}
						{filteredProjects.length === 0 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="col-span-full row-span-3 flex flex-col text-center text-muted-foreground"
							>
								Nothing to show yet 🙂
							</motion.div>
						)}
					</div>
				</div>
			</section>
		</div>
	)
}

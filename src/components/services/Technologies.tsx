import { Docker, Go, Kubernetes, NextJs, NodeJs, PHP, React, Redis, TailwindCSS, TypeScript, VercelDark, VercelLight } from "developer-icons"
import { Cpu, GitBranch, Key, Layout, Lock, Server, Shield, ShieldCheck } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

const technologies = [
	{
		category: "Frontend",
		description: "Modern, responsive client interfaces",
		items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
		icon: <Layout className="size-5" />,
		techIcons: [
			{ name: "React", icon: <React key="react" /> },
			{ name: "Next.js", icon: <NextJs key="nextjs" /> },
			{ name: "Tailwind", icon: <TailwindCSS key="tailwindcss" /> },
			{ name: "TypeScript", icon: <TypeScript key="typescript" /> }
		]
	},
	{
		category: "Backend",
		description: "Scalable APIs and real-time datastores",
		items: ["Node.js", "Go", "PHP", "Redis"],
		icon: <Server className="size-5" />,
		techIcons: [
			{ name: "Node.js", icon: <NodeJs key="node" /> },
			{ name: "Go", icon: <Go key="go" /> },
			{ name: "PHP", icon: <PHP key="php" /> },
			{ name: "Redis", icon: <Redis key="redis" /> }
		]
	},
	{
		category: "Security",
		description: "Encryption, auth, and network protection",
		items: ["OAuth 2.0", "JWT Auth", "WAF Rules", "HTTPS / TLS"],
		icon: <ShieldCheck className="size-5" />,
		techIcons: [
			{ name: "OAuth", icon: <Shield className="size-8 text-page" /> },
			{ name: "JWT", icon: <Key className="size-8 text-page" /> },
			{ name: "WAF", icon: <Lock className="size-8 text-page" /> },
			{ name: "HTTPS", icon: <ShieldCheck className="size-8 text-page" /> }
		]
	},
	{
		category: "Infrastructure",
		description: "Automated deployment & orchestration",
		items: ["Vercel", "Docker", "Kubernetes", "CI/CD Pipelines"],
		icon: <Cpu className="size-5" />,
		techIcons: [
			{
				name: "Vercel",
				icon: (
					<>
						<VercelLight className="hidden dark:block" />
						<VercelDark className="dark:hidden" />
					</>
				)
			},
			{ name: "Docker", icon: <Docker key="docker" /> },
			{ name: "Kubernetes", icon: <Kubernetes key="kubernetes" /> },
			{ name: "CI/CD", icon: <GitBranch className="size-8 text-page" /> }
		]
	}
]

export default function TechSection() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	// Auto-play interval switch
	useEffect(() => {
		if (!isAutoPlaying) return

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % technologies.length)
		}, 4500)

		return () => clearInterval(interval)
	}, [isAutoPlaying])

	const handleCardClick = (index: number) => {
		setActiveIndex(index)
		setIsAutoPlaying(false) // Stop auto-play once user interacts manually
	}

	const activeTech = technologies[activeIndex]

	return (
		<section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
			<div className="mx-auto max-w-7xl">
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Side: Category Selectors */}
					<div className="lg:col-span-6">
						<div className="mb-8">
							<h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
								Technologies We <span className="text-page">Work With</span>
							</h2>
							<p className="mt-3 max-w-lg text-muted-foreground text-sm sm:text-base">
								We leverage modern frameworks and robust infrastructure to craft fast, reliable, and secure products.
							</p>
						</div>

						{/* Interactive Category Cards */}
						{/** biome-ignore lint/a11y/noStaticElementInteractions: intended */}
						<div
							className="grid gap-3.5 sm:grid-cols-2"
							onMouseEnter={() => setIsAutoPlaying(false)}
							onMouseLeave={() => setIsAutoPlaying(true)}
						>
							{technologies.map((tech, idx) => {
								const isActive = activeIndex === idx

								return (
									<motion.div
										key={tech.category}
										onClick={() => handleCardClick(idx)}
										whileHover={{ y: -2 }}
										whileTap={{ scale: 0.98 }}
										className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
											isActive
												? "border-page/50 bg-card shadow-lg shadow-page/5"
												: "border-border/40 bg-card/40 hover:border-border hover:bg-card/70"
										}`}
									>
										<div className="flex items-center justify-between">
											<div
												className={`flex size-10 items-center justify-center rounded-xl transition-colors ${
													isActive ? "bg-page text-white" : "bg-muted text-muted-foreground group-hover:text-foreground"
												}`}
											>
												{tech.icon}
											</div>
										</div>

										<h3 className="mt-4 font-bold text-base">{tech.category}</h3>
										<p className="mt-1 line-clamp-1 text-muted-foreground text-xs">{tech.description}</p>

										{/* Progress Bar for Active Card */}
										{isActive && isAutoPlaying && (
											<motion.div
												key={activeIndex}
												className="absolute bottom-0 left-0 h-1 bg-page"
												initial={{ width: "0%" }}
												animate={{ width: "100%" }}
												transition={{ duration: 4.5, ease: "linear" }}
											/>
										)}
									</motion.div>
								)
							})}
						</div>
					</div>

					{/* Right Side: Interactive Showcase Visual */}
					<div className="relative flex items-center justify-center lg:col-span-6">
						{/* Background Ambient Glow */}
						<div className="pointer-events-none absolute h-72 w-72 rounded-full bg-page/15 blur-[120px]" />

						{/* Glass Container */}
						<div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/50 bg-linear-to-b from-card/80 to-card/30 p-8 shadow-2xl backdrop-blur-xl">
							{/* Category Title Badge */}
							<div className="mb-6 flex items-center justify-between border-border/30 border-b pb-4">
								<div className="flex items-center gap-2.5">
									<div className="flex size-8 items-center justify-center rounded-lg bg-page/10 text-page">{activeTech.icon}</div>
									<span className="font-bold text-lg">{activeTech.category}</span>
								</div>
							</div>

							{/* Animated Tech Icons Grid */}
							<AnimatePresence mode="wait">
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 1.05 }}
									transition={{ duration: 0.3 }}
									className="grid grid-cols-2 gap-4"
								>
									{activeTech.techIcons.map((item, i) => (
										<motion.div
											key={item.name}
											initial={{ y: 15, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: i * 0.08 + 0.1, duration: 0.3 }}
											className="group relative flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-md transition-all hover:border-page/40 hover:bg-card hover:shadow-md"
										>
											<div className="flex size-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 [&_svg]:size-10">
												{item.icon}
											</div>
											<span className="mt-3 font-semibold text-muted-foreground text-xs group-hover:text-foreground">
												{item.name}
											</span>
										</motion.div>
									))}
								</motion.div>
							</AnimatePresence>

							{/* Bottom Technologies Pill List */}
							<div className="mt-6 flex flex-wrap justify-center gap-1.5 border-border/30 border-t pt-4">
								{activeTech.items.map((item) => (
									<span key={item} className="rounded-full bg-muted/60 px-3 py-1 font-medium text-muted-foreground text-xs">
										{item}
									</span>
								))}
								<span className="rounded-full bg-muted/60 px-3 py-1 font-medium text-muted-foreground text-xs">...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

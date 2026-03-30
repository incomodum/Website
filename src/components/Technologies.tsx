import { Docker, Go, Kubernetes, NextJs, NodeJs, PHP, React, Redis, TailwindCSS, TypeScript, VercelDark, VercelLight } from "developer-icons"
import { Cpu, Layout, Server, ShieldCheck } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

// Example data structure - replace with your actual icons
const technologies = [
	{
		category: "Frontend",
		items: ["React", "Next.js", "Tailwind", "TypeScript"],
		icon: <Layout className="size-6" />,
		techIcons: [<React key={"react"} />, <NextJs key={"nextjs"} />, <TailwindCSS key={"tailwindcss"} />, <TypeScript key={"typescript"} />]
	},
	{
		category: "Backend",
		items: ["Node.js", "Go", "PostgreSQL", "Redis"],
		icon: <Server className="size-6" />,
		techIcons: [<NodeJs key="node" />, <Go key="go" />, <PHP key="php" />, <Redis key="redis" />]
	},
	{
		category: "Security",
		items: ["OAuth", "JWT", "WAF", "HTTPS"],
		icon: <ShieldCheck className="size-6" />,
		techIcons: ["🔐", "🛡️", "🔑", "🔒"]
	},
	{
		category: "Infrastructure",
		items: ["Vercel", "Docker", "Kubernetes", "CI/CD"],
		icon: <Cpu className="size-6" />,
		techIcons: [
			<>
				<VercelLight className="hidden dark:block" />
				<VercelDark className="dark:hidden" />
			</>,
			<Docker key="docker" />,
			<Kubernetes key="kubernets" />,
			"🚀"
		]
	}
]

export default function TechSection() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	// Auto-play logic
	useEffect(() => {
		if (!isAutoPlaying) return

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % technologies.length)
		}, 4000) // Switch every 4 seconds

		return () => clearInterval(interval)
	}, [isAutoPlaying])

	const handleCardClick = (index: number) => {
		setActiveIndex(index)
		setIsAutoPlaying(false) // Stop auto-play once user interacts
	}

	return (
		<section className="overflow-hidden px-8 py-16 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left Side: Content & Clickable Cards */}
					<div>
						<h2 className="mb-6 font-bold text-3xl lg:text-4xl">
							Technologies We <span className="text-page">Work With</span>
						</h2>
						<p className="mb-8 text-foreground/60">
							We use the latest technologies and frameworks to build scalable, secure, and high-performance solutions.
						</p>

						<div className="grid gap-4 sm:grid-cols-2">
							{technologies.map((tech, idx) => (
								<motion.div
									key={tech.category}
									onClick={() => handleCardClick(idx)}
									className={`relative cursor-pointer overflow-clip rounded-xl border-2 p-6 transition-all duration-300 ${
										activeIndex === idx ? "border-page bg-card shadow-lg" : "border-transparent bg-card/50 hover:border-page/30"
									}`}
									whileHover={{ y: -5 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className={`mb-3 w-fit rounded-lg p-2 ${activeIndex === idx ? "text-page" : "text-foreground/40"}`}>
										{tech.icon}
									</div>
									<h3 className="mb-1 font-semibold">{tech.category}</h3>
									<p className="line-clamp-1 text-foreground/60 text-xs">{tech.items.join(", ")}</p>

									{/* Progress Bar for Active Card */}
									{activeIndex === idx && isAutoPlaying && (
										<motion.div
											className="absolute bottom-0 left-0 h-1 rounded-full bg-page"
											initial={{ width: "0%" }}
											animate={{ width: "100%" }}
											transition={{ duration: 4, ease: "linear" }}
										/>
									)}
								</motion.div>
							))}
						</div>
					</div>

					{/* Right Side: Visual Replacement for Placeholder */}
					<div className="relative flex aspect-square items-center justify-center">
						{/* Background Decorative Blobs */}
						<div className="absolute inset-0 rounded-full bg-page/5 blur-3xl" />

						{/* Floating Tech Orbit */}
						<div className="relative z-10 flex aspect-square w-full max-w-112.5 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
									animate={{ opacity: 1, scale: 1, rotate: 0 }}
									exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
									transition={{ duration: 0.5 }}
									className="grid grid-cols-2 gap-8 p-12"
								>
									{technologies[activeIndex].techIcons.map((icon, i) => (
										<motion.div
											// biome-ignore lint/suspicious/noArrayIndexKey: intended
											key={i}
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: i * 0.1 + 0.2 }}
											className="flex size-24 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-5xl shadow-inner backdrop-blur-sm [&_svg]:size-10"
										>
											{icon}
										</motion.div>
									))}
								</motion.div>
							</AnimatePresence>

							{/* Decorative Rings */}
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
								className="absolute inset-10 rounded-full border border-page/20 border-dashed"
							/>
						</div>

						{/* Original Decorative Squares from your code, now animated */}
						<motion.div
							animate={{ rotate: [12, 15, 12] }}
							transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
							className="absolute -top-4 -right-4 z-0 h-48 w-48 rounded-3xl bg-page/10"
						/>
						<motion.div
							animate={{ rotate: [-12, -15, -12] }}
							transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
							className="absolute -bottom-4 -left-4 z-0 h-48 w-48 rounded-3xl bg-[#1a1b50]/10"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

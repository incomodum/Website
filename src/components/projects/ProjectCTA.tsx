import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "motion/react"

interface ProjectCTAProps {
	title?: string
	description?: string
	buttonText?: string
	href: string
	isExternal?: boolean
	disabled?: boolean
}

export default function ProjectCTA({
	title = "Explore the project live",
	description = "Experience the live platform or dive into the codebase to see how it was built.",
	buttonText = "View Project",
	href,
	isExternal = true,
	disabled = false
}: ProjectCTAProps) {
	return (
		<section className="w-full px-8 pb-32 md:px-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: false }}
				className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border/50 bg-linear-to-b from-card/80 via-card/50 to-card/30 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur-xl md:p-16"
			>
				{/* Ambient Background Aura */}
				<div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-full max-w-2xl -translate-x-1/2 rounded-full bg-page/15 blur-[100px]" />
				<div className="pointer-events-none absolute -right-20 -bottom-32 h-64 w-64 rounded-full bg-page/10 blur-[90px]" />

				{/* Subtle Top Edge Highlight */}
				<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/40 to-transparent" />

				<div className="relative z-10 flex flex-col items-center">
					{/* Heading */}
					<h2 className="mb-4 max-w-2xl text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl md:text-5xl">{title}</h2>

					{/* Description */}
					<p className="mb-10 max-w-lg text-balance text-base text-muted-foreground sm:text-lg">{description}</p>

					{/* CTA Button */}
					<div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
						<a
							href={href}
							target={isExternal ? "_blank" : undefined}
							rel={isExternal ? "noopener noreferrer" : undefined}
							className={`group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-page px-9 py-4 font-bold text-white shadow-lg shadow-page/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-page/30 hover:shadow-xl active:scale-[0.98] sm:w-auto ${disabled ? "pointer-events-none opacity-50" : ""}`}
						>
							{/* Shimmer Accent */}
							<div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

							<span className="relative flex items-center text-base">
								{buttonText}
								{isExternal ? (
									<ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
								) : (
									<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
								)}
							</span>
						</a>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

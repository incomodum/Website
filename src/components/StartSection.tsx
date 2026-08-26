import { motion } from "motion/react"

export default function StartSection({
	children,
	description,
	className
}: {
	children: React.ReactNode
	description: React.ReactNode
	className?: string
}) {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
			<section className={`relative mx-auto w-full pt-32 lg:pt-40 ${className || ""}`}>
				<div className="md:text-center">
					<h1 className="mb-6 font-bold text-4xl leading-tight lg:text-5xl">{children}</h1>
					<p className="text-foreground/60 text-lg">{description}</p>
				</div>
			</section>
		</motion.div>
	)
}

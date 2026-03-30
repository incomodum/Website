import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import services from "@/lib/services"

export default function ServicesList() {
	return (
		<section className="overflow-hidden px-8 py-16 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						visible: { transition: { staggerChildren: 0.1 } }
					}}
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
				>
					{services.map((service) => (
						<ServiceCard key={service.title} service={service} />
					))}
				</motion.div>
			</div>
		</section>
	)
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
	return (
		<motion.div
			layout
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 }
			}}
			whileHover={{ y: -8 }}
			className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-card p-8 transition-all hover:border-page/50 hover:shadow-[0_20px_50px_rgba(var(--page-rgb),0.1)]"
		>
			{/* Background Accent Gradient */}
			<div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-page/5 blur-3xl transition-opacity group-hover:opacity-100" />

			{/* Icon Header */}
			<div className="relative mb-6 flex items-center justify-between">
				<div className="w-fit rounded-2xl bg-page/10 p-4 text-page transition-colors group-hover:bg-page group-hover:text-white">
					{service.icon}
				</div>
				<motion.div initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }} className="text-page">
					<ArrowRight className="h-6 w-6" />
				</motion.div>
			</div>

			<h3 className="mb-3 font-bold text-2xl tracking-tight">{service.title}</h3>
			<p className="mb-6 text-foreground/60 text-sm leading-relaxed transition-colors group-hover:text-foreground/80">{service.description}</p>

			{/* Expandable Features Section */}
			<div className="mt-auto">
				<ul className="space-y-3 border-white/5 border-t pt-6">
					{service.features.map((feature: string, i: number) => (
						<motion.li
							key={feature}
							initial={{ opacity: 0.4 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: i * 0.05 }}
							className="flex items-start text-foreground/50 text-sm transition-colors group-hover:text-foreground/90"
						>
							<CheckCircle2 className="mr-3 h-4 w-4 shrink-0 text-page/50 group-hover:text-page" />
							{feature}
						</motion.li>
					))}
				</ul>
			</div>

			{/* Interactive "Glow" Footer */}
			<motion.div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 group-hover:w-full" />
		</motion.div>
	)
}

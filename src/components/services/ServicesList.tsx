import { CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import services from "@/lib/services"

export default function ServicesList() {
	return (
		<section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
			{/* Ambient Background Glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-page/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				{/* Cards Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
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
				visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
			}}
			whileHover={{ y: -6 }}
			className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-page/40 hover:bg-card hover:shadow-2xl hover:shadow-page/10"
		>
			{/* Top Edge Highlight Line */}
			<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/0 to-transparent transition-all duration-500 group-hover:via-page/40" />

			{/* Corner Background Accent Blob */}
			<div className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-page/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-page/20" />

			{/* Icon & External Link Header */}
			<div className="relative mb-6 flex items-center justify-between">
				<div className="flex size-14 items-center justify-center rounded-2xl bg-page/10 text-page transition-all duration-300 group-hover:bg-page group-hover:text-white group-hover:shadow-lg group-hover:shadow-page/25 [&_svg]:size-6">
					{service.icon}
				</div>

				{/* <div className="flex size-9 items-center justify-center rounded-full border border-border/40 bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 group-hover:border-page/30 group-hover:bg-page/10 group-hover:text-page">
					<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</div> */}
			</div>

			{/* Title & Description */}
			<h3 className="mb-3 font-bold text-2xl tracking-tight transition-colors group-hover:text-page">{service.title}</h3>
			<p className="mb-8 text-muted-foreground text-sm leading-relaxed transition-colors group-hover:text-foreground/80">
				{service.description}
			</p>

			{/* Features List */}
			<div className="mt-auto border-border/30 border-t pt-6">
				<ul className="space-y-3">
					{service.features.map((feature: string) => (
						<li
							key={feature}
							className="flex items-center font-medium text-muted-foreground text-sm transition-colors group-hover:text-foreground"
						>
							<CheckCircle2 className="mr-3 size-4 shrink-0 text-page/60 transition-colors group-hover:text-page" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Animated Bottom Progress Line */}
			<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 ease-out group-hover:w-full" />
		</motion.div>
	)
}

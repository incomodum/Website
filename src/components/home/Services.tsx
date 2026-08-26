import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import services from "@/lib/services"

export default function Services() {
	return (
		<section aria-labelledby="heading-services" className="relative overflow-hidden py-20 lg:py-28">
			{/* Ambient Background Glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-page/5 blur-[120px]" />

			<div className="mx-auto max-w-7xl">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mb-16 space-y-4 text-center"
				>
					<h2 id="heading-services" className="text-balance font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
						How we help you <span className="text-page">improve</span>
					</h2>

					<p className="mx-auto text-balance text-muted-foreground text-sm sm:text-base">
						Tailored software solutions designed to solve complex business challenges and accelerate growth.
					</p>
				</motion.div>

				{/* Featured Cards Grid */}
				<motion.div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-50px" }}
					variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
				>
					{services.slice(0, 3).map((service) => (
						<motion.a
							key={service.title}
							href={service.link}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
							}}
							whileHover={{ y: -6 }}
							className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-page/40 hover:bg-card hover:shadow-2xl hover:shadow-page/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-page"
						>
							{/* Top Edge Highlight Line */}
							<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/0 to-transparent transition-all duration-500 group-hover:via-page/40" />

							{/* Corner Background Accent Blob */}
							<div className="pointer-events-none absolute -top-16 -right-16 size-36 rounded-full bg-page/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-page/20" />

							{/* Icon Header */}
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

							{/* Footer Link */}
							<div className="mt-auto flex items-center font-semibold text-page text-sm">
								<span>Learn more</span>
								<ArrowUpRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</div>

							{/* Animated Bottom Line */}
							<div className="absolute bottom-0 left-0 h-1 w-0 bg-page transition-all duration-500 ease-out group-hover:w-full" />
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	)
}

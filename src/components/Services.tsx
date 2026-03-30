import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import services from "@/lib/services"

export default function Services() {
	return (
		<section aria-labelledby="heading-services" className="py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-16 space-y-4 md:text-center"
			>
				<h2 id="heading-services" className="font-bold text-4xl tracking-tight lg:text-5xl">
					How we help you <span className="text-page">improve</span>
				</h2>
				<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
					Tailored software solutions designed to solve complex business challenges.
				</p>
			</motion.div>

			<motion.div
				className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
			>
				{services.slice(0, 3).map((service) => (
					<motion.a
						key={service.title}
						href={service.link}
						variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
						className="group relative flex transform-gpu flex-col overflow-clip rounded-2xl border border-transparent bg-card p-8 transition-all hover:border-page/20 hover:shadow-2xl hover:shadow-page/5"
					>
						<div className="mb-6 w-fit rounded-2xl bg-page/10 p-4 text-page transition-colors group-hover:bg-page group-hover:text-white">
							{service.icon}
						</div>
						<h3 className="mb-3 font-bold text-xl">{service.title}</h3>
						<p className="mb-6 text-muted-foreground text-sm leading-relaxed">{service.description}</p>
						<div className="mt-auto flex items-center font-bold text-page text-sm">
							Learn more
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
						</div>
						{/* Glow indicator */}
						<div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-page transition-all duration-500 group-hover:w-full" />
					</motion.a>
				))}
			</motion.div>
		</section>
	)
}

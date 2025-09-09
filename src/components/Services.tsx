import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import services from "@/lib/services"

export default function Services() {
	return (
		<section aria-labelledby="heading-services" className="py-32">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-16 md:text-center"
				>
					<h2 id="heading-services" className="mb-5 font-bold text-3xl lg:text-4xl">
						How can we help your business <span className="text-page">improve</span>
					</h2>
					<p className="mx-auto max-w-2xl text-foreground/60 text-lg">
						We offer comprehensive software solutions tailored to your specific needs
					</p>
				</motion.div>

				<div role="list" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.slice(0, 3).map((service, index) => (
						<motion.a
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							href={service.link}
							aria-label={service.title}
							className="group flex flex-col items-start rounded-3xl bg-card p-8 transition-shadow hover:shadow-xl"
						>
							<div className="mb-6 inline-block rounded-2xl bg-page/10 p-4 text-page">{service.icon}</div>
							<h3 className="mb-4 text-start font-bold text-xl">{service.title}</h3>
							<p className="mb-6 text-start text-foreground/60">{service.description}</p>
							<div className="h-auto grow" />
							<p className="inline-flex items-center text-page">
								Learn more
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</p>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	)
}

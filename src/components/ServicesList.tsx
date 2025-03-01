import { motion } from "motion/react"
import services from "@/lib/services"

export default function ServicesList() {
	return (
		<section className="px-8 py-16 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group rounded-3xl bg-white p-8 transition-all hover:shadow-xl"
						>
							<div className="mb-6 inline-block rounded-2xl bg-[#ff7171]/10 p-4 text-[#ff7171]">{service.icon}</div>
							<h3 className="mb-4 font-bold text-xl">{service.title}</h3>
							<p className="mb-6 text-gray-600">{service.description}</p>
							<ul className="space-y-3">
								{service.features.map((feature) => (
									<li key={feature} className="flex items-center text-gray-600 text-sm">
										<div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#ff7171]" />
										{feature}
									</li>
								))}
							</ul>
							{/* <a href={service.link} className="inline-flex items-center text-[#ff7171]">
								Learn more
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a> */}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

import { motion } from "motion/react"
import { ArrowRight, Code, LineChart, Smartphone } from "lucide-react"

const services = [
	{
		icon: <Code className="size-8" />,
		title: "Custom Software Development",
		description: "Tailored solutions built with cutting-edge technology to meet your specific business needs.",
		link: "/services/#custom-software"
	},
	{
		icon: <Smartphone className="size-8" />,
		title: "Mobile App Development",
		description: "Cross-platform mobile applications that deliver exceptional user experiences.",
		link: "/services/#mobile-apps"
	},
	{
		icon: <LineChart className="size-8" />,
		title: "Digital Transformation",
		description: "Transform your business with innovative digital solutions and strategies.",
		link: "/services/#digital-transformation"
	}
]

export default function Services() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-16 md:text-center"
				>
					<h2 className="mb-5 font-bold text-3xl lg:text-4xl">
						How can we help your business <span className="text-page">improve</span>
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						We offer comprehensive software solutions tailored to your specific needs
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group flex flex-col items-start rounded-3xl bg-white p-8 transition-all hover:bg-white hover:shadow-xl"
						>
							<div className="mb-6 inline-block rounded-2xl bg-page/10 p-4 text-page">{service.icon}</div>
							<h3 className="mb-4 text-start font-bold text-xl">{service.title}</h3>
							<p className="mb-6 text-start text-gray-600">{service.description}</p>
							<div className="h-auto flex-grow" />
							<a href={service.link} className="inline-flex items-center text-[#ff7171]">
								Learn more
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

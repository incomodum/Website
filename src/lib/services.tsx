import { Code, Cpu, LineChart, Rocket, Server, Smartphone } from "lucide-react"

export default [
	{
		icon: <Code className="h-8 w-8" />,
		title: "Custom Software Development",
		description: "Tailored solutions built with cutting-edge technology to meet your specific business needs.",
		features: ["Custom web applications", "Enterprise software solutions", "API development and integration", "Legacy system modernization"],
		link: "/services/#custom-software"
	},
	{
		icon: <Smartphone className="h-8 w-8" />,
		title: "Mobile App Development",
		description: "Cross-platform mobile applications that deliver exceptional user experiences.",
		features: ["iOS and Android development", "Cross-platform solutions", "Progressive Web Apps", "Mobile app maintenance"],
		link: "/services/#mobile-apps"
	},
	{
		icon: <Rocket className="size-8" />,
		title: "Digital Transformation",
		description: "Transform your business with innovative digital solutions and strategies.",
		features: ["Digital strategy consulting", "Process automation", "Technology roadmap", "Change management"],
		link: "/services/#transformation"
	},
	{
		icon: <Cpu className="h-8 w-8" />,
		title: "DevOps",
		description: "Streamline your development workflow and optimize infrastructure for maximum efficiency and reliability.",
		features: ["CI/CD pipeline automation", "Infrastructure as code", "Container orchestration", "Performance monitoring"],
		link: "/services/#devops"
	},
	{
		icon: <Server className="h-8 w-8" />,
		title: "Cloud Solutions",
		description: "Scalable cloud infrastructure and services to power your digital transformation.",
		features: ["Cloud migration", "DevOps automation", "Serverless architecture", "Cloud optimization"],
		link: "/services/#cloud"
	},
	{
		icon: <LineChart className="h-8 w-8" />,
		title: "Data Analytics",
		description: "Transform your data into actionable insights with our analytics solutions.",
		features: ["Business intelligence", "Data visualization", "Real-time analytics", "Big data processing"],
		link: "/services/#analytics"
	}
]

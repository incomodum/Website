export default [
	{
		name: "Lucas Ligas",
		position: "CMO",
		image: "/assets/team/lucas-ligas.jpeg",
		link: "https://lucasligas.com",
		links: [
			{
				type: "site",
				text: "lucasligas.com",
				link: "https://lucasligas.com"
			},
			{
				type: "linkedin",
				text: "Lucas Ligas",
				link: "https://www.linkedin.com/in/lucas-ligas-a6632b282/"
			},
			{
				type: "email",
				text: "lucasligas15@gmail.com",
				link: "mailto:lucasligas15@gmail.com"
			}
		]
	},
	{
		name: "Daniel Czaja",
		position: "CDO",
		image: "/assets/team/daniel-czaja.jpeg",
		links: [
			{
				type: "linkedin",
				text: "Daniel Czaja",
				link: "https://www.linkedin.com/in/daniel-adam-czaja-2aab07257/"
			},
			{
				type: "email",
				text: "danielczaja12@gmail.com",
				link: "mailto:danielczaja12@gmail.com"
			}
		]
	},
	{
		name: "Jakub Krčmárik",
		position: "CTO",
		image: "/assets/team/jakub-krcmarik.jpeg",
		links: [
			{
				type: "linkedin",
				text: "Jakub Krčmárik",
				link: "https://www.linkedin.com/in/jakub-krcmarik/"
			},
			{
				type: "email",
				text: "mindstormjak@gmail.com",
				link: "mailto:mindstormjak@gmail.com"
			}
		]
	}
] satisfies Member[]

export interface Member {
	name: string
	position: string
	image: string
	link?: string
	links: { type: "linkedin" | "email" | "site"; text: string; link: string }[]
}

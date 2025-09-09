import { Divide as Hamburger } from "hamburger-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import Logo from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

const links = [
	{
		name: "Services",
		to: "/services"
	},
	{
		name: "Our work",
		to: "/projects"
	},
	{
		name: "Mission",
		to: "/mission"
	}
]

export default function Header() {
	const [open, setOpen] = useState(false)

	function toggle() {
		setOpen(!open)
	}

	return (
		<div className="sticky top-0 left-0 z-50 flex w-full flex-col bg-background/50 backdrop-blur-xl lg:backdrop-blur-lg">
			<header className="flex w-full flex-row items-center justify-center p-8 pb-6 text-page">
				<div className="flex w-full max-w-7xl flex-row items-center justify-between">
					<a href="/#" onClick={() => setOpen(false)}>
						<Logo />
					</a>
					<nav className="hidden flex-row items-center gap-8 lg:flex">
						{links.map((link) => (
							<a href={link.to} key={link.to} className="text-foreground">
								{link.name}
							</a>
						))}
						<a href="/#contact">
							<button className="rounded-[37px] bg-current px-8 py-3 shadow-button transition-all hover:scale-105">
								<p className="font-bold text-white">Contact</p>
							</button>
						</a>
					</nav>
					<div className="relative isolate overflow-clip rounded-xl text-logo lg:hidden dark:text-white/80">
						<Hamburger aria-controls="primary-navigation" toggled={open} toggle={toggle} size={24} rounded color="currentColor" />
					</div>
				</div>
			</header>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="h-[calc(100vh-104px)] w-full overflow-y-auto overscroll-contain px-8 pt-8 pb-6 text-current lg:hidden"
					>
						<nav className="flex flex-col gap-16 lg:items-center">
							{links.map((link) => (
								<a href={link.to} key={link.to} className="font-bold text-4xl text-foreground">
									{link.name}
								</a>
							))}
							<a href="/#contact" onClick={() => setOpen(false)}>
								<button className="bg-transparent text-page drop-shadow-mobile">
									<p className="font-bold text-4xl">Contact</p>
								</button>
							</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

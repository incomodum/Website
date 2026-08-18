import { Divide as Hamburger } from "hamburger-react"
import { AnimatePresence, motion, type Variants } from "motion/react"
import { useState } from "react"
import Logo from "./Logo"

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
	const [hoveredLink, setHoveredLink] = useState<string | null>(null)

	function toggle() {
		setOpen(!open)
	}

	const mobileContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.1
			}
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1
			}
		}
	} as Variants

	const mobileItemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" }
		},
		exit: {
			opacity: 0,
			y: 10,
			transition: { duration: 0.2 }
		}
	} as Variants

	return (
		<>
			<div className="h-26 w-full" />
			<div className="fixed top-0 left-0 z-50 flex w-full flex-col border-border/20 border-b bg-background/80 backdrop-blur-md transition-colors">
				<header className="flex w-full flex-row items-center justify-center p-6 text-page lg:p-8 lg:pb-6">
					<div className="flex w-full max-w-7xl flex-row items-center justify-between">
						<a href="/" onClick={() => setOpen(false)} className="z-50">
							<Logo />
						</a>

						<nav className="hidden flex-row items-center gap-8 lg:flex">
							{links.map((link) => (
								<a
									href={link.to}
									key={link.to}
									onMouseEnter={() => setHoveredLink(link.to)}
									onMouseLeave={() => setHoveredLink(null)}
									className="relative py-1 font-medium text-foreground transition-colors hover:text-page"
								>
									{link.name}
									{hoveredLink === link.to && (
										<motion.div
											layoutId="desktop-nav-hover"
											className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-page"
											transition={{ type: "spring", stiffness: 380, damping: 30 }}
										/>
									)}
								</a>
							))}
							<a href="/contact">
								<button className="rounded-full bg-current px-8 py-3 shadow-button transition-transform duration-200 hover:scale-105 active:scale-95">
									<p className="font-bold text-white">Contact</p>
								</button>
							</a>
						</nav>

						<div className="relative z-50 overflow-clip rounded-xl text-logo lg:hidden dark:text-white/80">
							<Hamburger aria-controls="primary-navigation" toggled={open} toggle={toggle} size={24} rounded color="currentColor" />
						</div>
					</div>
				</header>

				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "calc(100vh - 88px)" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
							className="flex w-full flex-col justify-between overflow-hidden px-8 pt-8 pb-12 lg:hidden"
						>
							<motion.nav
								variants={mobileContainerVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="flex flex-col gap-8"
							>
								{links.map((link) => (
									<motion.div key={link.to} variants={mobileItemVariants}>
										<a
											href={link.to}
											onClick={() => setOpen(false)}
											className="block font-bold text-4xl text-foreground transition-colors hover:text-page active:text-page"
										>
											{link.name}
										</a>
									</motion.div>
								))}
							</motion.nav>

							{/* Mobile Footer CTA */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ delay: 0.25, duration: 0.3 }}
								className="mt-auto border-border/20 border-t pt-8"
							>
								<a href="/contact" onClick={() => setOpen(false)} className="block w-full">
									<button className="w-full rounded-2xl bg-page py-4 text-center shadow-lg transition-transform active:scale-98">
										<p className="font-bold text-lg text-white">Contact Us</p>
									</button>
								</a>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}

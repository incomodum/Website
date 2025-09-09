import Logo from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

export default function Footer() {
	return (
		<footer className="items-cente relative z-10 flex w-full flex-col justify-end bg-[#1C274C] dark:border-t dark:bg-background">
			<div className="flex flex-col h-auto w-full grow px-8">
				<div className="mx-auto flex h-auto w-full max-w-7xl py-8 grow items-center justify-between">
					<div className="flex flex-col gap-1 text-white">
						<Logo light height={36} />
						<p className="text-[14px] text-white opacity-50 tracking-tighter">Innovative software solutions<br />driving growth and excellence.</p>
					</div>
					<div className="flex gap-2 items-center text-white/50">
						<ThemeToggle />
					</div>
				</div>
				<div className="w-full max-w-7xl mx-auto h-px bg-border/20" />
				<p className="text-[14px] text-center text-white opacity-50 py-6">© {new Date().getFullYear()} incomodum. All rights reserved</p>
			</div>
			<div className="h-3 w-full bg-linear-to-r from-page to-[#6C4F9B]" />
		</footer>
	)
}

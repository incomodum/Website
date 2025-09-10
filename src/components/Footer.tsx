import Logo from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

export default function Footer() {
	return (
		<footer className="items-cente relative z-10 flex w-full flex-col justify-end bg-[#1C274C] dark:border-t dark:bg-background">
			<div className="flex h-auto w-full grow flex-col px-8">
				<div className="mx-auto flex h-auto w-full max-w-7xl grow items-center justify-between py-8">
					<div className="flex flex-col gap-1 text-white">
						<Logo light height={36} />
						<p className="text-[14px] text-white tracking-tighter opacity-50">
							Innovative software solutions
							<br />
							driving growth and excellence.
						</p>
					</div>
					<div className="flex items-center gap-2 text-white/50">
						<ThemeToggle />
					</div>
				</div>
				<div className="mx-auto h-px w-full max-w-7xl bg-white/10" />
				<p className="py-6 text-center text-[14px] text-white opacity-50">© {new Date().getFullYear()} incomodum. All rights reserved</p>
			</div>
			<div className="h-3 w-full bg-linear-to-r from-page to-[#6C4F9B]" />
		</footer>
	)
}

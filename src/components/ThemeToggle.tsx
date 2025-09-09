import { Computer, Monitor, Moon, Sun } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
	const setTheme = React.useCallback((state: "light" | "dark" | "auto") => {
		localStorage.setItem("theme", state)
		const mediaMatcher = window.matchMedia("(prefers-color-scheme: light)")
		let systemTheme = mediaMatcher.matches ? "light" : "dark"
		mediaMatcher.addEventListener("change", (event) => {
			systemTheme = event.matches ? "light" : "dark"
		})

		const resolvedTheme = state === "auto" ? systemTheme : state
		document.documentElement.dataset.theme = resolvedTheme
		document.documentElement.style.colorScheme = resolvedTheme
	}, [])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex flex-row gap-1 items-center">
					<Button variant="ghost" className="flex flex-row gap-1 items-center">
						<p>Site too <span className="dark:hidden underline underline-offset-2">bright</span><span className="hidden dark:inline underline underline-offset-2">dark</span>?</p>
						<div className="relative size-[1.2rem]">
							<Sun className="text-white dark:-rotate-90 size-full rotate-0 scale-100 transition-all dark:scale-0" />
							<Moon className="text-white inset-0 absolute size-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						</div>
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-[#1C274C] text-white border-white/10 dark:bg-background" align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("auto")}>
					<Monitor />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

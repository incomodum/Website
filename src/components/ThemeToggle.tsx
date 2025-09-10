import { Monitor, Moon, Sun } from "lucide-react"
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
				<div className="flex flex-row items-center gap-1">
					<Button variant="ghost" className="flex flex-row items-center gap-1">
						<p>
							Site too <span className="underline underline-offset-2 dark:hidden">bright</span>
							<span className="hidden underline underline-offset-2 dark:inline">dark</span>?
						</p>
						<div className="relative size-[1.2rem]">
							<Sun className="dark:-rotate-90 size-full rotate-0 scale-100 text-white transition-all dark:scale-0" />
							<Moon className="absolute inset-0 size-full rotate-90 scale-0 text-white transition-all dark:rotate-0 dark:scale-100" />
						</div>
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="border-white/10 bg-[#1C274C] text-white dark:bg-background" align="end">
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

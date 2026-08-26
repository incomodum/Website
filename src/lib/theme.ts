import { useEffect, useState } from "react"

export function useTheme() {
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		if (typeof document !== "undefined") {
			const attr = document.documentElement.dataset.theme as "light" | "dark"
			if (attr === "light" || attr === "dark") return attr
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
		}
		return "dark"
	})

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

		const getActiveTheme = (): "light" | "dark" => {
			const attr = document.documentElement.dataset.theme as "light" | "dark"
			// Return explicit attribute if present; otherwise resolve system preference
			if (attr === "light" || attr === "dark") return attr
			return mediaQuery.matches ? "dark" : "light"
		}

		const handleUpdate = () => setTheme(getActiveTheme())

		// Initial sync on mount
		handleUpdate()

		// Observe attribute changes on <html>
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
					handleUpdate()
				}
			}
		})

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"]
		})

		// Listen for OS system theme updates
		mediaQuery.addEventListener("change", handleUpdate)

		return () => {
			observer.disconnect()
			mediaQuery.removeEventListener("change", handleUpdate)
		}
	}, [])

	return theme
}

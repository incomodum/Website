import type * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex min-h-[80px] w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:border-page focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
				className
			)}
			{...props}
		/>
	)
}

export { Textarea }

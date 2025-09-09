import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { z } from "astro/zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	subject: z.string().min(1),
	company: z.string().optional(),
	role: z.string().optional(),
	message: z.string().min(1)
})

export default function ContactUs() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: ""
		}
	})

	function onSubmit() {
		console.log("Test")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				aria-label="Send a message to us"
				className="flex w-full flex-col gap-2 bg-none lg:max-w-[450px]"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" autoComplete="email" placeholder="example@gmail.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input type="text" autoComplete="given-name" placeholder="John" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input type="text" autoComplete="family-name" placeholder="Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Input type="text" autoComplete="none" placeholder="Subject" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Message" className="resize-none" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled className="mt-4 w-full rounded-3xl bg-page text-page shadow-button hover:bg-page disabled:grayscale">
					<p className="text-white">Submit</p>
				</Button>
			</form>
		</Form>
	)
}

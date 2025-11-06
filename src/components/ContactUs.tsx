import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = v.object({
	email: v.pipe(v.string(), v.email()),
	firstName: v.pipe(v.string(), v.minLength(1)),
	lastName: v.pipe(v.string(), v.minLength(1)),
	subject: v.pipe(v.string(), v.minLength(1)),
	company: v.optional(v.string()),
	role: v.optional(v.string()),
	message: v.pipe(v.string(), v.minLength(1))
})

export default function ContactUs() {
	const form = useForm<v.InferInput<typeof formSchema>>({
		resolver: valibotResolver(formSchema),
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
							<FormLabel id="contact-label-email">Email</FormLabel>
							<FormControl>
								<Input
									aria-labelledby="contact-label-email"
									type="email"
									autoComplete="email"
									placeholder="example@gmail.com"
									{...field}
								/>
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
							<FormLabel id="contact-label-first-name">First Name</FormLabel>
							<FormControl>
								<Input
									aria-labelledby="contact-label-first-name"
									type="text"
									autoComplete="given-name"
									placeholder="John"
									{...field}
								/>
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
							<FormLabel id="contact-label-last-name">Last Name</FormLabel>
							<FormControl>
								<Input
									aria-labelledby="contact-label-last-name"
									type="text"
									autoComplete="family-name"
									placeholder="Doe"
									{...field}
								/>
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
							<FormLabel id="contact-label-subject">Subject</FormLabel>
							<FormControl>
								<Input aria-labelledby="contact-label-subject" type="text" autoComplete="none" placeholder="Subject" {...field} />
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
							<FormLabel id="contact-label-message">Message</FormLabel>
							<FormControl>
								<Textarea aria-labelledby="contact-label-message" placeholder="Message" className="resize-none" {...field} />
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

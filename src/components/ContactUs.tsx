import { useForm } from "@tanstack/react-form"
import { z } from "astro/zod"
import { Button } from "./ui/button"
import { Field, FieldError, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
	email: z.email("Invalid email address"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	subject: z.string().min(1, "Subject is required"),
	company: z.string(),
	role: z.string(),
	message: z.string().min(1, "Message is required")
})

export default function ContactUs() {
	const form = useForm({
		defaultValues: {
			email: "",
			firstName: "",
			lastName: "",
			subject: "",
			company: "",
			role: "",
			message: ""
		},
		validators: {
			onSubmit: formSchema
		},
		onSubmit: async ({ value }) => {
			console.log("Submitted:", value)
		}
	})

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				e.stopPropagation()
				form.handleSubmit()
			}}
			aria-label="Send a message to us"
			className="flex w-full flex-col gap-2 bg-none lg:max-w-112.5"
		>
			{/* Email Field */}
			<form.Field name="email">
				{(field) => (
					<Field data-invalid={field.state.meta.errors.length > 0}>
						<FieldLabel htmlFor={field.name}>Email</FieldLabel>
						<Input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							type="email"
							placeholder="example@gmail.com"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			</form.Field>

			{/* First Name */}
			<form.Field name="firstName">
				{(field) => (
					<Field data-invalid={field.state.meta.errors.length > 0}>
						<FieldLabel htmlFor={field.name}>First Name</FieldLabel>
						<Input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="John"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			</form.Field>

			{/* Last Name */}
			<form.Field name="lastName">
				{(field) => (
					<Field data-invalid={field.state.meta.errors.length > 0}>
						<FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
						<Input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Doe"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			</form.Field>

			{/* Subject */}
			<form.Field name="subject">
				{(field) => (
					<Field data-invalid={field.state.meta.errors.length > 0}>
						<FieldLabel htmlFor={field.name}>Subject</FieldLabel>
						<Input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Subject"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			</form.Field>

			{/* Message */}
			<form.Field name="message">
				{(field) => (
					<Field data-invalid={field.state.meta.errors.length > 0}>
						<FieldLabel htmlFor={field.name}>Message</FieldLabel>
						<Textarea
							id={field.name}
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Message"
							className="resize-none"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			</form.Field>

			<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<Button
						type="submit"
						disabled={!canSubmit}
						className="mt-4 w-full rounded-3xl bg-page text-page shadow-button hover:bg-page disabled:grayscale"
					>
						<p className="text-white">{isSubmitting ? "Submitting..." : "Submit"}</p>
					</Button>
				)}
			</form.Subscribe>
		</form>
	)
}

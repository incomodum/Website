import { ArrowUpRight, MailIcon } from "lucide-react"
import { motion } from "motion/react"
import members, { type Member } from "@/lib/members"
import Linkedin from "../icons/linkedin"

function MemberCard({ name, position, links, image, index, link }: Member & { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
			viewport={{ once: true }}
			role="listitem"
			className="group relative flex items-center gap-4.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-page/40 hover:bg-white/10 sm:gap-6 sm:p-5 lg:border-none lg:bg-transparent lg:p-4 lg:hover:bg-white/10"
		>
			{/* Avatar with Ring */}
			<div className="relative size-20 shrink-0 overflow-hidden rounded-full border-2 border-page/50 p-1 transition-all duration-300 group-hover:scale-105 group-hover:border-page sm:size-24">
				<img
					src={image}
					alt={name}
					className="h-full w-full rounded-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
				/>
			</div>

			{/* Content */}
			<address className="flex flex-col not-italic">
				<div className="mb-0.5">
					{link ? (
						<a href={link} className="font-bold text-lg tracking-tight transition-colors hover:text-page sm:text-xl">
							{name}
						</a>
					) : (
						<span className="font-bold text-lg tracking-tight sm:text-xl">{name}</span>
					)}
				</div>

				<p className="font-medium text-white/80 text-xs tracking-wide sm:text-sm">{position}</p>

				{/* Social Links */}
				<div className="mt-3 flex w-full flex-wrap gap-2">
					{links
						.filter((v) => v.type !== "site")
						.map((v) => (
							<a
								key={v.link}
								href={v.link}
								aria-label={v.type}
								data-wide={v.text !== undefined}
								className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-medium text-xs transition-all hover:border-page hover:bg-page hover:text-white"
							>
								{v.type === "linkedin" && <Linkedin className="size-3.5" />}
								{v.type === "email" && <MailIcon className="size-3.5" />}
								{v.text && <span className="hidden sm:inline-block">{v.text}</span>}
							</a>
						))}
				</div>
			</address>
		</motion.div>
	)
}

export default function ContactCards() {
	return (
		<div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 overflow-y-clip px-4 pt-12 pb-20 sm:gap-16 sm:px-6 sm:pt-24 lg:flex-row lg:justify-evenly lg:gap-62 lg:px-8 lg:pt-56 lg:pb-36">
			{/* Left Column: Connect Card */}
			<div className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
				{/* Glassmorphic Tilted Backdrop Card (Desktop) */}
				<motion.div
					initial={{ opacity: 0, x: -20, y: 20, rotate: -12 }}
					whileInView={{ opacity: 1, x: 0, y: 0, rotate: -7.12 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="absolute -top-20 z-[-2] hidden h-221.5 w-[70vw] max-w-225 rounded-t-3xl border border-border/40 bg-card/40 shadow-2xl backdrop-blur-xl lg:block"
				/>

				<motion.section
					aria-labelledby="lets-talk"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="my-20 flex w-full flex-col gap-6"
				>
					<h2
						id="lets-talk"
						className="flex w-full flex-row items-center justify-center font-bold font-sans text-3xl text-foreground lg:justify-start lg:text-4xl"
					>
						Let's&nbsp;<b className="text-page">Connect</b>
					</h2>

					{/* Glassmorphic Mobile Card Container / Transparent Desktop */}
					<div className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[33px] border border-border/40 bg-card/40 p-6 text-foreground shadow-xl backdrop-blur-xl sm:p-8 md:overflow-visible md:rounded-none lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
						<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-page/40 to-transparent lg:hidden" />

						<p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
							We’d love to collaborate! Connect with us on LinkedIn or send an email to get in touch regarding projects, partnerships,
							or inquiries.
						</p>

						<div className="flex flex-col gap-3.5">
							{/* Company LinkedIn Card */}
							<a
								href="https://www.linkedin.com/company/incomodum/"
								target="_blank"
								rel="noopener noreferrer"
								className="group relative flex items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-page/40 hover:bg-page/10 hover:shadow-lg hover:shadow-page/10"
							>
								<div className="flex items-center gap-3.5">
									<div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-page/20 bg-page/10 text-page transition-colors group-hover:bg-page group-hover:text-white">
										<Linkedin className="size-5" />
									</div>
									<div className="flex flex-col">
										<span className="font-bold text-base text-foreground transition-colors group-hover:text-page">
											LinkedIn Page
										</span>
										<span className="text-muted-foreground text-xs">Follow our updates & insights</span>
									</div>
								</div>
								<ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-page" />
							</a>

							{/* Direct Email Card */}
							<a
								href="mailto:lucasligas15@gmail.com"
								className="group relative flex items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-page/40 hover:bg-page/10 hover:shadow-lg hover:shadow-page/10"
							>
								<div className="flex items-center gap-3.5">
									<div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-page/20 bg-page/10 text-page transition-colors group-hover:bg-page group-hover:text-white">
										<MailIcon className="size-5" />
									</div>
									<div className="flex flex-col">
										<span className="font-bold text-base text-foreground transition-colors group-hover:text-page">Email Us</span>
										<span className="text-muted-foreground text-xs">lucasligas15@gmail.com</span>
									</div>
								</div>
								<ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-page" />
							</a>
						</div>
					</div>
				</motion.section>
			</div>

			{/* Right Column: Our Team */}
			<section aria-labelledby="our-team" className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
				{/* Original Tilted Backdrop Card (Desktop) */}
				<motion.div
					initial={{ opacity: 0, x: 20, y: 20, rotate: 12 }}
					whileInView={{ opacity: 1, x: 0, y: 0, rotate: 7.12 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="absolute -top-20 z-[-1] hidden h-221.5 w-[70vw] max-w-232.5 rounded-t-3xl bg-linear-to-br from-[#1C274C] to-[#6F4154] lg:block"
				/>

				<h2 id="our-team" className="flex flex-row items-center font-bold font-sans text-3xl text-foreground lg:hidden">
					Our&nbsp;<b className="text-page">Team</b>
				</h2>

				{/* Team Container */}
				<div
					role="list"
					aria-label="Members"
					className="relative flex w-full flex-col gap-4 rounded-[33px] bg-linear-to-br from-[#1C274C] to-[#6F4154] p-5 text-white shadow-2xl backdrop-blur-xl sm:gap-5 sm:p-8 lg:bg-none lg:p-0 lg:shadow-none"
				>
					<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent lg:hidden" />
					{members.map((v, idx) => (
						<MemberCard key={v.name} {...v} index={idx} />
					))}
				</div>
			</section>
		</div>
	)
}

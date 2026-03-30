import { MailIcon } from "lucide-react"
import { motion } from "motion/react"
import members, { type Member } from "@/lib/members"
import ContactUs from "./ContactUs"
import Linkedin from "./icons/linkedin"

function MemberCard({ name, position, links, image, index, link }: Member & { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
			viewport={{ once: true }}
			role="listitem"
			className="group relative flex items-center gap-5 rounded-2xl p-4 transition-colors hover:bg-white/5"
		>
			{/* Avatar with Ring */}
			<div className="relative size-24 shrink-0 overflow-hidden rounded-full border-2 border-page/50 p-1 group-hover:border-page">
				<img src={image} alt={name} className="h-full w-full rounded-full object-cover grayscale transition-all group-hover:grayscale-0" />
			</div>

			{/* Content */}
			<address className="flex flex-col not-italic">
				<div className="mb-0.5">
					{link ? (
						<a href={link} className="font-bold text-lg tracking-tight hover:text-page">
							{name}
						</a>
					) : (
						<span className="font-bold text-lg tracking-tight">{name}</span>
					)}
				</div>

				<p className="text-sm text-white/70 tracking-wider">{position}</p>

				{/* Social Links */}
				<div className="mt-3 flex w-full gap-2">
					{links
						.filter((v) => v.type !== "site")
						.map((v) => (
							<a
								key={v.link}
								href={v.link}
								aria-label={v.type}
								data-wide={v.text !== undefined}
								className="flex items-center gap-2 rounded-full bg-white/10 px-2 py-1 text-xs transition-all hover:bg-page hover:text-white"
							>
								{v.type === "linkedin" && <Linkedin className="size-3" />}
								{v.type === "email" && <MailIcon className="size-3" />}
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
		<div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-52 overflow-y-clip pt-56 pb-36 lg:flex-row lg:justify-evenly">
			<div className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
				<motion.div
					initial={{ opacity: 0, x: -20, y: 20, rotate: -12 }}
					whileInView={{ opacity: 1, x: 0, y: 0, rotate: -7.12 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="absolute -top-20 z-[-2] hidden h-221.5 w-[70vw] max-w-225 rounded-t-3xl bg-card lg:block"
				/>
				<motion.section
					aria-labelledby="lets-talk"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="flex w-full flex-col gap-6"
				>
					<h2
						id="lets-talk"
						className="flex w-full flex-row items-center justify-center font-bold font-sans text-3xl text-foreground lg:justify-start lg:text-4xl"
					>
						Let's&nbsp;<b className="text-page">Talk</b>
					</h2>
					<div className="flex w-full flex-col gap-5 rounded-[33px] bg-card p-7 text-foreground lg:bg-transparent lg:p-0">
						<ContactUs />
					</div>
				</motion.section>
			</div>
			<section aria-labelledby="our-team" className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
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
				<div
					role="list"
					aria-label="Members"
					className="flex w-full flex-col gap-5 rounded-[33px] bg-linear-to-br from-[#1C274C] to-[#6F4154] p-7 text-white lg:bg-none"
				>
					{members.map((v, idx) => (
						<MemberCard key={v.name} {...v} index={idx} />
					))}
				</div>
			</section>
		</div>
	)
}

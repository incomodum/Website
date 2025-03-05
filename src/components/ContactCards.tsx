import { motion } from "motion/react"
import ContactUs from "./ContactUs"
import Linkedin from "./icons/linkedin"
import { MailIcon } from "lucide-react"
import members, { type Member } from "@/lib/members"

function MemberCard({ name, position, links, image, index }: Member & { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
			viewport={{ once: true }}
			className="flex min-w-fit flex-row gap-6"
		>
			<div className="h-[121px] w-[121px] rounded-full border-[3px] border-page p-[3px]">
				<img width={121} height={121} src={image} alt={name} className="h-full w-full rounded-full bg-white" />
			</div>
			<div className="flex flex-col justify-center">
				<p className="font-bold text-lg">{name}</p>
				<p className="font-light">{position}</p>
				<div className="mt-2 flex flex-row md:flex-col">
					{links.map((v) => (
						<a key={v.link} href={v.link} aria-label={v.type} className="flex flex-row items-center">
							{v.type === "linkedin" && <Linkedin className="text-app" />}
							{v.type === "email" && <MailIcon className="text-app" />}
							&nbsp;
							<p className="hidden md:block">{v.text}</p>
						</a>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default function ContactCards() {
	return (
		<section className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-52 overflow-y-clip pt-56 pb-36 lg:flex-row lg:justify-evenly">
			<div className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
				<motion.div
					initial={{ opacity: 0, x: -20, y: 20, rotate: -12 }}
					whileInView={{ opacity: 1, x: 0, y: 0, rotate: -7.12 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="-top-20 absolute z-[-2] hidden h-[886px] w-[56vw] max-w-[900px] rounded-t-3xl bg-white lg:block"
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="flex w-full flex-col gap-6"
				>
					<h2 className="flex w-full flex-row items-center justify-center px-7 font-bold font-sans text-3xl text-foreground lg:justify-start lg:text-4xl">
						Let's&nbsp;<b className="text-page">Talk</b>
					</h2>
					<div className="flex w-full flex-col gap-5 rounded-[33px] bg-white p-7 text-foreground lg:bg-transparent lg:py-0">
						<ContactUs />
					</div>
				</motion.div>
			</div>
			<div className="relative flex w-full flex-col items-center gap-6 lg:w-[40%]">
				<motion.div
					initial={{ opacity: 0, x: 20, y: 20, rotate: 12 }}
					whileInView={{ opacity: 1, x: 0, y: 0, rotate: 7.12 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="-top-20 absolute z-[-1] hidden h-[886px] w-[43vw] max-w-[930px] rounded-t-3xl bg-linear-to-br from-[#1C274C] to-[#6F4154] lg:block"
				/>
				<h2 className="flex flex-row items-center font-bold font-sans text-3xl text-foreground lg:hidden">
					Our&nbsp;<b className="text-page">Team</b>
				</h2>
				<div className="flex w-full flex-col gap-5 rounded-[33px] bg-linear-to-br from-[#1C274C] to-[#6F4154] p-7 text-white lg:bg-none">
					{members.map((v, idx) => (
						<MemberCard key={v.name} {...v} index={idx} />
					))}
				</div>
			</div>
		</section>
	)
}

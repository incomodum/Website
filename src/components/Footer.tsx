import Logo from "./Logo"

export default function Footer() {
	return (
		<footer className="relative z-10 flex h-[136px] w-full flex-col items-center justify-end bg-[#1C274C]">
			<div className="flex h-auto w-full max-w-7xl grow flex-row items-center px-8">
				<div className="flex flex-col gap-1 text-white">
					<Logo light width={186} height={25} />
					<p className="text-[14px] text-white opacity-50">© {new Date().getFullYear()} All rights reserved</p>
				</div>
			</div>
			<div className="h-3 w-full bg-linear-to-r from-page to-[#6C4F9B]" />
		</footer>
	)
}

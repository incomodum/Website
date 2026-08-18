import { motion } from "motion/react"

export function AnimatedMascot() {
	return (
		<svg
			width="338"
			height="495"
			viewBox="0 0 338 495"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="mx-auto h-auto w-full max-w-[320px] overflow-visible"
		>
			<defs>
				<radialGradient
					id="paint0_radial_2138_1488"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(163 468) scale(163 27)"
				>
					<stop stopOpacity="0.2" />
					<stop offset="1" stopColor="#737373" stopOpacity="0" />
				</radialGradient>
			</defs>

			{/* 1. Dynamic Drop Shadow */}
			<motion.ellipse
				cx="163"
				cy="468"
				rx="163"
				ry="27"
				fill="url(#paint0_radial_2138_1488)"
				animate={{
					scaleX: [1, 0.85, 1],
					scaleY: [1, 0.85, 1],
					opacity: [0.9, 0.5, 0.9]
				}}
				transition={{
					duration: 2.2,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{ transformOrigin: "163px 468px" }}
			/>

			{/* 2. Feet (Grounded) */}
			<g id="feet">
				<path
					d="M90 398.5C90 381.655 103.655 368 120.5 368V368C137.345 368 151 381.655 151 398.5V407.474C151 413.287 146.287 418 140.474 418H100.526C94.7128 418 90 413.287 90 407.474V398.5Z"
					fill="#B82929"
				/>
				<path
					d="M187 398.5C187 381.655 200.655 368 217.5 368V368C234.345 368 248 381.655 248 398.5V407.474C248 413.287 243.287 418 237.474 418H197.526C191.713 418 187 413.287 187 407.474V398.5Z"
					fill="#B82929"
				/>
			</g>

			{/* 3. Bouncing Body & Head Assembly */}
			<motion.g
				animate={{
					y: [0, -18, 0],
					rotate: [-1.5, 1.5, -1.5],
					scaleY: [1, 1.02, 1],
					scaleX: [1, 0.98, 1]
				}}
				transition={{
					duration: 2.2,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{ transformOrigin: "169px 360px" }}
			>
				{/* 4. Antenna (Moved above Head in DOM so its extended stem overlaps behind head layer cleanly) */}
				<motion.g
					animate={{
						rotate: [-6, 6, -6]
					}}
					transition={{
						duration: 2.2,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					style={{ transformOrigin: "169px 90px" }}
				>
					{/* Extended height to 65px (was 59px) so stem inserts safely inside the head */}
					<rect x="162" y="31" width="14" height="65" fill="#8D1414" />
					<circle cx="169" cy="18" r="18" fill="#B82929" />
				</motion.g>

				{/* Lower Torso / Dark Red Base */}
				<path
					d="M254.513 333.488C254.252 366.624 227.178 393.274 194.042 393.013L141.998 392.602C108.862 392.341 82.2119 365.267 82.4733 332.131L83.0029 265L255.043 266.357L254.513 333.488Z"
					fill="#8D1414"
				/>

				{/* Main Red Head / Upper Body */}
				<path
					d="M0 150C0 116.863 26.8629 90 60 90H278C311.137 90 338 116.863 338 150V250C338 258.837 330.837 266 322 266H16C7.16345 266 0 258.837 0 250V150Z"
					fill="#B82929"
				/>

				{/* Face Visor */}
				<path d="M38 198C38 164.863 64.8629 138 98 138H240C273.137 138 300 164.863 300 198V266H38V198Z" fill="white" />

				{/* Eyes */}
				<rect x="122" y="177" width="19" height="50" rx="9.5" fill="#313131" />
				<rect x="197" y="176" width="19" height="50" rx="9.5" fill="#313131" />

				{/* Belt / Control Lights */}
				<rect x="103" y="290" width="132" height="54" rx="16" fill="#313131" />
				<circle cx="136.511" cy="316.511" r="10.5111" transform="rotate(-90 136.511 316.511)" fill="#B82929" />
				<circle cx="169" cy="316.511" r="10.5111" transform="rotate(-90 169 316.511)" fill="#FF8C00" />
				<circle cx="201.489" cy="316.511" r="10.5111" transform="rotate(-90 201.489 316.511)" fill="#6AB500" />
			</motion.g>
		</svg>
	)
}

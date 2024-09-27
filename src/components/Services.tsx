import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Card from "./ServiceCard"

export default function Services() {
	return (
		<div className="flex w-full flex-row items-center justify-center">
			<Carousel
				plugins={[
					Autoplay({
						delay: 5000
					})
				]}
				opts={{
					loop: true,
					breakpoints: {
						"(min-width: 768px)": { active: false }
					}
				}}
				className="mt-16 w-full max-w-full md:max-w-[1200px]"
			>
				<CarouselContent className="-ml-4">
					<CarouselItem className="flex w-full items-center justify-center pl-4 md:basis-1/3">
						<Card.MVP />
					</CarouselItem>
					<CarouselItem className="flex w-full items-center justify-center pl-4 md:basis-1/3">
						<Card.Custom />
					</CarouselItem>
					<CarouselItem className="flex w-full items-center justify-center pl-4 md:basis-1/3">
						<Card.Workflow />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	)
}

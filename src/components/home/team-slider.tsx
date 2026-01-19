"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import TeamCard from "./team-card";
import Autoplay from "embla-carousel-autoplay";
const TeamSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/4 md:basis-1/2 basis-[80%]"
            >
              <TeamCard key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* pagination */}
      <div className="text-text  text-body-xl flex items-center justify-center gap-1 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => api?.scrollTo(index)}
            key={index}
            className={`h-4 w-4 rounded-full ${
              index + 1 === current ? "bg-primary w-6" : "bg-gray-300 w-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamSlider;

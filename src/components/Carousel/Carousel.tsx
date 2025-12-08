// src/components/Carousel.tsx
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";

import slide1 from "@images/slide1.webp";
import slide2 from "@images/slide2.webp";
import slide3 from "@images/slide3.webp";
import slide4 from "@images/slide4.webp";

interface Slide {
  img: string;
  link: string;
}

const slides: Slide[] = [
  { img: slide1, link: "#" },
  { img: slide2, link: "#" },
  { img: slide3, link: "#" },
  { img: slide4, link: "#" },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelectCallback = () =>
      setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelectCallback);

    // Отложенное обновление индекса после инициализации
    requestAnimationFrame(() => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => {
      emblaApi.off("select", onSelectCallback);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <a href={slide.link}>
                <img src={slide.img} alt={`Slide ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === selectedIndex ? "dot--active" : ""}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "../../js/imageByIndex";
import "../../styles/carousel.css";
import Caption from "./intro";
const Carousel = (props) => {
  const { slides } = props;
  const emblaOptions = {
    loop: false,
  };

  const autoplayOptions = {
    delay: 5000,
    loop: true,
  };
  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="carousel-wrapper">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="relative">
                  <img
                    className="embla__slide__img brightness-[.3]"
                    src={imageByIndex(index)}
                    alt={"slide" + index}
                  />
                  <Caption index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

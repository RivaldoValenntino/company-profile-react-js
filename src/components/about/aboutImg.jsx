import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image1 from "../../images/img-1.webp";
const AboutImage = () => {
    return (
      <>
        <div className="about-founder md:col-span-1 md:w-3/4 mx-auto">
          <LazyLoadImage
            src={Image1}
            alt=""
            className="w-full rounded-xl shadow-xl shadow-black-100"
            effect="blur"
          />
        </div>
      </>
    );
}
export default AboutImage
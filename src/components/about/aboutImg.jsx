import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image1 from '../../images/img-1.jpg';
const AboutImage = () => {
    return (
        <>
         <div className="about-founder md:col-span-1 md:w-3/4 mx-auto">
          <LazyLoadImage src={Image1} alt="" className='w-full rounded-xl shadow-xl shadow-slate-400' effect='blur'/>
        </div>
        </>
    )
}
export default AboutImage
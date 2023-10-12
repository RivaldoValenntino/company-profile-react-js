import Image1 from '../images/img-1.webp';
import Image2 from '../images/img-2.webp';
import Image3 from '../images/img-3.webp';
import Image4 from '../images/img-4.webp';
import Image5 from '../images/img-5.webp';


export const images = [Image1, Image2, Image3, Image4, Image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
import Image1 from '../images/img-1.jpg';
import Image2 from '../images/img-2.jpg';
import Image3 from '../images/img-3.jpg';
import Image4 from '../images/img-4.jpg';
import Image5 from '../images/img-5.jpg';


export const images = [Image1, Image2, Image3, Image4, Image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
import Svg1 from '../../assets/svg-1.svg';
const ServiceSection = () => {
    return (
        <>
         <div className="lg:w-1/2 w-full lg:h-screen h-auto">
          <div className="intro flex flex-col px-5 lg:px-20 lg:py-12 py-5">
            <span className="text-rose-600 font-bold font-poppins py-2 lg:text-[1.5rem] text-[1rem] text-left">Our Services</span>
            <div className="description w-full tracking-widest">
              <span className="text-white lg:text-4xl text-[1.7rem] font-poppins font-thin text-left tracking-wide block">
                We offer the best services for you to grow your business
              </span>
            </div>
          <div className="img w-full py-10">
             <img src={Svg1} alt="" className='w-full rounded-3xl'/>
          </div>
          </div>
        </div>
        </>
    )
}

export default ServiceSection
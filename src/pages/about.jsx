import AboutComp from '../components/about/aboutComp';
import AboutImage from '../components/about/aboutImg';

const AboutPage = () => {
    return (
        <>
            <div className="container" id='about'>
                <section className="mt-5 lg:px-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <AboutComp/>
                    <AboutImage/>
                </section>
            </div>
        </>
    );
}

export default AboutPage;

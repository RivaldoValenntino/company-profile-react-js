import Accordion from '../components/service/accordion';
import ServiceSection from '../components/service/serviceComp';

const ServicesPage = () => {
  const accordionData = [
    {
      title: "Web Development",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur molestiae velit corporis odio distinctio explicabo commodi ad praesentium at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt adipisci inventore molestias beatae placeat doloremque quaerat quibusdam enim in.",
    },
    {
      title: "Mobile Development",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque architecto veniam eum ratione quibusdam natus nihil, dolorem qui porro?",
    },
    {
      title: "SEO (Search Engine Optimization)",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      title: "UI UX Design",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      title: "Digital Marketing",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic facilis magni reiciendis eaque sed blanditiis tempora corporis repellat quis?",
    },
  ]
  return (
    <div className="container" id='services'>
      <section className="services-section bg-[#101820] w-screen h-auto mt-20 lg:mt-10 lg:flex lg:flex-row flex-col items-center justify-center">
        <ServiceSection />
        <Accordion accordionData={accordionData} />
      </section>
    </div>
  );
};

export default ServicesPage;

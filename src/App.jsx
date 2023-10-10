import Header from "./components/header";
import Carousel from "./components/carousel/carousel";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio";
import Footer from "./components/footer";
const App = () => {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Header />
      <main>
        <section>
          <Carousel slides={SLIDES} />
          <AboutPage />
          <ServicesPage />
          <PortfolioPage />
          <Footer/>
        </section>
      </main>
    </>
  );
};

export default App;

import Header from "./components/header";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio";
import Footer from "./components/footer";
import Banner from "./components/banner/banner";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
          <AboutPage />
          <ServicesPage />
          <PortfolioPage />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;

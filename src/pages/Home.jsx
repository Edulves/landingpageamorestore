import NavBarH from "../components/NavBarH";
import Hero from "../components/componentshome/Hero";
import BrandingPhilosophy from "../components/componentshome/BrandingPhilosophy";
import OurProducts from "../components/componentshome/OurProducts";
import Footer from "../components/componentshome/Footer";

const Home = () => {
    return (
        <div>
            <NavBarH />
            <div>
                <Hero />
                <BrandingPhilosophy />
                <OurProducts />
                <Footer />
            </div>
        </div>
    );
};

export default Home;

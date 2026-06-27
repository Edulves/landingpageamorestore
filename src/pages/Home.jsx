import NavBarH from "../components/NavBarH";
import Hero from "../components/componentshome/Hero";
import BrandingPhilosophy from "../components/componentshome/BrandingPhilosophy";
import Destaques from "../components/componentshome/Destaques";

const Home = () => {
    return (
        <div>
            <NavBarH />
            <div className="mt-20">
                <Hero />
                <BrandingPhilosophy />
                <Destaques />
            </div>
        </div>
    );
};

export default Home;

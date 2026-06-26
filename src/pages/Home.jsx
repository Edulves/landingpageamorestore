import NavBarH from "../components/NavBarH";
import Hero from "../components/Hero";
import BrandingPhilosophy from "../components/BrandingPhilosophy";

const Home = () => {
    return (
        <div>
            <NavBarH />
            <div className="mt-20">
                <Hero />
                <BrandingPhilosophy />
            </div>
        </div>
    );
};

export default Home;

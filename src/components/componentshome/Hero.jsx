import heroimg from "../../assets/photos/photoHero.jpeg";

const Hero = () => {
    return (
        <section className="relative mt-30 mb-30 flex flex-col md:flex-row md:h-[90vh] md:mt-20 md:mb-0 w-full overflow-hidden items-center justify-evenly">
            <div className="relative z-10 px-20 max-w-360">
                <div className="max-w-xl">
                    <span className="text-xs leading-4 font-bold font-manrope uppercase text-primary tracking-[0.2em] mb-4 block">
                        Exclusividade Feminina
                    </span>
                    <h1 className="text-5xl leading-14 font-LibreCaslonText text-on-background mb-6 tracking-tight">Conforto, leveza e estilo</h1>
                    <p className="font-manrope text-lg leading-7 text-on-surface-variant mb-10 max-w-md">
                        Roupas femininas que unem conforto, beleza e um caimento que valoriza você. Encontre peças para se sentir bem em todos os
                        momentos.
                    </p>
                    <p className="font-manrope text-lg leading-7 text-on-surface-variant mb-10 max-w-md">
                        Nascemos do desejo de valorizar cada curva através de uma modelagem impecável. Para nós, a roupa é uma extensão da sua
                        confiança, e cada peça é pensada para abraçar a sua jornada com leveza e autoridade.
                    </p>
                    <div className="flex gap-4 font-manrope text-xs leading-4 font-bold tracking-widest">
                        <div className="bg-[#2D2D2D] text-white px-8 py-4 uppercase hover:bg-primary transition-all duration-300">
                            Pensado para você
                        </div>
                        <div className="border border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 uppercase hover:bg-[#2D2D2D] hover:text-white transition-all duration-300">
                            Explorar novas possibilidades
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 md:col-span-7 md:mt-0 order-1 md:order-2 relative">
                <div className="aspect-[0.56] w-full max-h-140 mb:max-h-150 overflow-hidden bg-surface-container-high rounded-sm">
                    <img
                        src={heroimg}
                        alt="Editorial portrait reflecting the essence of Amore Store"
                        class="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                    />
                </div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-fixed-dim/30 -z-10"></div>
            </div>
        </section>
    );
};

export default Hero;

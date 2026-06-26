const Hero = () => {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            <div className="relative z-10 px-20 max-w-360 mx-auto w-full">
                <div className="max-w-xl">
                    <span className="text-xs leading-4 font-bold font-manrope uppercase text-primary tracking-[0.2em] mb-4 block">
                        Exclusividade Feminina
                    </span>
                    <h1 className="text-5xl leading-14 font-LibreCaslonText text-on-background mb-6 tracking-tight">Elegância que Inspira</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md">
                        Uma curadoria sofisticada pensada para a mulher contemporânea que não abre mão do conforto e do caimento impecável. Descubra a
                        beleza em cada detalhe.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#2D2D2D] text-white px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-all duration-300">
                            Ver Coleção
                        </button>
                        <button className="border border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-[#2D2D2D] hover:text-white transition-all duration-300">
                            Explorar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

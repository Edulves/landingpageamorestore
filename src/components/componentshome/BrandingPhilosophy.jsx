const BrandingPhilosophy = () => {
    return (
        <section className="py-30 bg-surface-container-low">
            <div className="max-w-360 mx-auto px-10 mb:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                    <div className="aspect-4/5 bg-surface-container overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-primary-fixed-dim to-surface-container-high opacity-40 flex items-center justify-center p-10">
                            <p className="font-LibreCaslonText text-[32px] leading-10 italic text-primary text-center">
                                "A moda é a expressão da alma através do movimento."
                            </p>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 space-y-8">
                    <h2 className="font-LibreCaslonText text-4xl mb:text-5xl text-on-surface leading-tight">Moda feita para o seu movimento</h2>
                    <p className="font-manrope text-lg leading-7 text-on-surface-variant">
                        Na Amore Store, acreditamos que a verdadeira elegância reside na liberdade. Nossas peças são escolhidas a dedo com muito
                        carinho que refletem em peças com modelagens que respeitam a silhueta real, proporcionando um caimento que acompanha seu ritmo
                        sem restrições.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="font-manrope">
                            <p className="text-xl leading-7 tracking-[0.01em] font-semibold text-primary mb-2">Curadoria</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">Seleção rigorosa de cada peça garantindo a qualidade.</p>
                        </div>
                        <div className="font-manrope">
                            <p className=" text-xl leading-7 tracking-[0.01em] font-semibold text-primary mb-2">Design Real</p>
                            <p className=" text-on-surface-variant">Ajustes precisos para todos os tipos de corpos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingPhilosophy;

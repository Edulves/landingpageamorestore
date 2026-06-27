const Destaques = () => {
    return (
        <section class="py-30 bg-surface">
            <div class="max-w-360 mx-auto px-20">
                <div class="flex justify-between items-end mb-16">
                    <div>
                        <h2 class="font-LibreCaslonText text-[32px] text-on-surface">Destaques da Semana</h2>
                        <p class="font-manrope text-on-surface-variant mt-2">As peças mais desejadas da nossa última curadoria.</p>
                    </div>
                    <a
                        class="font-manrope text-xs uppercase text-primary border-b border-primary/20 hover:border-primary transition-all pb-1 font-bold tracking-widest leading-4"
                        href="#"
                    >
                        Ver Tudo
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div class="md:col-span-7 group cursor-pointer">
                        <div class="relative aspect-16/10 overflow-hidden mb-6">
                            <img
                                alt="Peça Destaque 1"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3bZt9wQVgtZ6FkCXN0gVwxHeyFsUVSLGHqyNkH1gyqIYRhUu7iOIv3f3Ozth1Si8eYCKouYwnPx0gx9s8gxWQi-AkF30FWTddUZrpr5gtxks_KV6mIuuSu6bzJPborJLbOCtJwf0zcBMUxY89VzbzGAILLY0VOsQ-GHHejFpOcoewHSPBWB6NZ1Bf9P9WcxiLAtXBma6yhHDtfQNbtPv_aqdABYsu8AFL58f1aH-OM6hZs8j7fWA98mQ7YV2Czh2RXMzANaRG6Lc"
                            />
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary-container text-on-primary-container px-3 py-1 font-label-sm text-[10px] uppercase tracking-tighter">
                                    Essencial
                                </span>
                            </div>
                        </div>
                        <h3 class="font-manrope text-xl tracking-wide leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                            Alfaiataria Moderna
                        </h3>
                        <p class="font-manrope leading-6 text-on-surface-variant">O equilíbrio perfeito entre o clássico e o ousado.</p>
                    </div>
                    <div class="md:col-span-5 flex flex-col gap-8">
                        <div class="group cursor-pointer">
                            <div class="relative aspect-4/3 overflow-hidden mb-4">
                                <img
                                    alt="Peça Destaque 2"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_hhYXoTy9rTIqwzA3thXKNXv-AevZxDJCvIHwC4PxPAHauje-PegEpG8AUufh27wwp8-A3dx8RacacXERwaP0MEhpJo0mU-bZUIN90r81ENsT4RvsTaqqGlA3ebuADLYn-_MtOvhrSM0R87sJGH8nmoi9e4FGByRjpCaevAW3BDkPmBMu6ZDYQ3CunECDPLLKt7v9pi4NAChn6wp0oq1oGyql1TIS9Q8j3b5-9pdX6V5Fe0E83RIPEiXGlTutJOFSw0_zLxOxPo"
                                />
                            </div>
                            <h3 class="font-manrope text-xl tracking-wide leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                                Leveza e Fluidez
                            </h3>
                            <p class="font-manrope leading-6 text-on-surface-variant">R$ 289,00</p>
                        </div>
                        <div class="group cursor-pointer">
                            <div class="relative aspect-4/3 overflow-hidden mb-4">
                                <img
                                    alt="Peça Destaque 3"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQMX0e5FpaFp8CYJN0lyLKp1NrrdSnkECLDTpFp5IP3bf9o0Sz2fhU6AA1N5-0Na9qAQL96NDaNYxH-QyU9HpNXxya1w0EzXg2lnPbxWCPT2eczMW73Ek2OGYUTTM-gBM4jPhTybmtpIXFfaZ7gfWLyJp_bovc9dfaxH3SRZXdGjrmrKjssZNuMeb-CpqLGG4rWKqM1_K5R-5bn7WFgtVcAioV3hSL9vCLirHj2b_q6uVQdBtxt22VyVVMRw7kdBHXX2F_LOiBtY"
                                />
                            </div>
                            <h3 class="font-manrope leading-6 tracking-wide font-semibold  text-on-surface group-hover:text-primary transition-colors">
                                Texturas Urbanas
                            </h3>
                            <p class="font-manrope leading-6 text-on-surface-variant">R$ 345,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destaques;

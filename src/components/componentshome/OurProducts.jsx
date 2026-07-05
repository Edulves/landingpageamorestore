import { photos } from "../../assets/photos/index.js";

const Destaques = () => {
    return (
        <section className="py-30 bg-surface">
            <div className="max-w-360 mx-auto px-5 mb:px-20 mb:px-20 relative">
                <div className="flex justify-around mb:justify-between items-end mb-16">
                    <div>
                        <h2 className="font-LibreCaslonText text-[32px] text-on-surface">Nossos produtos</h2>
                        <p className="font-manrope text-on-surface-variant mt-2">As peças mais desejadas do momento.</p>
                    </div>
                </div>
                <div className="max-w-6xl m-auto grid grid-cols-3 gap-2 mb:gap-8">
                    <div className="col-span-1 flex flex-col gap-2 mb:gap-8 cursor-pointer rounded overflow-hidden">
                        <div className="relative aspect-10/10 overflow-hidden">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_60%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoOne}
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label-sm text-[10px] uppercase tracking-tighter">
                                    Essencial
                                </span>
                            </div>
                        </div>
                        <div className="relative aspect-8/10 overflow-hidden rounded">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoFour}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2 mb:gap-8 cursor-pointer rounded overflow-hidden mt-10">
                        <div className="relative aspect-8/10 overflow-hidden rounded">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoThree}
                            />
                        </div>
                        <div className="relative aspect-9/10 overflow-hidden rounded">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoSeven}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2 mb:gap-8  cursor-pointer rounded overflow-hidden mt-20">
                        <div className="relative aspect-8/10 overflow-hidden rounded">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoTwo}
                            />
                        </div>
                        <div className="relative aspect-9/10 overflow-hidden rounded">
                            <img
                                alt="Peça Destaque 1"
                                className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
                                src={photos.photoSix}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destaques;

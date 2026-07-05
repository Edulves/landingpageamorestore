import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    return (
        <footer className="bg-surface-container w-full pt-15 md:pt-20 pb-10">
            <div className="max-w-360 mx-auto px-10 md:px-20 flex flex-col md:block justify-between">
                <div className="flex flex-col mb-5 md:mb-0 gap-6 max-w-75">
                    <h2 className="font-LibreCaslonText ">
                        <span className="flex flex-col gap-2">
                            <p className="text-surface-tint text-[32px]">Amore Store</p>
                            <p className="leading-6 font-manrope text-secondary">
                                Elegância para todas as mulheres através de uma curadoria exclusiva de moda contemporânea.
                            </p>
                        </span>
                    </h2>
                </div>
                <div>
                    <h4 className="mb-6 text-xl font-manrope font-semibold">Siga-nos</h4>
                    <div className="flex group gap-3 items-center">
                        <a
                            class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary group-hover:border-primary group-hover:text-primary transition-all hover:scale-120"
                            href="https://www.instagram.com/amore.store.moda/"
                            target="blank"
                        >
                            <InstagramIcon fontSize="medium" />
                        </a>
                    </div>
                    <p className="mt-8 font-body-md text-body-md text-secondary">
                        Rua da Acácia Amarela - nº6 - Gleba E
                        <br />
                        Camaçari - BA
                    </p>
                </div>
            </div>
            <div className="max-w-360 mx-auto px-20 mt-15 pt-8 border-t border-outline-variant flex flex-col justify-between text-secondary text-xs font-bold font-manrope tracking-widest">
                <p>© 2026 Amore Store. Elegância para todas as mulheres.</p>
            </div>
        </footer>
    );
};

export default Footer;

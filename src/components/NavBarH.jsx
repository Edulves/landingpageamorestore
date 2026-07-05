const NavBarH = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
            <div className="flex justify-center md:justify-between items-center w-full px-20 max-w-360 mx-auto h-20">
                <div className="">
                    <nav className="">
                        <a class="text-[32px] font-LibreCaslonText text-primary">Amore Store</a>
                    </nav>
                </div>
                <div className="hidden items-center gap-6 md:flex">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors duration-300">
                        search
                    </button>
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors duration-300">
                        person
                    </button>
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors duration-300">
                        shopping_bag
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBarH;

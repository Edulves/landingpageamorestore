const NavBarH = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
            <div className="flex justify-between items-center w-full px-margin-desktop max-w-360 mx-auto h-20">
                <div className="flex items-center gap-8">
                    <img
                        alt="Amore Store Logo"
                        className="h-12 w-auto object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc3LK6kfkLLkOFUH0h9xKFu9OS96g85z3vWmUyjUPMt_1L8GPFEbnODRjFvx8mZpCbiNIJyI4dvIA7MfKUjSYL_s3cqhg5_GZxtvAPMyzEGLKgj9PiC8ocviRHkiNpeWAQNm6Id89fuv61-JOTaTqYzewbwESaFRyHIFHq35ZIvcnnlq9Ep-7bp_GPVqtMxMdR9uXYo3b2P6DoF4yXz5LvgeMhA_PD16NEKi0pAyU-BzkvJTaqcWEk8ZlLA89bd83YYjEhuo8pmQ8"
                    />
                    <nav className="hidden text-lg font-Inter uppercase tracking-wider md:flex items-center gap-6">
                        <a className=" text-primary border-b border-primary pb-1 transition-colors duration-300" href="#">
                            Home
                        </a>
                        <a className=" text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                            Nova Coleção
                        </a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                            Sobre Nós
                        </a>
                        <a className=" text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                            Contato
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
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

import { useState, useEffect, useCallback, type JSX } from "react";
import DropdownMenu from './DropdownMenu'
import FullMenu from './FullMenu'
import HamburgerMenu from './HamburgerMenu'
import { Link } from "react-router";





const Header = () : JSX.Element => {
    const [dropMenu, setDropMenu] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const toggleMenu = () => setDropMenu(prev => !prev)

    // Cerrar menú cuando la pantalla sea grande
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
           setIsLargeScreen(e.matches);
           if (e.matches) setDropMenu(false);
        };

        mediaQuery.addEventListener("change", handleResize);
        handleResize(mediaQuery);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    // Cerrar menú con tecla "Escape"
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setDropMenu(false);
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);


    return (

        <div className="bg-base-100 shadow-sm mb-10">
            <div className="navbar">
                <div className="flex-1">
                    <Link to="/" onClick={() => setDropMenu(false)} className="btn btn-ghost text-xl">TicTacToe</Link>
                </div>

                {isLargeScreen ? <FullMenu/> : <HamburgerMenu onClick={toggleMenu}/>}


            </div>

            {/* expandir navbar hacia abajo */}
            {dropMenu && <DropdownMenu onClick={toggleMenu} />}

        </div>

    );
};

export default Header;
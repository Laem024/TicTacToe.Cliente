import type { JSX } from "react";

type Props={
    onClick: () => void;
}

const HamburgerMenu = ({onClick} : Props): JSX.Element => {
    return(
        <div className="flex-none">

            <button
                onClick={onClick}
                className='btn btn-square btn-ghost cursor-pointer'
                aria-label="Abrir menú" 
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    );
}

export default HamburgerMenu;
import type { JSX } from "react";
import { Link } from "react-router";

import { MENU_OPTIONS } from "./MENU_OPCTIONS";

type Props = {
    onClick: () => void
}

const DropdownMenu = ({ onClick }: Props): JSX.Element => (
    <div className="bg-base-100 border-t border-base-300 justify-center">
        {
            MENU_OPTIONS.map((item) => (
                <Link to={item.route} key={item.name} onClick={onClick} className="block py-2 btn btn-ghost w-screen">{item.name}</Link>
            ))
        }
    </div>
);

export default DropdownMenu;
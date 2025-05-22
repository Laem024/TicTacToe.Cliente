import { Link } from "react-router";
import type { JSX } from "react";

import { MENU_OPTIONS } from "./MENU_OPCTIONS";


const FullMenu = () : JSX.Element => {
    const letfItems = MENU_OPTIONS.filter(item => item.group === "left");
    const rightItems = MENU_OPTIONS.filter(item => item.group === "right");

    return (
        <div className="flex flex-row w-screen justify-between">

            <div className="w-auto flex flex-row gap-2">
                {
                    letfItems.map(item => (
                        <Link to={item.route} className="btn btn-ghost text-xl">{item.name}</Link>
                    ))
                }
            </div>

            <div className="w-auto flex flex-row">
                {
                    rightItems.map(item => (
                        <Link to={item.route} className="btn btn-ghost text-xl">{item.name}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default FullMenu;
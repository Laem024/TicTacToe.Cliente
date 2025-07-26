import type { JSX } from "react";

const AuthHeader = ({encabezado}:{encabezado:string}) : JSX.Element => (
    <>
        <h2 className="text-center mt-1">{encabezado}</h2>
        <div className="text-center mb-1" >Tic Tac Toe</div>
    </>
);

export default AuthHeader;
import type { JSX } from "react";
import avatar from "../../../assets/img/avatar.png"

const LoginAvatar = () : JSX.Element => (
    <figure>
        <img
            src={avatar}
            alt="avatar.png"
            className="
                w-[15rem]
                h-[15rem]
                my-1
                rounded-full
                object-cover
                md:w-[20rem]
                md:h-[20rem]
                "
        />
    </figure>
);

export default LoginAvatar;
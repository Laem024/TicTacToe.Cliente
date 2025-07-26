import LoginAvatar from "./LoginAvatar";
import PasswordInput from "./PasswordInput";
import type { JSX } from "react";
import EmailInput from "./EmailInput";

const LoginForm = () : JSX.Element => {
    return (
        <form className="border-4 border-double p-4 border-[#516276]">
            <div className="card bg-base-100 w-70 md:w-96 shadow-sm">

                <LoginAvatar />

                <div className="card-body">

                    <EmailInput />

                    <PasswordInput />

                    <div className="card-actions justify-center mt-5">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default LoginForm;
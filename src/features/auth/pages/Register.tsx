import type { JSX } from "react";
import AuthHeader from "../components/AuthHeader";
import RegisterForm from "../components/RegisterForm";

const Register = (): JSX.Element => {
    return (
        <div className="container">
            <div className="row w-screen">
                <div className="flex flex-col justify-around items-center md:flex-row">
                    <div >
                        <AuthHeader encabezado="Register Form" />
                    </div>
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
import AuthHeader from "../components/AuthHeader"
import LoginForm from "../components/LoginForm"
import type { JSX } from "react"


const Login = () : JSX.Element => {
    return (
        <div className="container">
            <div className="row w-screen">
                <div className="flex flex-col justify-around items-center md:flex-row">
                    <div >
                        <AuthHeader encabezado='Login Form' />
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
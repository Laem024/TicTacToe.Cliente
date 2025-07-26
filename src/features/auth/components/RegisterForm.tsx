import LoginAvatar from "./LoginAvatar";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import { useState, type FormEvent, type JSX } from "react";
import EmailInput from "./EmailInput";

const RegisterForm = (): JSX.Element => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
    };

    return (
        <form className="border-4 border-double p-4 border-[#516276]" onSubmit={handleSubmit}>
            <div className="card bg-base-100 w-70 md:w-96 shadow-sm">

                <LoginAvatar />

                <div className="card-body">

                    <EmailInput />

                    <UsernameInput />

                    <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Password */}

                    <ConfirmPasswordInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> {/* Confirmar Password */}

                    {error && (
                        <p className="text-red-500 text-sm mt-2 text-center">
                            {error}
                        </p>
                    )}

                    <div className="card-actions justify-center mt-5">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default RegisterForm;
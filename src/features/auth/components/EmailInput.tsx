import type { JSX } from "react";

const EmailInput = () : JSX.Element => (
    <div>
        <label htmlFor="username" className="input validator mb-0">
           <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="M4 4h16v16H4z" fill="none" />
                    <path d="M4 4l8 8 8-8" />
                </g>
            </svg>
            <input
                type="email"
                id="email"
                required
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                minLength={3}
                maxLength={30}
                title="Digite un email valido"
            />
        </label>
        <p className="validator-hint hidden">
            Debe ser un correo valido.
            <br />like <code>example@domain.com</code>
        </p>

    </div>
)

export default EmailInput;
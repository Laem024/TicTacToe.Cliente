import type { JSX } from "react";

const UsernameInput = () : JSX.Element => (
    <div>
        <label htmlFor="username" className="input validator mb-0">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </g>
            </svg>
            <input
                type="text"
                id="username"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-_]*"
                minLength={3}
                maxLength={30}
                title="Only letters, numbers or dash"
            />
        </label>
        <p className="validator-hint hidden">
            Must be 3 to 30 characters
            <br />containing only letters, numbers or dash
        </p>

    </div>
)

export default UsernameInput;
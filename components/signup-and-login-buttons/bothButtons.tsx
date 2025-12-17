'use client';
import { useState } from 'react';

const Modal = ({myString, shouldOpen}: {myString: string, shouldOpen: boolean}) => {
    if (!shouldOpen) return null;

    return (
        <div>{myString}</div>
    )
}

export function Signup() {
    const [open, setOpen] = useState(false);
    const signUpstring: string = "Sign Up";

    return (
        <button onClick={() => setOpen(true)}>
            <Modal myString={signUpstring} shouldOpen={open} />
            {signUpstring}
        </button>
    );
}

export function Login() {
    const [open, setOpen] = useState(false);
    const loginString: string = "Log In";

    return (
        <div>Hello, React</div>
    );
}
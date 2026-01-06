'use client';
import { useState } from 'react';

type ModelProps = {
    onClose: () => void;
    title: string;
}

const Model = ({onClose, title}: ModelProps) => {
    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-100 w-1/2 p-8 rounded-lg shadow-lg border-2 border-black z-50'>
            <h2 className='text-xl font-bold mb-4'>{title}</h2>
            <button onClick={onClose} className='mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer'>
                Close
            </button>
        </div>
    );
}

export function Signup() {
    const [open, setOpen] = useState(false);
    const title = "Sign Up";
    
    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <button className="text-sm font-semibold w-18 h-9 cursor-pointer" onClick={() => setOpen(true)}>
                Sign Up
            </button>

            {open && <Model onClose={onClose} title={title} />}
        </>
    );
}

export function Login() {
    const [open, setOpen] = useState(false);
    const title = "Log In";

    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <button className="text-sm font-semibold bg-black rounded-full text-white w-18 h-9 cursor-pointer" onClick={() => setOpen(true)}>
                Log In
            </button>

            {open && <Model onClose={onClose} title={title} />}
        </>
    );
}
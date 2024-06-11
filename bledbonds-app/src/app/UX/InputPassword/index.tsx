'use client'

import EyeClose from "@/app/Icons/eyeClose";
import EyeOpen from "@/app/Icons/eyeOpen";
import { useState } from "react";

interface ImputProps {
    label: string;
    value: string;
    isValueValid?: boolean;
    onChange: (value: string) => void;
    divClassName?: string;
}

export default function InputPassword(props: Readonly<ImputProps>) {
    const { label, value, onChange } = props;

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="mb-3 w-full">
            <label className="text-palette-11 w-full">{label}</label>
            <div className="relative w-full">
                <div className={`flex flex-col ${props.divClassName}`}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className={`p-2 rounded-lg border-solid border-2 ${props.isValueValid ? 'border-palette-7 text-palette-7 focus:border-palette-7' : 'border-red-500 text-red-500 focus:border-red-500'} w-full focus:outline-none`}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-palette-11"
                >
                    <div className="flex">
                        {showPassword ? <EyeOpen/> : <EyeClose/>}
                    </div>
                </button>
            </div>
        </div>
    );
}
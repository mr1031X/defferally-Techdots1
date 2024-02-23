import { useState } from 'react';

interface RadioButtonProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    required?: boolean; // Add the required prop to the interface
}

export default function Radio({ label, value, checked, onChange, required }: RadioButtonProps) {
    const handleOnChange = () => {
        if (!checked) {
            onChange(value);
        }
    };

    return (
        <label className="flex items-center">
            <input
                type="radio"
                className="relative float-left mt-0.5 mr-3 h-5 w-5 appearance-none rounded-full border-2
                border-solid focus:outline-none before:bg-white cursor-pointer
                checked:bg-transparent checked:border-gray-500 before:pointer-events-none
                before:absolute before:h-3 before:w-3 checked:before:bg-gray-500 before:rounded-full before:left-0.5 before:top-0.5"
                value={value}
                checked={checked}
                onChange={handleOnChange}
                required={required} // Use the required prop for the input element
                
            />
            <span>{label}</span>
        </label>
    );
}

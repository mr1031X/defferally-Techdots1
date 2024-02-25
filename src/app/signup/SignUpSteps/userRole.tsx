'use client';

import Radio from '@/src/components/Radio'
import Button from '@/src/components/Buttons/button';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { UserRoleInputs } from "@/src/interfaces/users/index";
import forwardArrow from '@/public/forwardArrow.svg'
interface SignUpInfoProps {
    onSubmit: (data: object, step: number) => void;
    loading: boolean;
  }

export default function Role({ onSubmit, loading }: SignUpInfoProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRoleInputs>();

    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <form onSubmit={handleSubmit((data: UserRoleInputs) =>
            onSubmit(data, 1),
        )}>
            <div className='flex flex-col'>
                <span className='my-5'>Choose your role</span>
                <div className='grid gap-3'>
                    <Radio
                        label="QI"
                        value="QI"
                        checked={selectedOption === 'QI'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Radio
                        label="Wealth Manager"
                        value="Wealth Manager"
                        checked={selectedOption === 'Wealth Manager'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Radio
                        label="Real Estate Broker"
                        value="Real Estate Broker"
                        checked={selectedOption === 'Real Estate Broker'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Radio
                        label="Investor"
                        value="Investor"
                        checked={selectedOption === 'Investor'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Radio
                        label="Lawyer"
                        value="Lawyer"
                        checked={selectedOption === 'Lawyer'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Radio
                        label="CPA"
                        value="CPA"
                        checked={selectedOption === 'CPA'}
                        onChange={handleOptionChange}
                        required
                    />
                    <Button
                        type="submit"
                        text="Next Step"
                        disabled={loading}
                        className='mt-2'
                        iconAfter={forwardArrow}
                    />
                </div>
            </div>
        </form>
    )
}

'use client';
import { useForm } from "react-hook-form";
import Button from '@/components/Buttons/button';
import Input from '@/components/Input';
import React, { useState } from 'react'
import { UserPasswordInputs } from "@/interfaces/users/index";
import forwardArrow from '@/public/forwardArrow.svg'

interface SignUpPasswordProps {
    onSubmit: (data: object, step: number) => void;
    loading: boolean;
}

export default function UserPassword({ onSubmit, loading }: SignUpPasswordProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserPasswordInputs>();
    const [, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <form onSubmit={handleSubmit((data: UserPasswordInputs) =>
            onSubmit(data, 3),
        )}>
            <div className='flex flex-col'>
                <span className='my-5'>Fill the info</span>
                <div className='grid'>
                    <Input
                        type="password"
                        placeholder="Password"
                        showPassword={togglePasswordVisibility}
                        title="Password"
                        name="password"
                        register={register}
                        errors={errors}
                        requiredSign={false}
                        validationRules={{ required: true }} />
                           <Button
                        type="submit"
                        text="Register"
                        disabled={loading}
                        className='mt-2'
                        iconAfter={forwardArrow}
                    />
                </div>
            </div>
        </form>
    )
}

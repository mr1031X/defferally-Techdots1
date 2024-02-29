'use client';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import React from 'react'
import { useForm } from "react-hook-form";
import { UserInformationInputs } from "@/src/interfaces/request/user";
import forwardArrow from '@/public/forwardArrow.svg'

interface SignUpInfoProps {
    onSubmit: (data: object, step: number) => void;
    loading: boolean;
}

export default function UserInfo({ onSubmit, loading }: SignUpInfoProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInformationInputs>();

    return (
        <form onSubmit={handleSubmit((data: UserInformationInputs) =>
            onSubmit(data, 2),
        )}>
            <div className='flex flex-col'>
                <span className='my-5'>Fill the info</span>
                <div className='grid'>
                    <Input
                        type="text"
                        placeholder="Enter Name"
                        title='Full Name'
                        name="full_name"
                        register={register}
                        errors={errors}
                        requiredSign={false}
                        className='mb-5'
                    />
                    <Input
                        type="email"
                        placeholder="example@gmail.com"
                        title='Email'
                        name="email"
                        register={register}
                        errors={errors}
                        requiredSign={false}
                        className='mb-5'
                    />
                    <Input
                        type="text"
                        placeholder="Enter Company Name"
                        title='Company Name'
                        name="company_name"
                        register={register}
                        errors={errors}
                        requiredSign={false}
                        className='mb-5'
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

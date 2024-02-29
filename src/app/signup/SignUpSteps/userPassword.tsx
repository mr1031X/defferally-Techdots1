'use client';
import { useForm } from 'react-hook-form';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import React, { useState } from 'react';
import { UserPasswordInputs } from '@/src/interfaces/request/user';
import forwardArrow from '@/public/forwardArrow.svg';

interface SignUpPasswordProps {
  onSubmit: (data: object, step: number) => void;
  loading: boolean;
}

export default function UserPassword({
  onSubmit,
  loading,
}: SignUpPasswordProps) {
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
    <form
      onSubmit={handleSubmit((data: UserPasswordInputs) => onSubmit(data, 4))}
    >
      <div className="flex flex-col">
        <span className="my-5">Fill the info</span>
        <div className="grid">
          <Input
            type="password"
            placeholder="Password"
            showPassword={togglePasswordVisibility}
            title="Password"
            name="password"
            register={register}
            errors={errors}
            requiredSign={false}
            validationRules={{
              required: 'Password is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long',
              },
            }}
          />
          <ul className='ml-1 mt-2'>
            <li className='text-xs mb-1'>A-Z {`(Uppercase)`}</li>
            <li className='text-xs mb-1' >a-z {`(lowercase)`}</li>
            <li className='text-xs mb-1'>0-9 {`(Numbers)`}</li>
            <li className='text-xs mb-1'>Special symbols {`(@ # $)`}</li>
            <li className='text-xs mb-1'>Atleast 8 characters {`(@ # $)`}</li>
          </ul>
          <Button
            type="submit"
            text="Register"
            disabled={loading}
            className="mt-2"
            iconAfter={forwardArrow}
          />
        </div>
      </div>
    </form>
  );
}

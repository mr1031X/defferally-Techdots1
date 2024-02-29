'use client';
import Button from '@/src/components/Buttons/button';
import React, { useState } from 'react';
import { AuthService } from '@/src/network/auth';
import { useForm } from 'react-hook-form';
import { Login } from '@/src/interfaces/request/user';
import Input from '@/src/components/Input';

interface SignInProps {
  onSubmit: (data: Login) => void;
  loading: boolean;
}
export default function LoginForm({ onSubmit, loading }: SignInProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const [, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <form onSubmit={handleSubmit((data: Login) => onSubmit(data))}>
        <div className="flex flex-col">
          <div className="grid">
            <Input
              type="email"
              placeholder="example@gmail.com"
              title="Email"
              name="email"
              register={register}
              errors={errors}
              requiredSign={false}
              className="mb-2"
              validationRules={{
                required: 'Email is required',
                maxLength: 30,
              }}
            />
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
              }}
            />
            <Button
              type="submit"
              text="Login"
              disabled={loading}
              className="mt-2"
            />
          </div>
        </div>
      </form>
    </>
  );
}

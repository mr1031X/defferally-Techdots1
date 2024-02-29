'use client';
import Radio from '@/src/components/Radio';
import Button from '@/src/components/Buttons/button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserRoleInputs } from '@/src/interfaces/request/user';
import forwardArrow from '@/public/forwardArrow.svg';
interface SignUpInfoProps {
  onSubmit: (data: object, step: number) => void;
  loading: boolean;
}

export default function Role({ onSubmit, loading }: SignUpInfoProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserRoleInputs>();

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <form onSubmit={handleSubmit((data: UserRoleInputs) => onSubmit(data, 2))}>
      <div className="flex flex-col">
        <span className="my-5">Choose your role</span>
        <div className="grid gap-3">
          <Radio
            label="QI"
            value="QI"
            checked={selectedOption === 'QI'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="Wealth Manager"
            value="WEALTH_MANAGER"
            checked={selectedOption === 'WEALTH_MANAGER'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="Real Estate Broker"
            value="REAL_ESTATE_BROKER"
            checked={selectedOption === 'REAL_ESTATE_BROKER'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="Investor"
            value="INVESTOR"
            checked={selectedOption === 'INVESTOR'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="Lawyer"
            value="Lawyer"
            checked={selectedOption === 'Lawyer'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="CPA"
            value="CPA"
            checked={selectedOption === 'CPA'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Radio
            label="Other"
            value="OTHER"
            checked={selectedOption === 'OTHER'}
            onChange={handleOptionChange}
            name="role"
            register={register}
            validationRules={{
              required: 'Role is required',
            }}
          />
          <Button
            type="submit"
            text="Next Step"
            disabled={loading}
            className="mt-2"
            iconAfter={forwardArrow}
          />
        </div>
      </div>
    </form>
  );
}

'use client';
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import { useForm } from 'react-hook-form';
import Select from '@/src/components/Selector';

const Role = [
    { value: 1, label: 'Qualified intermediate' },
    { value: 2, label: 'Bachelors' },
    { value: 3, label: 'Masters' },
  ];
export default function EditParty() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCategoryChange = (selectedCategory: number) => {
    setValue('=== role ===', selectedCategory);
  };

  const onSubmit = (data: any) => {
    // Handle form submission
  };

  return (
    <>
<div className="fixed z-[100] mt-[-7rem] h-[115vh] w-full bg-black opacity-20" style={{ backdropFilter: 'blur(4px)' }}></div>
      <div className="fixed z-[101] w-1/3 ml-[22%] rounded-lg bg-white p-5">
        <div className="flex justify-end">
          <XMarkIcon className="h-5 w-5" />
        </div>
        <div className="mb-5">
          <span className="text-lg font-semibold">Edit party</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
          <Select
              name="role"
              errors={errors}
              label="Role"
              options={Role}
              setSelectedValueProp={handleCategoryChange}
              // defaultValue={signUpData?.user?.experience}
              className="w-full cursor-pointer text-lg"
            />
          </div>
          <div className="mb-5 grid grid-cols-2 gap-5">
            <Input
              type="text"
              placeholder="Enter Name"
              title="First Name"
              name="first_name"
              register={register}
              errors={errors}
              requiredSign={false}
            />
            <Input
              type="text"
              placeholder="Enter Name"
              title="Last Name"
              name="last_name"
              register={register}
              errors={errors}
              requiredSign={false}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Input
              type="text"
              placeholder="Enter Email"
              title="Email"
              name="email"
              register={register}
              errors={errors}
              requiredSign={false}
            />
            <Input
              type="text"
              placeholder="Enter Phone"
              title="Phone"
              name="phone"
              register={register}
              errors={errors}
              requiredSign={false}
            />
          </div>
          <div className="flex gap-2 items-center mt-5">
            <button
              type="button"
              className="rounded-3xl border border-black px-4 h-10 hover:bg-gray-100"
            >
              Cancel
            </button>
            <Button
              type="submit"
              text="Save changes"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
}

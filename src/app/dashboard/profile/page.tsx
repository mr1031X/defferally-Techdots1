"use client";
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '@/src/components/Selector';


const Role = [
  { value: 1, label: 'Qualified intermediate' },
  { value: 2, label: 'Bachelors' },
  { value: 3, label: 'Masters' },
];

export default function Profile() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [, setShowPassword] = useState<boolean>(false);

  const onSubmit = async (data: any) => {};
  const handleCategoryChange = (selectedCategory: number) => {
    setValue('=== role ===', selectedCategory);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
};

  return (
    <div className="px-10">
      <h1 className="py-5 text-2xl font-semibold text-gray-700">Profile</h1>
      <div className="ml-[-14px] flex items-center">
        <svg viewBox="0 0 24 24" fill="#6B7280" className="h-[10rem] w-[10rem]">
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="grid gap-2">
          <span className="text-lg font-semibold text-gray-700">Josh Doe</span>
          <span className="text-md font-normal text-gray-600">
            Qualified intermediate
          </span>
        </div>
      </div>
      <div className="border-b border-gray-400 py-2"></div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div className="col-span-1 grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Enter First Name"
              title="First Name"
              name="first_name"
              register={register}
              errors={errors}
              requiredSign={false}
              className="col-span-2 mb-5"
            />
            <Input
              type="text"
              placeholder="Enter Last Name"
              title="Last Name"
              name="last_name"
              register={register}
              errors={errors}
              requiredSign={false}
              className="col-span-2"
            />
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="example@gmail.com"
              title="Email"
              name="email"
              register={register}
              errors={errors}
              requiredSign={false}
              className="col-span-2 mb-5"
            />
            <Input
              type="text"
              placeholder="Enter Phone Number"
              title="Phone"
              name="phone_number"
              register={register}
              errors={errors}
              requiredSign={false}
              className="col-span-2"
            />
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Enter Company Name"
              title="Company Name"
              name="company_name"
              register={register}
              errors={errors}
              requiredSign={false}
              className="col-span-2"
            />
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
          <Button
            type="submit"
            text="Save changes"
            disabled={loading}
            className="col-span-2"
          />
        </form>
      </div>
        <div className="border-b border-gray-400 py-2"></div>
      <div className='grid grid-cols-4 mt-6'>
      <form>
        <div className='mb-5'>
        <Input
          type="password"
          placeholder="Password"
          showPassword={togglePasswordVisibility}
          title="Current Password"
          name="password"
          register={register}
          errors={errors}
          requiredSign={false}
          validationRules={{ required: true }}
        />
        </div>
        <Input
          type="password"
          placeholder="Password"
          showPassword={togglePasswordVisibility}
          title="New Password"
          name="password"
          register={register}
          errors={errors}
          requiredSign={false}
          validationRules={{ required: true }}
        />
         <Button
            type="submit"
            text="Save changes"
            disabled={loading}
            className="col-span-2 mt-5"
          />
      </form>
      </div>
    </div>
  );
}

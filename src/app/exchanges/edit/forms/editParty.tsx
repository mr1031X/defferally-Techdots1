'use client';
import React, { useState } from 'react';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import { useForm } from 'react-hook-form';
import Select from '@/src/components/Selector';
import Modal from '@/src/components/Modal';

const Role = [
  { value: 1, label: 'Qualified intermediate' },
  { value: 2, label: 'Bachelors' },
  { value: 3, label: 'Masters' },
];
export default function EditParty({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCategoryChange = (selectedCategory: number) => {};

  const onSubmit = (data: any) => {
    // Handle form submission
  };

  return (
    <>
      <Modal onClose={onClose}>
        <div className="mb-5">
          <span className="text-xl font-semibold">Edit party</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
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
          <div className="mt-5 flex items-center gap-2">
            <button
              type="button"
              className="h-10 rounded-3xl border border-black px-4 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <Button type="submit" text="Save changes" disabled={loading} />
          </div>
        </form>
      </Modal>
    </>
  );
}

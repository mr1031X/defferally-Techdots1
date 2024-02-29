'use client';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '@/src/components/Selector';
import { Role } from '@/src/mocks/common';
import { AuthService } from '@/src/network/auth';
import { UpdateUser } from '@/src/interfaces/request/user';
import Layout from '@/src/components/Layouts/dashboardLayout';
import Loader from '@/src/components/Loader';

const authService = new AuthService();
export default function Profile() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<UpdateUser>(); // Initialize userData state
  const [currentPass, setCurrentPass] = useState<string>(); // Initialize userData state

  const id = typeof window !== 'undefined' ? localStorage.getItem('user_id') || '' : '';
const userId = parseInt(id, 10);

  useEffect(() => {
    getUserById();
  }, [userId]);

  const getUserById = async () => {
    setLoading(true);
    const response = await authService.getUserById(userId);
    const userData = response?.data?.data;
    setUserData(userData); // Set userData state with response data
    setCurrentPass(userData?.password);
    setValue('name', userData.name);
    setValue('email', userData.email);
    setValue('phone', userData.phone);
    setValue('company', userData.company);
    setValue('role', userData.role);
    setLoading(false);
  };
  const onSubmit = async (data: UpdateUser) => {
    try {
      setLoading(true);
      const response = await authService.updateUserById(userId, data);

      setLoading(false);
    } catch (error) {
      console.log('*** Error ***', error);
      setLoading(false);
    }
  };
  const handleCategoryChange = (selectedCategory: number) => {
    setValue('role', selectedCategory);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Loader loading={loading} />
      <Layout>
        <div className="px-10">
          <h1 className="py-5 text-2xl font-semibold text-gray-700">Profile</h1>
          <div className="ml-[-14px] flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="#6B7280"
              className="h-[10rem] w-[10rem]"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="grid gap-2">
              <span className="text-lg font-semibold text-gray-700 capitalize">
                {userData?.name}
              </span>
              <span className="text-md font-normal text-gray-600 capitalize">
              {userData?.role}
              </span>
            </div>
          </div>
          <div className="border-b border-gray-400 py-2"></div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <form onSubmit={handleSubmit((data: UpdateUser) => onSubmit(data))}>
              <div className="col-span-1 grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Enter First Name"
                  title="Full Name"
                  name="name"
                  register={register}
                  errors={errors}
                  requiredSign={false}
                  className="col-span-2 mb-5"
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
                  name="phone"
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
                  name="company"
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
                  defaultValue={userData?.role}
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
          <div className="mt-6 grid grid-cols-4">
            <form onSubmit={handleSubmit((data: UpdateUser) => onSubmit(data))}>
              <Input
                type="password"
                placeholder="Password"
                showPassword={togglePasswordVisibility}
                title="New Password"
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
              <Button
                type="submit"
                text="Save changes"
                disabled={loading}
                className="col-span-2 mt-5"
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

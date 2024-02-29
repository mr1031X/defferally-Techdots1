'use client';
import React, { useState } from 'react';
import NavBar from '@/src/components/Navbar/navbar';
import { toast, ToastContainer } from 'react-toastify';
import Role from './SignUpSteps/userRole';
import Loader from '@/src/components/Loader';
import UserInfo from './SignUpSteps/userInfo';
import UserPassword from './SignUpSteps/userPassword';
import { AuthService } from '@/src/network/auth';
import { Register, UpdateUser } from '@/src/interfaces/request/user';

const authService = new AuthService();

export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({});

  const onSubmit = async (data: UpdateUser, step: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      ...data,
    }));
    setStep(step);
    if (step === 4) {
      signUp({
        ...form,
        ...data,
      });
    }
  };

  const signUp = async (data: UpdateUser) => {
    try {
      setLoading(true);
      const response = await authService.signUp(data);

      if (response?.data?.data?.message.includes('User already exists')) {
        alert('User already exists');
      } else {
        const apiResponse=response?.data?.data
        localStorage.setItem('user_id', `${apiResponse?.user?.id}`)
        localStorage.setItem('user', JSON.stringify(apiResponse?.user))
        localStorage.setItem('access_token', apiResponse?.token)
        window.location.reload();
      }
    } catch (error: any) {
      console.log('*** error ***', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer limit={4} newestOnTop />
      <Loader loading={loading} />
      <NavBar />
      <section className="h-[100vh] bg-indigo-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="p-6 sm:p-8">
              <span className="text-sm font-bold text-gray-600">
                Step {step > 3 ? '3' : step}/3
              </span>
              <h1 className="mt-5 text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-3xl">
                Register
              </h1>
              {step === 1 ? (
                <Role onSubmit={onSubmit} loading={loading} />
              ) : step === 2 ? (
                <UserInfo onSubmit={onSubmit} loading={loading} />
              ) : (
                <UserPassword onSubmit={onSubmit} loading={loading} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

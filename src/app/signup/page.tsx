'use client'
import React, { useState } from 'react';
import NavBar from '@/src/components/Navbar/navbar';
import { toast, ToastContainer } from 'react-toastify';
import Role from './SignUpSteps/userRole';
import Loader from '@/src/components/Loader';
import UserInfo from './SignUpSteps/userInfo';
import UserPassword from './SignUpSteps/userPassword';

export default function SignUp() {
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({});

  const onSubmit = async (data: object, step: number) => {
    console.log("====== data =========",data);
    
    setForm((prevForm) => ({
      ...prevForm,
      ...data,
    }));
    setStep(step);
    if (step === 2) {
      signUp();
    }
  };

  const signUp = async () => {
    try {
      setLoading(true);
    } catch (error: any) {
      console.log("*** error ***", error);
    } finally {
      setLoading(false);
    }
  };
// console.log("=========",form);

  return (
    <>
      <ToastContainer limit={4} newestOnTop />
      <Loader loading={loading} />
      <NavBar />
      <section className="bg-indigo-50 dark:bg-gray-900 h-[100vh]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 sm:p-8">
              <span className="text-sm font-bold text-gray-600">
                Step {step+1}/3
              </span>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-3xl mt-5">
                Register
              </h1>
              {
                step === 0 ?
                  <Role onSubmit={onSubmit} loading={loading} /> : step === 1 ?
                    <UserInfo onSubmit={onSubmit} loading={loading} /> :
                    <UserPassword onSubmit={onSubmit} loading={loading} />
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

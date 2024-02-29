'use client';
import React, { useState } from 'react';
import NavBar from '@/src/components/Navbar/navbar';
import { ToastContainer } from 'react-toastify';
import Loader from '@/src/components/Loader';
import { AuthService } from '@/src/network/auth';
import LoginForm from '../ui/login-form';
import { useForm } from 'react-hook-form';
import { Login } from '@/src/interfaces/request/user';
import { login } from '@/src/hooks/useAuth';

const authService = new AuthService();

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const [loading, setLoading] = useState<boolean>(false);
  const [, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const onSubmit = async (data: Login) => {
    try {
      setLoading(true);
      const response = await authService.signIn(data);
      if (response?.data?.data?.message.includes('Invalid credentials')) {
        alert('Invalid credentials');
        setLoading(false)
      }else{
        login(response);
        setLoading(false)
        window.location.reload();
      }  
    } catch (error) {
      console.log('*** error ***', error);
      alert("Something went wrong")
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
              <h1 className="mt-5 text-xl mb-4 font-bold leading-tight tracking-tight text-gray-700 md:text-3xl">
                Login
              </h1>
           <LoginForm onSubmit={onSubmit} loading={loading}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

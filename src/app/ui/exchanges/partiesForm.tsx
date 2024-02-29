'use client'
import Input from '@/src/components/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function PartiesForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  const handleCheckboxChange = () => {
    setShowAdditionalForm(!showAdditionalForm);
  };
  return (
    <form className="bg-gray-100">
      <div className="w-full max-w-3xl rounded-md p-8">
        <h1 className="mb-4 text-xl font-semibold">Parties</h1>
        <p className="mb-6 text-sm">
          Please choose parties that will be participate in your exchange
        </p>
        <div className="space-y-4">
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="exchanger"
              onChange={handleCheckboxChange}
            />
            <label className="text-md ml-2 font-semibold" htmlFor="exchanger">
              Exchanger
            </label>
          </div>

          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="qualified-intermediary"
              onChange={handleCheckboxChange}
            />
            <label
              className="text-md ml-2 font-semibold"
              htmlFor="qualified-intermediary"
            >
              Qualified intermediary
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input type="checkbox" id="buyer" onChange={handleCheckboxChange} />
            <label className="text-md ml-2 font-semibold" htmlFor="buyer">
              Buyer
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="seller"
              onChange={handleCheckboxChange}
            />
            <label className="text-md ml-2 font-semibold" htmlFor="seller">
              Seller
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="closing-agent"
              onChange={handleCheckboxChange}
            />
            <label
              className="text-md ml-2 font-semibold"
              htmlFor="closing-agent"
            >
              Closing agent
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="lender"
              onChange={handleCheckboxChange}
            />
            <label className="text-md ml-2 font-semibold" htmlFor="lender">
              Lender
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="attorney"
              onChange={handleCheckboxChange}
            />
            <label className="text-md ml-2 font-semibold" htmlFor="attorney">
              Attorney
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="accountant"
              onChange={handleCheckboxChange}
            />
            <label className="text-md ml-2 font-semibold" htmlFor="accountant">
              Accountant
            </label>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="escrow-agent"
              onChange={handleCheckboxChange}
            />
            <label
              className="text-md ml-2 font-semibold"
              htmlFor="escrow-agent"
            >
              Escrow agent
            </label>
          </div>
        </div>
      </div>

      {/* {showAdditionalForm && ( */}
      <div className="mt-4 w-full max-w-3xl rounded-md p-8 shadow-sm">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Enter First Name"
            title="First Name"
            name="first_name"
            register={register}
            errors={errors}
            requiredSign={false}
            className="mb-5"
          />
          <Input
            type="text"
            placeholder="Enter Last Name"
            title="Last Name"
            name="last_name"
            register={register}
            errors={errors}
            requiredSign={false}
            className="mb-5"
          />
          <Input
            type="email"
            placeholder="example@gmail.com"
            title="Email"
            name="email"
            register={register}
            errors={errors}
            requiredSign={false}
            className="mb-5"
          />

          <Input
            type="text"
            placeholder="Enter Phone Number"
            title="Phone Number"
            name="phone_number"
            register={register}
            errors={errors}
            requiredSign={false}
            className="mb-5"
          />
        </div>
      </div>
    </form>
  );
}

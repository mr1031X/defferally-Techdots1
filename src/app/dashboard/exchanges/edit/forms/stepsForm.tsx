'use client'
import React, { useState } from 'react'

export default function StepsForm() {
    const [showAdditionalForm, setShowAdditionalForm] = useState<boolean>(false);
    const handleCheckboxChange = () => {
      setShowAdditionalForm(!showAdditionalForm);
    };
  return (
    <div className="h-[100vh] w-[40%] overflow-auto bg-gray-100 p-8">
    <h2 className="mb-6 text-2xl font-semibold">Steps</h2>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 1
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>Contract and exchange documents</p>
        <hr className="my-4 border-t border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 2
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>Settlement of relinquished property</p>
        <hr className="my-4 border-t border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 3
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>45-Day ID period</p>
        <hr className="my-4 border-t border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 4
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>Contract on replacement property</p>
        <hr className="my-4 border-t border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 5
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>Settlement on replacement property</p>
        <hr className="my-4 border-t border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 6
            </span>
          </div>
          <div className="flex cursor-pointer items-start items-center">
            <input
              type="checkbox"
              id="buyer"
              onChange={handleCheckboxChange}
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-400 checked:border-gray-500 checked:text-gray-500"
            />
          </div>
        </div>
        <p className="py-2 text-sm text-gray-600">
          Approximate duration: Aug 6, 2023 — Sep 12, 2023
        </p>
        <p>Reporting the exchange to the IRS</p>
      </div>
    </div>
  </div>  )
}

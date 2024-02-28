'use client';
import { DocumentIcon } from '@heroicons/react/24/outline';
import PartiesForm from '@/src/app/dashboard/exchanges/edit/forms/partiesForm';
import StepsForm from '@/src/app/dashboard/exchanges/edit/forms/stepsForm';
import EditParty from './forms/editParty';

export default function Page() {
  return (
    <>
      {/* <EditParty /> */}
      <div className="mb-5 w-full px-5">
        <div className="my-5">
          <span className="text-2xl font-semibold">Exchange No.123</span>
        </div>
        <div className="flex gap-5">
          <StepsForm />
          <PartiesForm />
        </div>
        <div className="mt-10 w-full bg-gray-100 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Documents</h2>
            </div>
            <div>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="mb-5 flex justify-between rounded-md border border-gray-200 bg-white p-3">
            <div className="flex items-center gap-1">
              <DocumentIcon className="h-6 w-6 text-gray-400" />
              <span className="text-sm">Exchange Agreement</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">Aug 4, 2023 11:13am</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
          <div className="mb-5 flex justify-between rounded-md border border-gray-200 bg-white p-3">
            <div className="flex items-center gap-1">
              <DocumentIcon className="h-6 w-6 text-gray-400" />
              <span className="text-sm">Exchange Agreement</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">Aug 4, 2023 11:13am</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

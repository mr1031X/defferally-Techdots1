import React, { useState } from 'react';
import {
  DocumentIcon,
  PlusCircleIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function Documents({
  onAdd,
  onRemove,
}: {
  onAdd: () => void;
  onRemove: () => void;
}) {
  const [editDropDown, setEditDropDown] = useState<boolean>(false);

  const handleEditDropDown = () => {
    setEditDropDown(!editDropDown);
  };

  return (
    <div className="mt-10 w-full bg-gray-100 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Documents</h2>
        </div>
        <div>
          <PlusCircleIcon className="h-8 w-8 cursor-pointer" onClick={onAdd} />
        </div>
      </div>
      <div className="mb-5 flex justify-between rounded-md border border-gray-200 bg-white p-3">
        <div className="flex items-center gap-1">
          <DocumentIcon className="h-6 w-6 text-gray-400" />
          <span className="text-sm">Exchange Agreement</span>
        </div>
        <div
          onClick={handleEditDropDown}
          className="relative flex items-center"
        >
          <span className="text-sm">Aug 4, 2023 11:13am</span>
          <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer text-gray-500" />
          {editDropDown && (
            <div className="absolute z-[40] ml-[2rem] mt-[3rem] rounded-md bg-white py-2 shadow-lg">
              <p
                className="flex cursor-pointer items-center px-4 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={onRemove}
              >
                <TrashIcon className="mr-2 h-4 w-4" /> Remove
              </p>
            </div>
          )}
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
  );
}

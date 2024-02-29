'use client';
import React, { useState } from 'react';
import Button from '@/src/components/Buttons/button';
import Input from '@/src/components/Input';
import { useForm } from 'react-hook-form';
import Modal from '@/src/components/Modal';
import { DocumentIcon } from '@heroicons/react/24/outline';

export default function AddDocuments({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    // Handle form submission
  };

  return (
    <>
      <Modal onClose={onClose}>
        <div className="mb-5">
          <span className="text-xl font-semibold">Add document</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <Input
            type="text"
            placeholder="Enter Title"
            title="Title"
            name="title"
            register={register}
            errors={errors}
            requiredSign={false}
          />
          <div className="mt-5 w-full">
            <label className="grid cursor-pointer justify-center rounded-md border border-dashed border-gray-700 bg-white px-10 py-4 hover:bg-gray-100">
              <input type="file" className="hidden" />
              <DocumentIcon className="mx-auto mb-2 flex h-14 w-14 text-gray-400" />
              <span className="text-sm font-semibold">
                Upload only PDF files
              </span>
            </label>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <button
              type="button"
              className="h-10 rounded-3xl border border-black px-4 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <Button type="submit" text="Upload" disabled={loading} />
          </div>
        </form>
      </Modal>
    </>
  );
}

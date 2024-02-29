import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className="fixed z-[100] mt-[-7rem] h-[115vh] w-full bg-black opacity-20"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      ></div>
      <div className="fixed z-[101] ml-[22%] w-1/3 rounded-lg bg-white p-5">
      <div className="flex justify-end">
          <XMarkIcon className="h-5 w-5 cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </>
  );
}

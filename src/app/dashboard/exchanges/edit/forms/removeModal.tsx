import Modal from '@/src/components/Modal';
import React from 'react';

export function RemovePartyModal({onClose}:{onClose:()=>void}) {

  return (
    <>
        <Modal onClose={onClose}>
          <p className="px-5 pb-5 text-xl font-semibold text-gray-800">
            Are you sure you want to remove this party?
          </p>
          <p className="px-5 text-sm">
            Once removed this party will no longer be accessible
          </p>
          <div className="flex gap-2 py-4 pl-3">
            <button
              type="button"
              className="h-10 rounded-3xl border border-black px-4 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="h-10 rounded-3xl border border-red-800 px-4 text-red-800 hover:bg-red-700 hover:text-white"
              onClick={onClose}
            >
              Remove
            </button>
          </div>
        </Modal>
    </>
  );
}

export function RemoveDocModal({onClose}:{onClose:()=>void}) {
  return (
<>
        <Modal onClose={onClose}>
          <p className="px-5 pb-5 text-xl font-semibold text-gray-800">
            Are you sure you want to remove this document?
          </p>
          <p className="px-5 text-sm">
            Once removed this document will no longer be accessible
          </p>
          <div className="flex gap-2 py-4 pl-3">
            <button
              type="button"
              className="h-10 rounded-3xl border border-black px-4 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="h-10 rounded-3xl border border-red-800 px-4 text-red-800 hover:bg-red-700 hover:text-white"
              onClick={onClose}
            >
              Remove
            </button>
          </div>
        </Modal>
    </>  );
}

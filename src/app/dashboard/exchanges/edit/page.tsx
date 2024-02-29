'use client';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import StepsForm from '@/src/app/dashboard/exchanges/edit/forms/stepsForm';
import EditParty from './forms/editParty';
import { useState } from 'react';
import AddParty from './forms/addParty';
import Documents from './forms/documents';
import AddDocuments from './forms/addDocuments';
import { RemovePartyModal, RemoveDocModal } from '@/src/app/dashboard/exchanges/edit/forms/removeModal';
import PartiesForm from './forms/partiesForm';

export default function Page() {
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [isAddDocModal, setIsAddDocModal] = useState<boolean>(false);
  const [isRemovePartyModal, setIsRemovePartyModal] = useState<boolean>(false);
  const [isRemoveDocModal, setIsRemoveDocModal] = useState<boolean>(false);
  const handleEdit = () => {    
    setIsEditModal(true);
  };

  const handleAdd = () => {    
    setIsAddModal(true);
  };

  const handleRemove = () => {    
    setIsRemovePartyModal(true);
  };

  return (
    <>
      {isEditModal && <EditParty onClose={()=>setIsEditModal(false)}/>}
      {isAddModal && <AddParty onClose={()=>setIsAddModal(false)}/>}
      {isAddDocModal && <AddDocuments onClose={()=>setIsAddDocModal(false)}/>}
      {isRemovePartyModal && <RemovePartyModal onClose={()=>setIsRemovePartyModal(false)} />}
      {isRemoveDocModal && <RemoveDocModal onClose={()=>setIsRemoveDocModal(false)} />}

      <div className="mb-5 w-full px-5">
        <div className="flex justify-center">
          <span className="text-md font-semibold bg-gray-100 rounded-3xl py-3 px-4 flex items-center"><CheckCircleIcon className='w-5 h-5 mr-2'/>Party has been removed!</span>
        </div>
        <div className="my-5">
          <span className="text-2xl font-semibold">Exchange No.123</span>
        </div>
        <div className="flex gap-5">
          <StepsForm />
          <PartiesForm onEdit={handleEdit} onAdd={handleAdd} onRemove={handleRemove}/>
        </div>
        <Documents onAdd={()=> setIsAddDocModal(true)} onRemove={()=>setIsRemoveDocModal(true)}/>
      </div>
    </>
  );
}

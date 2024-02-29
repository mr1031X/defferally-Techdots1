"use client"
import { CreateExchange } from '@/src/app/ui/exchanges/buttons';
import ExchangeTable from '@/src/app/ui/exchanges/exchangeTable';
import React, { useState } from 'react';

export default function Page() {
  const [exchangeStatus, setExchangeStatus] = useState<string>('');
  console.log("======= exchangeStatus =======",exchangeStatus);
  
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-4">
          <button
            className={`${
              exchangeStatus === 'active'
                ? 'border border-gray-800 text-gray-800 font-semibold'
                : 'border border-gray-300'
            } py-2 px-2 rounded-md`}
            onClick={()=>{
              setExchangeStatus('active'); 
            }}
          >
            Active
          </button>
          <button 
           className={`${
            exchangeStatus === 'completed'
              ? 'border border-gray-800 text-gray-800 font-semibold'
              : 'border border-gray-300'
          } py-2 px-2 rounded-md`}
          onClick={() => console.log('********************************')}
          >Completed</button>
        </div>
        <CreateExchange />
      </div>
      <ExchangeTable exchangeStatus={exchangeStatus}/>
    </div>
  );
}

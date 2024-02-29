'use client';
import { CreateExchange } from '@/src/app/ui/exchanges/buttons';
import ExchangeTable from '@/src/app/ui/exchanges/exchangeTable';
import Layout from '@/src/components/Layouts/dashboardLayout';
import React, { useState } from 'react';

export default async function Page() {
  const [exchangeStatus, setExchangeStatus] = useState<string>('');

  return (
    <Layout>
      <div className="w-full px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            <button
              className={`${
                exchangeStatus === 'active'
                  ? 'border border-gray-800 font-semibold text-gray-800'
                  : 'border border-gray-300'
              } rounded-md px-2 py-2`}
            >
              Active
            </button>
            <button
              className={`${
                exchangeStatus === 'completed'
                  ? 'border border-gray-800 font-semibold text-gray-800'
                  : 'border border-gray-300'
              } rounded-md px-2 py-2`}
            >
              Completed
            </button>
          </div>
          <CreateExchange />
        </div>
        <ExchangeTable exchangeStatus={exchangeStatus} />
      </div>
    </Layout>
  );
}

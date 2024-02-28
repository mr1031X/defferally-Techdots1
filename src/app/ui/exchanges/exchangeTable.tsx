import { formatDate } from '@/src/helpers';

const exchanges = [
  {
    exchange_id: 1,
    start_date: '2024-02-01',
    end_date: '2024-02-15',
    status: 'active',
  },
  {
    exchange_id: 2,
    start_date: '2024-01-15',
    end_date: '2024-02-28',
    status: 'completed',
  },
  {
    exchange_id: 3,
    start_date: '2024-03-01',
    end_date: '2024-03-15',
    status: 'completed',
  },
];

export default async function ExchangeTable({ exchangeStatus }: { exchangeStatus: string }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        {exchanges?.map((values, index) => (
          <div className="mb-5 flex items-center justify-between rounded-lg bg-gray-100 px-3 py-5" key={values.exchange_id}>
            <div className="font-semibold">Exchange #{values.exchange_id}</div>
            <div>
                <span className="font-thin mr-4">
              Start date: {formatDate(values.start_date)}
                </span>
              <span className='font-semibold bg-white rounded-3xl px-4 py-3'>{exchangeStatus === 'active' ? `Step #2` : 'Completed'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

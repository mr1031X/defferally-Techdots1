import { CreateExchange } from '@/app/ui/exchanges/buttons';
import ExchangeTable from '@/app/ui/exchanges/exchangeTable';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-end py-6">
        <CreateExchange />
      </div>
      <ExchangeTable />
    </div>
  )
}
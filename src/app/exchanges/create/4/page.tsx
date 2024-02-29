import Button from '@/src/components/Buttons/button';
import Layout from '@/src/components/Layouts/dashboardLayout';
import Link from 'next/link';

export default function Page() {
  return (
    <Layout>
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-start">
        <button className="rounded-md border border-gray-800 p-2 font-semibold">
          Step 4/4
        </button>
      </div>
      <div className="my-5">
        <span className="text-2xl font-semibold">Start my exchange</span>
      </div>
      <div className="bg-gray-100 p-8">
        <h2 className="mb-6 text-2xl font-semibold">Steps</h2>
        <div className="space-y-4">
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 1
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>Contract and exchange documents</p>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 2
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>Settlement of relinquished property</p>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 3
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>45-Day ID period</p>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 4
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>Contract on replacement property</p>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 5
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>Settlement on replacement property</p>
            <hr className="my-4 border-t border-gray-300" />
          </div>
          <div>
            <span className="rounded-3xl bg-white px-4 py-2 text-lg font-semibold">
              Step 6
            </span>
            <p className="py-2 text-sm text-gray-600">
              Approximate duration: Aug 6, 2023 — Sep 12, 2023
            </p>
            <p>Reporting the exchange to the IRS</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-start p-6">
        <Link
          href="/exchanges/create/3"
          className="flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <span className="rounded-3xl border border-black px-5 py-2 hover:bg-gray-100">
            Back to previous step
          </span>
        </Link>
        <div className="pl-4">
          <Link href="/exchanges/create/4">
            <Button
              type="submit"
              text="Start my exchange"
              className="mt-2"
            />{' '}
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
}

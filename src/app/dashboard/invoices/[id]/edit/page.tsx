import Form from '@/src/app/ui/invoices/edit-form';
import Breadcrumbs from '@/src/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers, fetchExchanges } from '@/src/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers, exchanges] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
    fetchExchanges
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      {/* <Form invoice={invoice} customers={customers} exchanges={exchanges} /> */}
    </main>
  );
}
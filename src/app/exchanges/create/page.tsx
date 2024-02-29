import PropertyTypeForm from '@/src/app/ui/exchanges/property-type-form'
import Button from '@/src/components/Buttons/button'
import Link from 'next/link'
import forwardArrow from '@/public/forwardArrow.svg'
import Layout from '@/src/components/Layouts/dashboardLayout'

export default function Page() {
    return (
        <Layout>
        <div className="w-full">
            <div className="flex w-full items-center justify-start p-6">
                <button className="rounded-md border-solid border-2 p-2">Step 1/4</button>
            </div>
            <PropertyTypeForm />
            <div className="flex w-full items-center justify-start p-6">
                <Link href="/exchanges/create/2">
                    <Button
                        type="submit"
                        text="Next Step"
                        className='mt-2'
                        iconAfter={forwardArrow}
                    />
                </Link>
            </div>
        </div>
        </Layout>
    )
}


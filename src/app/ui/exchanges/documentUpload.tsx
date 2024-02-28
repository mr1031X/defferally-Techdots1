import { DocumentIcon } from "@heroicons/react/24/outline"

export default async function DocumentUploadForm() {
    return (
        <div className="bg-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Documents</h2>
            <div className="space-y-6">
                <div className="flex flex-row">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-sm font-semibold mr-4">
                        1
                    </div>
                    <div className="w-80">
                        <div className="flex-1 items-start justify-start">
                            <h3 className="font-semibold mb-1">Relinquished property sale agreement:</h3>
                            <p className="text-sm mb-2">
                                The agreement outlining the sale of Property A, including terms and conditions
                            </p>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-dashed border border-gray-700 bg-white rounded-md px-10 py-4">
                            <DocumentIcon className="text-gray-400 w-14 h-14 flex mx-auto mb-2" />
                            <span className="text-sm font-semibold">Upload only PDF files</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-sm font-semibold mr-4">
                        2
                    </div>
                    <div className="w-80">
                        <div className="flex-1 items-start justify-start">
                            <h3 className="font-semibold mb-1">Exchange agreement</h3>
                            <p className="text-sm mb-2">
                                An agreement between you (the exchanger) and the Qualified Intermediary (QI) that formalizes the intent to
                                complete a 1031 exchange.
                            </p>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-dashed border border-gray-700 bg-white rounded-md px-10 py-4">
                            <DocumentIcon className="text-gray-400 w-14 h-14 flex mx-auto mb-2" />
                            <span className="text-sm font-semibold">Upload only PDF files</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-sm font-semibold mr-4">
                        3
                    </div>
                    <div className="w-80">
                        <div className="flex-1 items-start justify-start">
                            <h3 className="font-semibold mb-1">Title and deed documents</h3>
                            <p className="text-sm mb-2">
                                Title information, deed, and any related documents for Property A.
                            </p>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-dashed border border-gray-700 bg-white rounded-md px-10 py-4">
                            <DocumentIcon className="text-gray-400 w-14 h-14 flex mx-auto mb-2" />
                            <span className="text-sm font-semibold">Upload only PDF files</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-sm font-semibold mr-4">
                        4
                    </div>
                    <div className="w-80">
                        <div className="flex-1 items-start justify-start">
                            <h3 className="font-semibold mb-1">Closing statement</h3>
                            <p className="text-sm mb-2">
                                The closing statement for Property A&apos;s sale, indicating the net proceeds from the sale.
                            </p>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-dashed border border-gray-700 bg-white rounded-md px-10 py-4">
                            <DocumentIcon className="text-gray-400 w-14 h-14 flex mx-auto mb-2" />
                            <span className="text-sm font-semibold">Upload only PDF files</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-sm font-semibold mr-4">
                        5
                    </div>
                    <div className="w-80">
                        <div className="flex-1 items-start justify-start">
                            <h3 className="font-semibold mb-1">Notice of intent to exchange</h3>
                            <p className="text-sm mb-2">
                                Informing the QI and other parties involved (e.g., real estate agents, escrow company) of your intention
                                to complete a 1031 exchange.
                            </p>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="border-dashed border border-gray-700 bg-white rounded-md px-10 py-4">
                            <DocumentIcon className="text-gray-400 w-14 h-14 flex mx-auto mb-2" />
                            <span className="text-sm font-semibold">Upload only PDF files</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
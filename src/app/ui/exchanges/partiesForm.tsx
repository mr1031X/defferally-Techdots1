import { useState } from "react";

export default function PartiesForm() {
    const [showAdditionalForm, setShowAdditionalForm] = useState(false);

    const handleCheckboxChange = () => {
        setShowAdditionalForm(!showAdditionalForm);
    };
    return (
        <form>
            <div className="bg-white p-8 rounded-md shadow-sm w-full max-w-3xl mx-auto">
                <h1 className="text-xl font-semibold mb-4">Parties</h1>
                <p className="text-sm mb-6">Please choose parties that will be participate in your exchange</p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <input type="checkbox" id="exchanger" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="exchanger">
                            Exchanger
                        </label>
                    </div>

                    <div className="flex items-start">
                        <input type="checkbox" id="qualified-intermediary" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="qualified-intermediary">
                            Qualified intermediary
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="buyer" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="buyer">
                            Buyer
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="seller" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="seller">
                            Seller
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="closing-agent" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="closing-agent">
                            Closing agent
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="lender" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="lender">
                            Lender
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="attorney" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="attorney">
                            Attorney
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="accountant" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="accountant">
                            Accountant
                        </label>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" id="escrow-agent" onChange={handleCheckboxChange} />
                        <label className="ml-2 text-sm font-medium" htmlFor="escrow-agent">
                            Escrow agent
                        </label>
                    </div>
                </div>
            </div>

            {showAdditionalForm && (
                <div className="bg-white p-8 rounded-md shadow-sm w-full max-w-3xl mx-auto mt-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1" htmlFor="first-name">
                                First name
                            </label>
                            <input id="first-name" placeholder="Enter first name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1" htmlFor="last-name">
                                Last name
                            </label>
                            <input id="last-name" placeholder="Enter last name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1" htmlFor="email">
                                Email
                            </label>
                            <input id="email" placeholder="Enter email" type="email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1" htmlFor="phone-number">
                                Phone number
                            </label>
                            <input id="phone-number" placeholder="Enter phone number" />
                        </div>
                    </div>
                </div>
            )}
        </form>

    )
}
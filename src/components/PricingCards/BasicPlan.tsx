import React from "react";

const BasicPlan: React.FC = () => {
    return (
        <div className="border border-white w-[18rem] bg-transparent space-y-10 ml-28 mt-14 md:mt-0 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col">
                <p className="text-2xl p-4">Basic Plan</p>
                <div className="flex">
                    <p className="text-8xl font-poppins ml-4">4$</p><span className="mt-16 text-xs">/per month per user</span>
                </div>
                <hr className="mr-12 ml-12 mt-4" />
                <ul className="mt-8 ml-4 space-y-4">
                    <li>
                        Up to 10 graphs
                    </li>
                    <li>
                        Up to 500 chatbot queries
                    </li>
                </ul>
                <button className="rounded-lg bg-white/75 mr-12 ml-12 p-2 mt-10 mb-8">Buy Now</button>
            </div>
        </div>
    )
}

export default BasicPlan;
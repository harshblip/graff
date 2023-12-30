import React from "react";
import './Cards.css'
import BasicPlan from "./BasicPlan";
import ProPlan from "./ProPlan";
import EnterprisePlan from "./EnterprisePlan";

const Cards: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-4xl mt-12 ml-10 md:ml-24">Subscription Plans</p>
                <div className="flex flex-col md:flex-row justify-center items-center mr-24">
                    <BasicPlan />
                    <ProPlan />
                    <EnterprisePlan />
                </div>
            </div>
        </>
    )
}

export default Cards
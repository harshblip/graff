import React from 'react';
import styled from 'styled-components';

const ActivePlan: React.FC = () => {
    return (
        <div className=' bg-white text-black text-sm font-rubik w-[12rem] rounded-lg p-2 mt-8 ml-24 flex'>
            <svg className="status-dot " width="10" height="10">
                <circle cx="5" cy="5" r="10" fill='green' />
            </svg>
            Active Plan running
        </div>
    );
};

export default ActivePlan;

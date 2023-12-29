import React, { useState } from 'react';
import Section from './Section';
import './Section.css';

const UsageMetrics: React.FC = () => {
    const [activeSection, setActiveSection] = useState(1);
    return (
        <div className='h-[14rem] w-[24rem] mr-24 ml-[4rem] mt-[5rem] border border-white overflow-auto'>
            <Section
                isActive={activeSection === 1}
                content="Section 1 content"
                onClick={() => setActiveSection(1)}
            />
            <Section
                isActive={activeSection === 2}
                content="Section 2 content"
                onClick={() => setActiveSection(2)}
            />
            <Section
                isActive={activeSection === 3}
                content="Section 3 content"
                onClick={() => setActiveSection(3)}
            />
        </div>
    );
};

export default UsageMetrics;
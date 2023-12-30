import React, { useState } from 'react';
import Section from './Section';
import './Section.css';
import GraphsCreated from './GraphsCreated';
import GraphsShared from './GraphsShared';
import PapersCollected from './PapersCollected';

const UsageMetrics: React.FC = () => {
    const [activeSection, setActiveSection] = useState<"section1" | "section2" | "section3">("section1");
    return (
        <div className='h-[14rem] w-[24rem] mr-24 ml-[4rem] mt-[5rem] border border-white rounded-xl  overflow-auto container text-sm font-medium'>
            <div className="section-selector mt-2 ">
                <button
                    onClick={() => setActiveSection("section1")}
                    className={`${activeSection === "section1" ? 'title p-1 ml-4 ' : 'p-1 ml-4'}`}
                >Graphs Created</button>
                <button
                    onClick={() => setActiveSection("section2")}
                    className={`${activeSection === "section2" ? 'title p-1' : ''}`}
                >Graphs Shared</button>
                <button 
                    onClick={() => setActiveSection("section3")}
                    className={`${activeSection === "section3" ? 'title p-1 mr-4' : 'p-1 mr-4'}`}
                >Graphs Collected</button>
            </div>

            {/* Display content based on active section */}
            {activeSection === "section1" && < GraphsCreated />}
            {activeSection === "section2" && < GraphsShared />}
            {activeSection === "section3" && < PapersCollected />}
        </div>
    );
};

export default UsageMetrics;
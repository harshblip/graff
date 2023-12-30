import React, { useState } from 'react';
import RecentGraphs from './RecentGraphs';
import Queries from './Queries';

const ActivityFeed: React.FC = () => {
    const [activeSection, setActiveSection] = useState<"recentgraphs" | "queries" >("recentgraphs");
    return (
        <div className='h-[12rem] w-[24rem] mb-8 mr-24 ml-[4rem] mt-[2rem] border border-white rounded-xl overflow-auto'>
            <div className="section-selector mt-2 ">
                <button
                    onClick={() => setActiveSection("recentgraphs")}
                    className={`${activeSection === "recentgraphs" ? 'title p-1 ml-10 ' : 'p-1 ml-10'}`}
                >Graphs Created</button>
                <button
                    onClick={() => setActiveSection("queries")}
                    className={`${activeSection === "queries" ? 'title p-1 mr-12' : 'p-1 mr-12'}`}
                >Graphs Shared</button>
            </div>

            {/* Display content based on active section */}
            {activeSection === "recentgraphs" && < RecentGraphs />}
            {activeSection === "queries" && < Queries />}
        </div>
        );
};

export default ActivityFeed;
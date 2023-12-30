import React, { useState } from 'react';
import RecentGraphs from './RecentGraphs';
import Queries from './Queries';
import SavedGraphs from '../../SavedGraphs';

const ActivityFeed: React.FC = () => {
    const [activeSection, setActiveSection] = useState<"recentgraphs" | "queries" | "savedgraphs">("recentgraphs");
    return (
        <div className='h-[12rem] w-[24rem] mb-8 mr-24 ml-[4rem] mt-[2rem] border border-white rounded-xl overflow-auto overflow-y-scroll no-scrollbar'>
            <div className="section-selector mt-2 ">
                <button
                    onClick={() => setActiveSection("recentgraphs")}
                    className={`${activeSection === "recentgraphs" ? 'title ' : 'p-1 '}`}
                >Graphs Created</button>
                <button
                    onClick={() => setActiveSection("queries")}
                    className={`${activeSection === "queries" ? 'title' : 'p-1'}`}
                >Graphs Shared</button>
                <button
                    onClick={() => setActiveSection("savedgraphs")}
                    className={`${activeSection === "savedgraphs" ? 'title ' : 'p-1 '}`}
                >
                    Saved Graphs
                </button>
            </div>

            {/* Display content based on active section */}
            {activeSection === "recentgraphs" && < RecentGraphs />}
            {activeSection === "queries" && < Queries />}
            {activeSection === 'savedgraphs' && <SavedGraphs />}
        </div>
    );
};

export default ActivityFeed;
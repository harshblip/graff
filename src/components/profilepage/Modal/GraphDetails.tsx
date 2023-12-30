import React, { useState } from "react";
import papers from '../../../papers.json';
import graphs from '../../../graphs.json';
import './Modal.css';

type GraphDProps = {
    show: boolean;
    setShow: (show: boolean) => void;
}

const GraphsDetails: React.FC<GraphDProps> = (props) => {

    const handleDelete = () => {
        // delete the paper from the actual array.
        // update the state.
    }

    function randomIndex() {
        return Math.floor(Math.random() * 18) + 1;
    }
    // for now making random function for index
    // for writing relevant graph name in the edit modal

    const toggleModal = () => {
        props.setShow(!props.show);
    };
    let index = randomIndex();
    return (
        <>
            <div className="modal">
                <div className="content mt-4">
                    <div className="flex justify-between ml-0">
                        <div>
                            <div style={{ display: 'flex' }}>
                                <p className="font-bold text-xs text-black">Title</p>
                                <span className="material-symbols-outlined ml-2 -mt-1  text-black">
                                    arrow_outward
                                </span>
                            </div>
                            <p className="text-black ">{graphs[index].graphname}</p>
                        </div>
                        <p className="mr-4 text-black text-sm">
                            19 Sept, 2021
                        </p>
                    </div>
                    <div>
                        <div className="flex mt-4">
                            <p className="font-bold text-xs text-black">Description</p>
                        </div>
                        <div className="h-[5rem] w-[18rem] overflow-y-scroll no-scrollbar overflow-auto">
                            <p className="text-black text-sm ">
                                This AI tool generates knowledge graphs from research papers, providing you with AI-generated summaries and insights for rapid research. Whether you're a seasoned researcher or just starting out, our tool will revolutionize the way you conduct research.
                            </p>
                        </div>
                    </div>
                    <p className="font-bold text-xs text-black mt-4">Papers</p>
                    <div className="h-[8rem] w-[12rem] overflow-auto overflow-y-scroll no-scrollbar rounded-xl shadow-md mt-2">
                        {papers.map(paper => (
                            <li key={paper.id} className='flex justify-between ml-4 mr-4 mt-4 text-black'>
                                <p className="text-black text-sm">{paper.papername}</p>
                                <span onClick={handleDelete} className='material-symbols-outlined text-red-500'>
                                    delete
                                </span>
                            </li>
                        ))}
                    </div>
                    <div className="flex justify-between mt-20 ">
                        <button onClick={handleDelete} className="w-[10rem] bg-red-500 p-2 rounded-lg">Delete Graph</button>
                        <button onClick={toggleModal} className="w-[10rem] bg-slate-500 p-2 rounded-lg ml-4">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraphsDetails;
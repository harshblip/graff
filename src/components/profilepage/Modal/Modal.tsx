import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import Graff from '../../../images/graff.png'

import './Modal.css'    

interface SectionProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
}

const Modal: React.FC<SectionProps> = ({ showModal, setShowModal }) => {
    const [color, setColor] = useState('#fff');
    const [graphType, setGraphType] = useState('');
    const [colorHex, setColorHex] = useState('#fff');
    const [showColorPicker, setShowColorPicker] = useState(false);


    const closeModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            {showModal ? (
                <div className=' text-black form'>
                    <div className='flex'>
                        <div>
                            <form className='flex flex-col'>
                                <input
                                    type="text"
                                    name="graphName"
                                    placeholder="Graph Name" 
                                    className='bg-transparent mt-4 ml-4 rounded-md p-1' />
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description" 
                                    className='bg-transparent mt-4 ml-4 rounded-md p-1' />
                                <button onClick={() => setShowColorPicker(!showColorPicker)}
                                className='mt-6 ml-4'
                                >Choose Color</button>
                                {showColorPicker ? ( 
                                    <SketchPicker
                                        color={color}
                                        onChange={updatedColor => {
                                            // setColor(updatedColor.rgb);
                                            setColorHex(updatedColor.hex);
                                        }}
                                    />
                                ) : <p className='ml-4'> {colorHex} </p>}
                                <select onChange={e => setGraphType(e.target.value)} className='bg-transparent ml-4 mt-6'>
                                    <option value="line" className='bg-[#1e303f]'>Line Graph</option>
                                    <option value="node" className='bg-[#1e303f]'>Node Graph</option>
                                    <option value="pie" className='bg-[#1e303f]'>Pie Graph</option>
                                    <option value="bar" className='bg-[#1e303f]'>Bar Graph</option>
                                </select>
                                <button type="submit" onClick={closeModal} className='mt-10 border ml-4 rounded-lg p-1'>Save</button>
                            </form>
                        </div>
                        <div>
                            <img src={Graff} alt="Graph" className='mt-20 w-[12rem] ml-8 rounded-xl border'/>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
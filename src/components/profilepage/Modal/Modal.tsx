import React, { useState, useRef, useEffect, useCallback, MouseEvent, KeyboardEvent } from 'react';
import { SketchPicker } from 'react-color';
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
                <div className='bg-transparent text-black form'>
                    <div className='flex'>
                        <div>
                            <form className='flex flex-col'>
                                <input
                                    type="text"
                                    name="graphName"
                                    placeholder="Graph Name" 
                                    className='bg-transparent mt-4 ml-2 rounded-md p-1' />
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description" 
                                    className='bg-transparent mt-4 ml-2 rounded-md p-1' />
                                <button onClick={() => setShowColorPicker(!showColorPicker)}>Choose Color</button>
                                {showColorPicker ? ( 
                                    <SketchPicker
                                        color={color}
                                        onChange={updatedColor => {
                                            // setColor(updatedColor.rgb);
                                            setColorHex(updatedColor.hex);
                                        }}
                                    />
                                ) : <p> {colorHex} </p>}
                                <select onChange={e => setGraphType(e.target.value)} className='bg-transparent'>
                                    <option value="line" className='bg-[#1e303f]'>Line Graph</option>
                                    <option value="node" className='bg-[#1e303f]'>Node Graph</option>
                                    <option value="pie" className='bg-[#1e303f]'>Pie Graph</option>
                                    <option value="bar" className='bg-[#1e303f]'>Bar Graph</option>
                                </select>
                                <button type="submit" onClick={closeModal}>Save</button>
                            </form>
                        </div>
                        <div>
                            <img src="your-image-url" alt="Graph" />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
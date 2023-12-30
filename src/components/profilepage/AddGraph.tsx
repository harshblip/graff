import React, { useState } from 'react';
import Modal from './Modal/Modal';

const AddGraph: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>
            {!showModal ?
                <div onClick={openModal} className='h-[12rem] w-[24rem] mb-8 mr-24 ml-20 md:-ml-[2rem] mt-[2rem] rounded-xl flex flex-col justify-center items-center backdrop-blur-sm'>
                    <span className="material-symbols-outlined  text-center">
                        show_chart
                    </span>
                    <p>Add a new chart</p>
                </div> : <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            }
        </>
    );
};

export default AddGraph;
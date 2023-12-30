import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profilepage.css'
import AccountSettings from '../AccountSettings';
import ActivePlan from '../ActivePlan';
import p1 from '../../images/p1.jpg'

type CardProps = {
    name: string;
    email: string;
    bio: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setBio: (bio: string) => void;
    showAdvancedOptions: boolean;
    setShowAdvancedOptions: (showAdvancedOptions: boolean) => void;
}

const ProfileCard: React.FC<CardProps> = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        props.setShowAdvancedOptions(!props.showAdvancedOptions);
    }
    // icon


    return (
        <div>
            <div className='flex h-[14rem] w-[24rem] ml-[4rem] mt-[5rem] rounded-xl border border-white card-bg items-center card-bg'>
                <div>
                    <img src={p1} alt="profilephoto" className='profilephoto' />
                </div>
                <div className='flex flex-col ml-10'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='flex flex-col items-start mt-4'>
                            <p className='font-bold text-gray-300 text-[8px]'>NAME</p>
                            <p className='text-sm'>{props.name}</p>
                        </div>
                        <div className='flex flex-col items-start mt-3'>
                            <p className='font-bold text-gray-300 text-[8px]'>EMAIL</p>
                            <p className='text-sm'>{props.email}</p>
                        </div>
                        <div className='flex flex-col items-start mt-3'>
                            <p className='font-bold text-gray-300 text-[8px]'>BIO</p>
                            <p className='text-sm'>{props.bio}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <ActivePlan />
                    </div>
                </div>
            </div>
        </div>
    );
};

{/* <span className="material-symbols-outlined mt-10 -ml-10" onClick={handleClick}>
    edit
</span> */}

export default ProfileCard;
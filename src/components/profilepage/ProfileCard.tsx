import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profilepage.css'
import AccountSettings from '../AccountSettings';

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

    return (
        <>
            <div className='flex flex-col h-[10rem] w-[20rem] ml-[4rem] mt-[5rem] border border-white card-bg'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>{props.name}</h2>
                    <span className={`material-symbols-outlined ${"edit"}-icon`} onClick={handleClick}>
                        edit
                    </span>
                </div>
                <div>
                    {props.email}
                </div>
                <div>
                    {props.bio}
                </div>
                <div>
                    long active plan
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
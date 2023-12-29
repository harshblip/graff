import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profilepage.css'
import AccountSettings from '../AccountSettings';

const ProfileCard: React.FC = () => {
    const [name, setName] = useState('Shourya');
    const [email, setEmail] = useState('memail');
    const [bio, setBio] = useState('i am so good');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className='flex flex-col h-[10rem] w-[20rem] ml-[4rem] mt-[5rem] border border-white'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>{name}</h2>
                    <span className={`material-symbols-outlined ${"edit"}-icon`} onClick={handleClick}>
                        edit
                    </span>
                </div>
                <div>
                    {email}
                </div>
                <div>
                    {bio}
                </div>
                <div>
                    long active plan
                </div>
            </div>
            {open && <AccountSettings
                name={name}
                email={email}
                bio={bio}
                setName={setName}
                setEmail={setEmail}
                setBio={setBio}
            />
        }
        {console.log(name)}
        </>
    );
};

export default ProfileCard;
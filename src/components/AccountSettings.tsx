import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Google from '../images/google.png'
import { auth, provider } from '../GoogleAuth/config'
import { signInWithPopup } from 'firebase/auth'

type SettingsProps = {
    name: string;
    email: string;
    bio: string;
    setShowAdvancedOptions: (showAdvancedOptions: boolean) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setBio: (bio: string) => void;
}


const AccountSettings: React.FC<SettingsProps> = (props) => {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [bio, setBio] = useState(props.bio);
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            const email = data.user?.email || '';
            setValue(email);
            localStorage.setItem("email", email);
        })
    }

    useEffect(() => {
        const email = localStorage.getItem('email') || '';
        setValue(email);
    })
 

    const handleSave = () => {
        props.setName(name);
        props.setEmail(email);
        props.setBio(bio);
        props.setShowAdvancedOptions(false)
    };

    console.log(value);

    return (
        <div className='flex flex-col md:flex-row justify-between backdrop-blur-sm'>
            <div
                className='flex flex-col mt-10 border border-white w-[18rem] bg-transparent space-y-10 ml-28 rounded-lg'>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='p-1 mr-4 ml-4 mt-16 rounded-lg bg-transparent border border-white'
                />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='p-1 mr-4 ml-4 rounded-lg bg-transparent border border-white'
                />
                <textarea
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    className='p-1 mr-4 ml-4 rounded-lg bg-transparent border border-white'
                />
                <button
                    onClick={handleSave}>
                    Save
                </button>
            </div>
            <div className='separator invisible md:visible'><span className='ml-4'>OR</span></div>
            <div className='flex flex-col mt-40 w-[18rem] bg-transparent space-y-10 ml-10 rounded-lg '>
                <button onClick={handleClick} className='bg-white ml-10 mr-10 text-black p-1 rounded-md flex'>
                    <span>
                        <img src={Google} alt="google" width={25} className='mr-4 ml-1' />
                    </span>
                    Sign in with Google </button>
                <button className='flex border ml-10 mr-10 text-white p-1 rounded-md'>
                    <span className="material-symbols-outlined mr-4 ml-1">
                        mail
                    </span>
                    Sign in with Email
                </button>
            </div>
        </div>
    );
};

export default AccountSettings;

import React, { useEffect, useState } from 'react';
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
    const [password, setPassword] = useState('password');
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
        <div className='flex flex-col'>
            <p className='ml-10 mt-36 md:mt-0 md:ml-16 text-4xl'>Edit Your Account</p>
            <div className='flex flex-col md:mr-0 md:flex-row justify-between backdrop-blur-sm '>
                <div
                    className='flex flex-col mt-8 border border-white w-[18rem] bg-transparent space-y-10 ml-12 md:ml-16 rounded-lg'>
                    <p className='ml-8 text-xl mt-4'>Change your credentials</p>
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
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='p-1 mr-4 ml-4 rounded-lg bg-transparent border border-white'
                    />
                    <textarea
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        className='p-1 mr-4 ml-4 rounded-lg bg-transparent border border-white'
                    />
                    <button
                        onClick={handleSave}
                        className='border rounded-lg ml-10 mr-10 p-2 mb-10'
                    >
                        Save
                    </button>
                </div>
                <div className='separator invisible md:visible'>
                    <span className='ml-4'>OR</span>
                </div>
                <hr className='-mt-[14rem] mr-8 ml-16 visible md:invisible' />
                <div className='flex flex-col mt-40 w-[18rem] bg-transparent space-y-10 ml-10 md:ml-0  md:mr-16 rounded-lg '>
                    <button
                        onClick={handleClick}
                        className='bg-white ml-10 mr-10 text-black p-1 rounded-md flex -mt-20 md:mt-0'>
                        <span>
                            <img
                                src={Google}
                                alt="google" width={25}
                                className='mr-4 ml-1' />
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
        </div>
    );
};

export default AccountSettings;

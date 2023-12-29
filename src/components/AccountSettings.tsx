import React, { useState } from 'react';
import Sidebar from './Sidebar';

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

    const handleSave = () => {
        props.setName(name);
        props.setEmail(email);
        props.setBio(bio);
        props.setShowAdvancedOptions(false)
    };


    return (
        <div style={{ display: 'flex', position: 'absolute', backgroundColor: '#0c0c1c' }}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ border: 'white' }}
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ border: 'white' }}
            />
            <textarea
                value={bio}
                onChange={e => setBio(e.target.value)}
                style={{ border: 'white' }}
            />
            <button
                onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default AccountSettings;

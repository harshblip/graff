import React, { useState } from 'react';
import Sidebar from './Sidebar';

type SettingsProps = {
    name: string;
    email: string;
    bio: string;
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
    };

    const [showAdvancedOptions, setShowAdvancedOptions] = useState(true);

    return (
        <div style={{ display: 'flex' }}>
            < Sidebar showAdvancedOptions={showAdvancedOptions} />
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <textarea
                value={bio}
                onChange={e => setBio(e.target.value)} />
            <button
                onClick={handleSave}>Save</button>
        </div>
    );
};

export default AccountSettings;

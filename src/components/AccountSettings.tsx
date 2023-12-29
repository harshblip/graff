import React, { useState } from 'react';
import Sidebar from './Sidebar';

type SettingsProps = {
    name: string;
    email: string;
    bio: string;
}

const AccountSettings: React.FC<SettingsProps> = (props) => {

    const [showAdvancedOptions, setShowAdvancedOptions] = useState(true);
    return (
        <div style={{ display: 'flex' }}>
            < Sidebar showAdvancedOptions={showAdvancedOptions} />

        </div>
    );
};

export default AccountSettings;

import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AccountSettings: React.FC = () => {
    console.log('as');
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(true);
    return (
        <div>
            < Sidebar showAdvancedOptions={showAdvancedOptions}/>
            account settings
        </div>
        );
};

export default AccountSettings;

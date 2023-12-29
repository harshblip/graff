import React, { useState } from 'react';
import './Profilepage.css';
import ProfileCard from './ProfileCard';
import UsageMetrics from './UsageMetrics';
import ActivityFeed from './ActivityFeed';
import Sidebar from '../Sidebar';

const ProfilePage: React.FC = () => {
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
    const [name, setName] = useState('Shourya'); // name we get from email id after successfull authentication
    return (
        <>
        <p>{name}</p>
            <div style={{ display: 'flex' }}>
                <Sidebar showAdvancedOptions={showAdvancedOptions} />
                <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mt-28 md:mt-0'>
                    < ProfileCard />
                    < UsageMetrics />
                    < ActivityFeed />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;

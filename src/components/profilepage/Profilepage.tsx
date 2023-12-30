import React, { useState } from 'react';
import './Profilepage.css';
import ProfileCard from './ProfileCard';
import UsageMetrics from './UsageMetrics/UsageMetrics';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import AccountSettings from '../AccountSettings';
import Sidebar from '../Sidebar';

const ProfilePage: React.FC = () => {
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
    const [name, setName] = useState('Shourya'); // name we get from email id after successfull authentication
    const [email, setEmail] = useState('memail');
    const [bio, setBio] = useState('i am so good');
    return (
        <div className=''>
            <p>{name}</p>
            <div style={{ display: 'flex'}}>
                <Sidebar showAdvancedOptions={showAdvancedOptions} />
                {!showAdvancedOptions ?
                    <div style={{ display: 'flex', flexWrap: 'wrap' }} className='md:mt-0'>
                        < ProfileCard
                            name={name}
                            email={email}
                            bio={bio}
                            setName={setName}
                            setEmail={setEmail}
                            setBio={setBio}
                            showAdvancedOptions={showAdvancedOptions}
                            setShowAdvancedOptions={setShowAdvancedOptions} />
                        < UsageMetrics />
                        < ActivityFeed />
                    </div>
                    : <AccountSettings
                        name={name}
                        email={email}
                        bio={bio}
                        setName={setName}
                        setEmail={setEmail}
                        setBio={setBio}
                        setShowAdvancedOptions={setShowAdvancedOptions}
                    />
                }
            </div>
            {/* {console.log(name, email, bio)} */}
        </div>
    );
};

export default ProfilePage;

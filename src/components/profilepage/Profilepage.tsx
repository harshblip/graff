import React from 'react';
import './Profilepage.css';
import ProfileCard from './ProfileCard';
import UsageMetrics from './UsageMetrics';
import ActivityFeed from './ActivityFeed';
import Sidebar from '../Sidebar';

const ProfilePage: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className='h-[4rem] w-[20rem] absolute md:relative md:h-[24rem] md:w-[14rem] ml-[4rem] mt-[5rem] border border-white'>
            
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mt-28 md:mt-0'>
                < ProfileCard />
                < UsageMetrics />
                < ActivityFeed />
            </div>
        </div>
    );
};

export default ProfilePage;

import React from 'react';
import './Profilepage.css';

const ProfilePage: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className='h-[4rem] w-[20rem] absolute md:relative md:h-[24rem] md:w-[14rem] ml-[4rem] mt-[5rem] border border-white'>

            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='mt-28 md:mt-0'>

                <div className='h-[10rem] w-[20rem] ml-[4rem] mt-[5rem] border border-white'>

                </div>
                <div className='h-[10rem] w-[20rem]  ml-[4rem] mt-[5rem] border border-white'>

                </div>
                <div className='h-[8rem] w-[100%] mr-24 ml-[4rem] mt-[5rem] border border-white'>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

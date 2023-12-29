import React, { useState } from 'react';

type SidebarProps = {
    showAdvancedOptions: boolean;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <div className='h-[4rem] w-[20rem] absolute md:relative md:h-[24rem] md:w-[14rem] ml-[4rem] mt-[5rem] border border-white text-white bg-transparent overflow-auto'>
            <div >

                <div className='flex flex-col mt-20 space-y-8 items-start'>
                    {!props.showAdvancedOptions && (
                        <div className='flex md:flex-col md:space-x-12 space-x-0'>
                            <button>Profile</button>
                            <button>Favourites</button>
                            <button>Collections</button>
                        </div>
                    )}
                    <button>Settings</button>
                    {props.showAdvancedOptions && (
                        <div className='flex md:flex-col'>
                            <button>Account</button>
                            <button>Plans</button>
                            <button>Delete Account</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
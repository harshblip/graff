import React, { useState } from 'react';

type SidebarProps = {
    showAdvancedOptions: boolean;
};

    const Sidebar: React.FC<SidebarProps> = ( props ) => {
    return (
        <div className='h-[4rem] w-[20rem] absolute md:relative md:h-[24rem] md:w-[14rem] ml-[4rem] mt-[5rem] border border-white text-white'>
            <div className='flex flex-col mt-20 space-y-8 items-start'>
                {!props.showAdvancedOptions && (
                    <>
                        <button>Profile</button>
                        <button>Favourites</button>
                        <button>Collections</button>
                    </>
                )}
                <button>Settings</button>
                {props.showAdvancedOptions && (
                    <>
                        <button>Account</button>
                        <button>Plans</button>
                        <button>Delete Account</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
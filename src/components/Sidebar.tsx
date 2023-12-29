import React, { useState } from 'react';

type SidebarProps = {
    showAdvancedOptions: boolean;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <div className='h-[4rem] w-[20rem] absolute md:relative md:h-[24rem] md:w-[14rem] ml-[2rem] mt-[3rem] border border-r-8  border-r-blue-300 rounded-xl text-white bg-transparent overflow-auto text-left'>
            <div >

                <div className='flex flex-col mt-20 space-y-8'>
                    {!props.showAdvancedOptions && (
                        <div className='flex md:flex-col space-y-8 justify-center items-center space-x-12 md:space-x-0'>
                            <div className='flex'>
                                <span className='material-symbols-outlined mr-2'>
                                    for_you
                                </span>
                                <button>
                                    Profile
                                </button>
                            </div>
                            <div className='flex'>
                                <span className='material-symbols-outlined mr-2'>
                                    favorite
                                </span>
                                <button>Favorites</button>
                            </div>
                            <div className='flex'>
                                <span className="material-symbols-outlined mr-2">
                                    collections_bookmark
                                </span>
                                <button>Collections</button>
                            </div>
                            <div className='flex'>
                                <span className="material-symbols-outlined mr-2">
                                    settings
                                </span>
                                <button>Settings</button>
                            </div>
                        </div>
                    )}
                    {props.showAdvancedOptions && (
                        <div className='flex md:flex-col text-left items-start'>
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
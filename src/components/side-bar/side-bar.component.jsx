import React, { Fragment, useState } from 'react';
import { Divider, Drawer, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import {data} from './data';

import logo from '../../assets/logo.png'

const SideBar = ({setActivePath}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleDrawer = (value) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsSideBarOpen(value);
    };

    return (
        <Fragment>
            {
                isSideBarOpen
                    ?

                    <Drawer
                        anchor={'left'}
                        open={isSideBarOpen}
                        hideBackdrop={true}
                        onClose={toggleDrawer(false)}
                    >

                        <div className={`h-full w-[272px] bg-[#242a4a] flex justify-between flex-col`}>
                            <div>
                                <div className='p-4 flex justify-start items-center' onClick={toggleDrawer(false)}>
                                    <img src={logo} className='w-[120px]' alt='logo' />
                                </div>
                                <div className='pt-4 cursor-pointer'>
                                    {
                                        data.map((item) => (
                                            <div
                                                onClick={() => { navigate(item.route); setActivePath(item)}}
                                                className={`flex items-center px-4  py-2 mb-2 ${location.pathname === item.route ? 'bg-[#383e5a] ' : 'bg-[#242a4a]'}`} key={item.id}>
                                                <div className={`mr-4 ${location.pathname === item.route ? 'text-[#f5f6f7]' : 'text-[#9b9dab]'}`}   >{item.icon}</div>
                                                <p className={`text-sm ${location.pathname === item.route ? 'text-[#f5f6f7]' : 'text-[#9b9dab]'}`}   >{item.title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </Drawer>
                    :
                    <div className={`h-full w-12 bg-[#080d29] flex justify-between flex-col`}>
                        <div>
                            <div className='px-3 py-6 flex justify-center items-center '>
                                <p className='logo-text font-bold capitalize text-[#2A6CED] text-xl cursor-pointer' onClick={toggleDrawer(true)}> AB</p>
                            </div>
                            <div className='px-2 cursor-pointer'>
                                {
                                    data.map((item) => (
                                        <Tooltip title={item.title} placement='right'>
                                            <div
                                                onClick={() => { navigate(item.route);setActivePath(item) }}
                                                className={`flex justify-center items-center px-4 py-2 mb-2 ${location.pathname === item.route ? 'bg-[#383e5a]' : 'bg-[#080d29]'}`} key={item.id}>
                                                <div className={`${location.pathname === item.route ? 'text-[#f5f6f7]' : 'text-[#9b9dab]'}`}   >{item.icon}</div>

                                            </div>
                                        </Tooltip>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
            <Divider orientation="vertical" />
        </Fragment>
    );
}

export default SideBar;
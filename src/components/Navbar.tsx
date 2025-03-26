import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/logoipsum.svg';
import {AUTH_ITEMS, NAV_ITEMS} from "../constants/menuItems.ts";

type Props = {
    hasAuth?: boolean
}

const Navbar: React.FC<Props> = ({hasAuth = false}) => {
    return (
        <div className={'flex justify-between place-items-center px-2 py-2 bg-gray-900 text-white'}>

            {/* Logo */}
            <div>
                <img
                    src={logo}
                    alt={'Company Logo'}
                    className={'w-40 h-auto cursor-pointer'}/>
            </div>

            {/* Menu Items */}
            <div>
                <ul className={'flex flex-row gap-5'}>
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={'cursor-pointer shadow-2xl ' +
                                'hover:text-gray-400'}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Auth Items */}
            <>
                {hasAuth && (
                    <div className={'flex flex-row gap-5'}>
                        {AUTH_ITEMS.map((item, index) => (
                            <div className={'cursor-pointer shadow-2xl hover:text-gray-400'}>
                                <Link to={item.path}>{item.label}</Link>
                            </div>
                        ))}
                    </div>
                )}
            < />

        </div>
    );
};

export default Navbar;
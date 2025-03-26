import React from 'react';
import {Link} from 'react-router-dom';
import {MenuItem} from '../types.tsx';

type Props = {
    logo: string;
    navItems: MenuItem[];
    authItems?: MenuItem[];
}

const Navbar: React.FC<Props> = ({logo, navItems, authItems = null}) => {
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
                    {navItems.map((item, index) => (
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
                {authItems && (
                    <div className={'flex flex-row gap-5'}>
                        {authItems.map((item, index) => (
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
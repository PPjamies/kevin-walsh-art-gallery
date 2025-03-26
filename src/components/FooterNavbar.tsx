import React from 'react';
import {Link} from 'react-router-dom';
import {NAV_ITEMS} from '../constants/menuItems.ts';
import {SITE_SOCIALS} from '../constants/config.ts';
import logo from '../assets/logoipsum.svg';

const FooterNavbar = () => {
    return (
        <div
            className={'w-full min-h-[10vh] md:min-h-[15vh] flex flex-row justify-around items-center bg-blue-600 text-white'}>

            {/* Logo */}
            <img src={logo} alt={'company logo'} className={'w-45 h-auto'}/>

            {/* Navigations */}
            <div>
                <ul className={'flex flex-row gap-5'}>
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={'uppercase cursor-pointer hover:text-gray-400'}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Socials */}
            <div>
                <ul className={'flex flex-col gap-5'}>
                    {SITE_SOCIALS.map((item, index) => (
                        <li
                            key={index}
                            className={'flex flex-row gap-5 cursor-pointer hover:text-gray-400 hover:'}
                        >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 inline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FooterNavbar;
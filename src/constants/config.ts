import {Contact, Social} from "../types.tsx";
import instagramIcon from '../assets/icons/icons8-instagram.svg';

export const SITE_SOCIALS: Social[] = [
    {
        name: 'Instagram',
        icon: `${instagramIcon}`,
        link: 'https://instagram.com'
    }
];

export const SITE_CONTACT: Contact = {
    email: 'email@email.com',
    phone: '+1234567890',
    address: 'Hood River, OR',
};

export const SITE = {
    domain: 'domain.com',
    name: 'SiteName'
};

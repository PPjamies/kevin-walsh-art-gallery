export type MenuItem = {
    label: string;
    path: string;
};

export type ContentItem = {
    alt: string;
    src: string;
};

export type Content = {
    type: 'img' | 'slides';
    items: ContentItem[];
    title: string;
    subtitle: string;
};

export type Social = {
    name: string;
    icon: string;
    link: string;
};

export type Contact = {
    email?: string;
    phone?: string;
    address?: string;
    socials?: Social[];
};
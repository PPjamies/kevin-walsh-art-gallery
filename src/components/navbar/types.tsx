type MenuItem = {
    label: string;
    path: string;
};

type Props = {
    logo: string;
    navItems: MenuItem[];
    authItems?: MenuItem[];
}
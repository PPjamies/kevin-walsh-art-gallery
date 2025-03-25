// navbar menu item
export type MenuItem = {
    label: string;
    path: string;
};

// hero banner content
export type Content = {
    type: 'img' | 'vid';
    src: string;
}
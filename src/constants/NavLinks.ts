export type NavLink = {
    name: string;
    href: string;
    key: string;
};

export const NavLinks: NavLink[] = [
    {
        name: "How it works?",
        href: "/works",
        key: "work",
    },
    {
        name: "About Me",
        href: "/about",
        key: "about",
    },
    {
        name: "Pricing",
        href: "/pricing",
        key: "pricing",
    },
];

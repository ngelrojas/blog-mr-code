import React from "react";

type Theme = "light" | "dark";

export interface navigationMenuProps {
    name?: string;
    href?: string;
    current?: boolean;
    subcategories?: navigationMenuProps[];
    theme?: Theme;
}

export interface ClassNamesParams {
    classes?: any[];
}

export interface Post {
    id: number;
    title: string;
    href: string;
    description: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: { name: string; role: string; href: string; imageUrl: string };
    bannerImg?: string;
    summary?: string;
}

export interface CardPropsI {
    _posts: Post,
    theme: Theme
}

export interface PaginationBtnProps {
    paginate: (pageNumber: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    postsPerPage: number;
    posts: any[];
}

export interface WebSiteLayoutProps {
    children?: React.ReactNode;
}

export interface CategoryTimeProps {
    date: string,
    datetime: string,
    category: { title: string, href: string }
}

export interface CategoryTimePropsI {
    categoryTime: CategoryTimeProps;
    theme: Theme
}

export interface AuthorProps {
    href: string,
    name: string,
    role: string,
}

export interface AuthorPropsI {
    author: AuthorProps;
    theme: Theme
}

export interface DescriptionTitleProps {
    href: string,
    title: string,
    description: string
}

export interface DescriptionTitlePropsI {
    desTitle: DescriptionTitleProps;
    theme: Theme
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: any;
    theme: Theme;
}

export interface LogoProps {
    theme: Theme;
}
import React from "react";

export interface navigationMenuProps {
    name: string;
    href: string;
    current: boolean;
    subcategories?: navigationMenuProps[];
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
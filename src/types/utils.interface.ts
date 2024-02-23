import React from 'react';

type Theme = 'light' | 'dark';

// type AuthorType = {
//   name: string;
//   role: string;
//   href: string;
//   imageUrl: string;
// }[];

export interface ContentTypeI {
  title?: string;
  bannerImg?: string;
  description?: string;
  summary?: string;
  href?: string;
  author?: AuthorProps;
}

export interface navigationMenuProps {
  name?: string;
  href?: string;
  current?: boolean;
  subcategories?: navigationMenuProps[];
  theme?: Theme;
}

export interface ClassNamesParams {
  classes?: unknown[];
}

export interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; slug: string };
  author: { name: string; role: string; href: string; imageUrl: string };
  bannerImg?: string;
  summary?: string;
  slug?: string;
}

export interface CardPropsI {
  _posts: Post;
  theme: Theme;
}

export interface PaginationBtnProps {
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
  postsPerPage: number;
  posts: Post[];
}

export interface WebSiteLayoutProps {
  children?: React.ReactNode;
}

export interface CategoryTimeProps {
  date: string;
  datetime: string;
  category: { title: string; slug: string };
}

export interface CategoryTimePropsI {
  categoryTime: CategoryTimeProps;
  theme: Theme;
}

export interface AuthorProps {
  href: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface AuthorPropsI {
  author?: AuthorProps;
  theme: Theme;
}

export interface DescriptionTitleProps {
  href: string;
  title: string;
  description: string;
}

export interface DescriptionTitlePropsI {
  desTitle: DescriptionTitleProps;
  theme: Theme;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ContentTypeI;
  theme: Theme;
}

export interface LogoProps {
  theme: Theme;
}

export interface ContentFooterProps {
  theme: Theme;
}

export interface ListRelatedProps {
  theme: Theme;
  content: ContentTypeI[];
}

interface NestedComment {
  name: string;
  date: string;
  img: string;
  comment: string;
}

export interface Author {
  name: string;
  date: string;
  img: string;
  comment: string;
  nestedComments?: NestedComment[];
}

export interface ListCardProps {
  __posts: Post[];
  theme: Theme;
}

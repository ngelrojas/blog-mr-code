import { useParams } from 'react-router-dom';
import { WebSiteLayout } from '../../layouts/webSite';
import ListCard from '../../components/listCard';
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';

const bannerUrl = 'https://picsum.photos/seed/picsum/700/300';
const __posts = [
  {
    id: 1,
    title: 'category one',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', slug: 'marketing' },
    slug: 'boost-your-conversion-rate-1',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 2,
    title: 'Boost your conversion rate, in the era of AI 2',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'Machine Learning', slug: 'machine-learning' },
    slug: 'boost-your-conversion-rate-2',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 3,
    title: 'Boost your conversion rate, in the era of AI Here 3',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'Java', slug: 'java' },
    slug: 'boost-your-conversion-rate-3',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 4,
    title: 'Boost your conversion rate, in the era of AI 4',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'C#', slug: 'c-sharp' },
    slug: 'boost-your-conversion-rate-4',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 5,
    title: 'Boost your conversion rate, in the era of AI 5',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'Rus', slug: 'rust' },
    slug: 'boost-your-conversion-rate-5',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 6,
    title: 'Boost your conversion rate, in the era of AI 6',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'Redux', slug: 'redux' },
    slug: 'boost-your-conversion-rate-6',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  {
    id: 7,
    title: 'Boost your conversion rate, in the era of AI MORE 7',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2021',
    datetime: '2020-03-10',
    category: { title: 'React-JS', slug: 'react-js' },
    slug: 'boost-your-conversion-rate-7',
    author: {
      name: 'Michael Doe',
      role: 'Developer Advocate',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    bannerImg: bannerUrl,
    summary:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
];

export default function Category() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error('useThemeContext must be used within a ThemeProvider');
  const { theme } = themeContext;

  const { slug } = useParams();

  return (
    <WebSiteLayout>
      <div className="mx-auto max-w-5xl py-10 sm:px-10 lg:px-12 pt-28">
        <h1
          className={`flex justify-center text-black uppercase ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          Category {slug}
        </h1>
        <ListCard __posts={__posts} theme={theme} />
      </div>
    </WebSiteLayout>
  );
}

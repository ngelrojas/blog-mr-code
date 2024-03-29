import { useContext, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchBox from '../searchBox';
import NavigationMenu from '../navigationMenu';
import { classNames } from '../../types/utils.functions';
import MrCodeLogoLight from '../logo/lightLogo';
import MrCodeLogoDark from '../logo/darkLogo';

import { navigationMenuProps } from '../../types/utils.interface';

import { ThemeContext } from '../../themeContext';

type Theme = 'light' | 'dark';

const navigation: navigationMenuProps[] = [
  { name: 'HOME', href: '/home', current: true },
  {
    name: 'CATEGORIES',
    href: '#',
    current: false,
    subcategories: [
      { name: 'Python', href: 'python', current: false },
      { name: 'SQL', href: 'sql', current: false },
      { name: 'DevOps', href: 'devops', current: false },
      { name: 'JavaScript', href: 'javascript', current: false },
      { name: 'RAG', href: 'rag', current: false },
      { name: 'Rust', href: 'rust', current: false },
      { name: 'Machine Learning', href: 'machine-learning', current: false },
    ],
  },
  { name: 'NEWS', href: '/news', current: false },
];

export default function NavBar() {
  const localTheme = window.localStorage.getItem('theme');
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error('useThemeContext must be used within a ThemeProvider');
  const { theme, setTheme } = themeContext;
  const [darkMode, setDarkMode] = useState(localTheme === 'dark');
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const renderLogo = () => {
    if (theme === 'light') {
      return <MrCodeLogoDark theme={theme} />;
    }
    return <MrCodeLogoLight theme={theme} />;
  };

  const iconMode = (dark: boolean) => {
    if (dark) {
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 bg-header text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      );
    }
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    );
  };

  const handleClick = () => {
    setDarkMode(!darkMode);
    setTheme((prevTheme: Theme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed container md:max-w-full sm:max-w-screen-sm z-50 ${theme === 'light' ? 'border-b border-gray-300 bg-white text-black' : 'bg-pages border-nav-b text-white'}`}
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${theme === 'light' ? 'bg-white text-black' : 'bg-header text-white'}`}
          >
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                {renderLogo()}
                <NavigationMenu subcategories={navigation} theme={theme} />
              </div>

              <button className="p-2" onClick={handleClick}>
                {iconMode(darkMode)}
              </button>

              <div className="hidden md:block w-4/12">
                <div className="w-full ml-4 flex items-center md:ml-6">
                  {/*searching box*/}
                  <SearchBox onSearch={handleSearch} />
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    className={classNames({
                      classes: [
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      ],
                    })}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                  {item.subcategories && (
                    <Disclosure.Panel>
                      <div className="ml-4 space-y-1">
                        {item.subcategories.map((subItem) => (
                          <Disclosure.Button
                            key={subItem.name}
                            as="a"
                            href={`/category/${subItem.href}`}
                            className={classNames({
                              classes: [
                                subItem.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                              ],
                            })}
                            aria-current={subItem.current ? 'page' : undefined}
                          >
                            {subItem.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <SearchBox onSearch={handleSearch} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

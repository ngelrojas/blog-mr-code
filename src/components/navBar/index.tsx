import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBox from "../searchBox";
import NavigationMenu from "../navigationMenu";
import { classNames } from "../../types/utils.functions";
import MrCodeLogo from "../logo";
import { navigationMenuProps } from "../../types/utils.interface";


const navigation: navigationMenuProps[] = [
    { name: 'Home', href: '#', current: true },
    {
        name: 'Categories',
        href: '#',
        current: false,
        subcategories: [
            { name: 'Python', href: '/python', current: false },
            { name: 'SQL', href: '/sql', current: false },
            { name: 'DevOps', href: '/devops', current: false },
            { name: 'JavaScript', href: '/javascript', current: false },
            { name: 'RAG', href: '/rag', current: false },
            { name: 'Rust', href: '/rust', current: false },
            { name: 'Machine Learning', href: '/machine-learning', current: false },
        ],
    },
    { name: 'News', href: '#', current: false },
]

export default function NavBar() {

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">

                                    <MrCodeLogo />

                                    <NavigationMenu navigation={navigation} />

                                </div>
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
                                                            href={subItem.href}
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
    )
}

import { navigationMenuProps } from "../../types/utils.interface";
import {classNames} from "../../types/utils.functions";
import {Disclosure} from "@headlessui/react";
import { Categories } from "../../constantBlog";

export default function NavigationMenu({navigation}: { navigation: navigationMenuProps[] }) {
    const chevronDown = (categoryName: string) => {
        return (
            <>
                {categoryName}<span className="float-right mt-1 ml-0.5 font-extrabold">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-3 h-3 font-extrabold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                </span>
            </>
        )
    }

    return (
        <div className="hidden md:block relative">
            <div className="ml-32 flex items-baseline space-x-4">
                {navigation.map((item) => (
                    <div className="relative group" key={item.name}>
                        {item.name === Categories ? (
                            <Disclosure>
                                {() => (
                                    <>
                                        <Disclosure.Button
                                            as="a"
                                            href={item.href}
                                            className={classNames({
                                                classes: [
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-black hover:bg-gray-50 hover:text-black',
                                                    'block rounded px-3 py-2 text-sm font-medium',
                                                ],
                                            })}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {chevronDown(item.name)}
                                        </Disclosure.Button>
                                        {item.subcategories && (
                                            <Disclosure.Panel>
                                                <div className="w-max grid grid-cols-3 gap-3 items-center space-y-1 px-2 pb-3 pt-2 sm:px-3 shadow-md bg-white absolute z-50 top-full left-0">
                                                    {item.subcategories.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={classNames({
                                                                classes: [
                                                                    subItem.current
                                                                        ? 'bg-gray-400 text-black'
                                                                        : 'text-black hover:bg-gray-100 hover:text-black',
                                                                    'rounded px-3 py-2 text-base font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none',
                                                                ],
                                                            })}
                                                            aria-current={subItem.current ? 'page' : undefined}
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        )}
                                    </>
                                )}
                            </Disclosure>
                        ) : (
                            <a
                                href={item.href}
                                className={classNames({
                                    classes: [
                                        item.current
                                            ? ' text-black hover:bg-gray-50 hover:text-black'
                                            : 'text-black hover:bg-gray-50 hover:text-black',
                                        'block rounded-md px-3 py-2 text-sm font-medium',
                                    ],
                                })}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
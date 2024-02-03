import React, { useState } from "react";
import { navigationMenuProps } from "../../types/utils.interface";
import {classNames} from "../../types/utils.functions";
import {Disclosure} from "@headlessui/react";
import { Categories } from "../../constantBlog";

const NavigationMenu:React.FC<navigationMenuProps> = ({subcategories, theme}) =>{
    const [showPanel, setShowPanel] = useState(false);

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

    const handlePanel = () => {
        setShowPanel(!showPanel);
    }

    return (
        <div className="hidden md:block relative">
            <div className="ml-32 flex items-baseline space-x-4">
                {subcategories?.map(({current, href, name, subcategories: subcategories_}) => (
                    <div className='relative group'  key={name}>
                        {name === Categories ? (
                            <Disclosure>
                                {() => (
                                    <>
                                        <Disclosure.Button
                                            onClick={handlePanel}
                                            as="button"
                                            className={classNames({
                                                classes: [
                                                    theme === 'light'
                                                        ? 'bg-white text-black hover:bg-gray-50'
                                                        : 'bg-pages text-white hover:bg-gray-50 hover:text-black',
                                                    'block rounded px-3 py-2 text-sm font-medium',
                                                ],
                                            })}
                                            aria-current={current ? 'page' : undefined}
                                        >
                                            {chevronDown(name)}
                                        </Disclosure.Button>
                                        {subcategories_ && (
                                            <Disclosure.Panel className={`fadeIn ${showPanel ? 'slide-bottom show':''}`}>
                                                <div className={`rounded border-white w-max grid grid-cols-3 gap-3 items-center space-y-1 px-2 pb-3 pt-2 sm:px-3 shadow-md absolute z-50 top-full left-0 ${theme === 'light' ? 'bg-white text-black': 'bg-header text-white'}`}>
                                                    {subcategories_.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={`/category/${subItem.href}`}
                                                            className={classNames({
                                                                classes: [
                                                                    theme === 'light'
                                                                        ? 'bg-white text-black hover:bg-gray-100 hover:text-black'
                                                                        : 'bg-header text-white hover:bg-gray-100 hover:text-black',
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
                                href={href}
                                className={classNames({
                                    classes: [
                                        theme === 'light'
                                            ? 'bg-white text-black hover:bg-gray-50 hover:text-black'
                                            : 'bg-header text-white hover:bg-gray-50 hover:text-black',
                                        'block rounded-md px-3 py-2 text-sm font-medium',
                                    ],
                                })}
                                aria-current={current ? 'page' : undefined}
                            >
                                {name}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavigationMenu;
import { navigationMenuProps } from "../../types/utils.interface";
import {classNames} from "../../types/utils.functions";
import {Disclosure} from "@headlessui/react";

// TODO: fix the list of categories, because it is not showing like a designed menu
export default function NavigationMenu({navigation}: { navigation: navigationMenuProps[] }) {

    return (
        <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                    <div className="relative group" key={item.name}>
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
                                <div className="flex space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-gray-800 absolute z-50 top-full left-0">
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
                                                    'items-center rounded-md px-3 py-2 text-base font-medium',
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
        </div>
    )
}


import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const NavMenu = () => {
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="md:min-w-36 inline-flex w-full justify-between rounded-md bg-white px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium text-black border border-white hover:border hover:bg-primary/10 duration-150 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Menu
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="pt-3 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Details
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Category
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        My Favorites
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Profile
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="pb-3">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Login/Sign Up
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


export default NavMenu
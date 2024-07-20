"use client";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import SearchDialog from "./SearchDialog";
import { useState } from "react";


const navigation = [
  { name: "Nuevo", href: "/products", current: false },
  { name: "Mujer", href: "/women", current: false },
  { name: "Hombre", href: "/men", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 border-b sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'}>
                    <h1 className="font-bold text-xl">APRIL</h1>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-200"
                            : " hover:bg-gray-200",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <HeartIcon className="h-6 w-6 mx-2" />
                <Link href={'/carrito'}>
                  <ShoppingBagIcon className="h-6 w-6 mx-2" />
                </Link>
                <button onClick={() => {
                  setSearchOpen(true)
                }}>
                  <MagnifyingGlassIcon className="h-6 w-6 mx-2" />
                </button>
                <SearchDialog isOpen={searchOpen} setIsOpen={setSearchOpen} />

                <Link href={'/user'}>
                  <div className="rounded-full hover:ring-1 hover:ring-black ">
                    <UserIcon className="h-6 w-6 rounded-full" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 "
                      : "text-gray-300 hover:bg-gray-200 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

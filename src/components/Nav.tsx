import { Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline/index';
import { Fragment } from 'react';

const links = [
  {
    name: 'About',
    dropdown: [
      { name: 'Beliefs', href: '/beliefs', out: false },
      { name: 'Values', href: '/values', out: false },
      { name: 'Leadership', href: '/leadership', out: false },
      { name: 'Outreach', href: '/outreach', out: false },
      { name: 'Resources', href: '/resources', out: false },
    ],
  },
  { name: 'Sermons', href: '/sermons', out: false },
  {
    name: 'Connect',
    dropdown: [
      { name: 'Growth Track', href: '/growth-track', out: false },
      { name: 'Baptism', href: '/growth-track#baptism', out: false },
      {
        name: 'I Need Prayer',
        href: 'https://centerpoint.churchcenter.com/people/forms/318364',
        out: true,
      },
    ],
  },
  {
    name: 'Ministries',
    dropdown: [
      { name: 'Kids', href: '/kids', out: false },
      { name: 'Youth', href: '/youth', out: false },
    ],
  },
  { name: 'Give', href: '/give', out: false },
  {
    name: 'Events',
    href: 'https://centerpoint.churchcenter.com/registrations',
    out: true,
  },
];

const Mobile = () => {
  return (
    <Popover className="relative mx-auto flex w-full items-center justify-between md:hidden">
      <a href="/">
        <img
          src="/logos/logo-white.png"
          alt="Logo"
          className="mt-1 ml-4 h-8 w-8"
        />
      </a>
      <Popover.Button className="focus:outline-none">
        <Bars3Icon className="mr-4 h-7 w-7" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="rounded-primary fixed inset-0">
          <div className="flex min-w-min flex-col bg-black">
            <div className="flex items-center justify-end">
              <Popover.Button>
                <XMarkIcon className="mt-4 mr-4 h-6 w-6" />
              </Popover.Button>
            </div>
            <div className="mt-4 ml-4 flex h-screen flex-col overflow-y-scroll font-bold">
              <a
                href="/"
                className="border-darkGray border-b-[1px] py-3 pl-2 text-xl"
              >
                Home
              </a>
              {links.map((link) =>
                link.dropdown ? (
                  <Disclosure key={link.name}>
                    <div className="border-darkGray border-b-[1px]">
                      <Disclosure.Button className="  flex items-center  py-3 pl-2 text-xl">
                        {link.name} <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        {link.dropdown.map((item) => (
                          <a
                            href={item.href}
                            target={item.out ? '_blank' : '_self'}
                            className="block py-1 pl-2 text-xl"
                          >
                            {item.name}
                          </a>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  </Disclosure>
                ) : (
                  <a
                    href={link.href}
                    className="border-darkGray border-b-[1px] py-3 pl-2 text-xl"
                    key={link.name}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Nav = () => {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex h-20 bg-black text-white opacity-90">
      <div className="mx-auto hidden w-11/12 items-center justify-between md:flex">
        <a href="/">
          <img
            src="/logos/logo-white.png"
            alt="Logo"
            className="mt-1 h-12 w-12"
          />
        </a>
        <div className="text-md flex gap-10 font-semibold last:mr-4">
          {links.map((link) =>
            link.dropdown ? (
              <Popover key={link.name} className="relative">
                <Popover.Button className="flex items-center focus:outline-none">
                  {link.name} <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel className="rounded-primary bg-sermon absolute top-8 -left-2 py-1 opacity-100">
                    <div>
                      {link.dropdown.map((item) => (
                        <a
                          href={item.href}
                          className="hover:bg-primary my-1 block whitespace-nowrap px-4"
                          target={item.out ? '_blank' : '_self'}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            ) : (
              <a
                href={link.href}
                key={link.name}
                target={link.out ? '_blank' : '_self'}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
      <Mobile />
    </nav>
  );
};

export default Nav;

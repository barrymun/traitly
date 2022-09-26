import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon,} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {Link, useNavigate} from "react-router-dom";

import traitlyIndigo from "static/images/logos/traitly-logo-indigo.svg";

const ANCHOR_1 = 'sourcing';
const ANCHOR_2 = 'outreach-automation';
const ANCHOR_3 = 'candidate-crm';
const solutions = [
  {name: 'Sourcing', anchor: ANCHOR_1},
  {name: 'Outreach Automation', anchor: ANCHOR_2},
  {name: 'Candidate CRM', anchor: ANCHOR_3},
];
const legal1 = [
  {name: 'Privacy & Security', href: '/privacy'},
  {name: 'Terms of Use', href: '/terms'},
];
const legal2 = [
  {name: 'GDPR', href: 'https://traitly-legal.s3-eu-west-1.amazonaws.com/GDPR+Roles+Website.pdf'},
  {name: 'Do Not Sell My Info', href: 'https://app.peoplewise.io/opt-out'},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  let navigate = useNavigate();

  return (
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow-md shadow-slate-200 z-30 pointer-events-none" aria-hidden="true"/>
      <div className="relative">
        <div
          className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <span className="sr-only">Traitly</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={traitlyIndigo}
                alt="Traitly"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">

              {/*<Link*/}
              {/*  to="#"*/}
              {/*  className="text-base font-medium text-gray-500 hover:text-gray-900"*/}
              {/*>*/}
              {/*  Pricing*/}
              {/*</Link>*/}

              {/*<p*/}
              {/*  onClick={() => window.open('https://help.traitly.com/en/', '_blank', 'noopener noreferrer')}*/}
              {/*  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"*/}
              {/*>*/}
              {/*  Help Centre*/}
              {/*</p>*/}

              <Popover className="relative">
                {({open}) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        className="absolute z-30 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <div
                                key={item.name}
                                onClick={async () => {
                                  // navigate("/", {replace: true});
                                  await navigate("/");
                                  window.location.hash = '#' + item.anchor;
                                }}
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50 cursor-pointer"
                              >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <p
                onClick={() => window.open('https://chrome.google.com/webstore/detail/traitly/eehbbnffjldijmmgpbbolbbkfjgjbafb?hl=en', '_blank', 'noopener noreferrer')}
                className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Chrome Extension
              </p>

              <Popover className="relative">
                {({open}) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        className="absolute z-30 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {legal1.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                {/*<p className="mt-1 text-sm text-gray-500">{item.description}</p>*/}
                              </Link>
                            ))}
                            {legal2.map((item) => (
                              <div
                                key={item.name}
                                onClick={() => window.open(item.href, '_blank', 'noopener noreferrer')}
                                className="-m-3 p-2 block rounded-md hover:bg-gray-50 cursor-pointer"
                              >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                {/*<p className="mt-1 text-sm text-gray-500">{item.description}</p>*/}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

            </Popover.Group>

            <div className="flex items-center md:ml-12">
              <p
                onClick={() => window.open('https://app.peoplewise.io/client-user/login', '_blank', 'noopener noreferrer')}
                className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Sign in
              </p>
              <Link
                to="/request-demo"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={traitlyIndigo}
                    alt="Traitly"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                  </Popover.Button>
                </div>
              </div>
              {/*<div className="mt-6 sm:mt-8">*/}
              {/*  <nav>*/}
              {/*    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">*/}
              {/*      {solutions.map((item) => (*/}
              {/*        <Link*/}
              {/*          key={item.name}*/}
              {/*          to={item.href}*/}
              {/*          className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"*/}
              {/*        >*/}
              {/*          <div*/}
              {/*            className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">*/}
              {/*            <item.icon className="h-6 w-6" aria-hidden="true"/>*/}
              {/*          </div>*/}
              {/*          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>*/}
              {/*        </Link>*/}
              {/*      ))}*/}
              {/*    </div>*/}
              {/*    <div className="mt-8 text-base">*/}
              {/*      <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
              {/*        {' '}*/}
              {/*        View all products <span aria-hidden="true">&rarr;</span>*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*  </nav>*/}
              {/*</div>*/}
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {/*<Link to="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">*/}
                {/*  Pricing*/}
                {/*</Link>*/}

                <p
                  onClick={() => window.open('https://help.traitly.com/en/', '_blank', 'noopener noreferrer')}
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                >
                  Help Centre
                </p>

                <p
                  onClick={() => window.open('https://chrome.google.com/webstore/detail/traitly/eehbbnffjldijmmgpbbolbbkfjgjbafb?hl=en', '_blank', 'noopener noreferrer')}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Chrome Extension
                </p>

                {/*<Link to="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">*/}
                {/*  Company*/}
                {/*</Link>*/}

                {/*<Link to="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">*/}
                {/*  Resources*/}
                {/*</Link>*/}

                {/*<Link to="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">*/}
                {/*  Blog*/}
                {/*</Link>*/}

                {/*<Link to="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">*/}
                {/*  Contact Sales*/}
                {/*</Link>*/}
              </div>
              <div className="mt-6">
                {/*<Link*/}
                {/*  to="#"*/}
                {/*  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"*/}
                {/*>*/}
                {/*  Sign up*/}
                {/*</Link>*/}
                <Link
                  to="/request-demo"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Request a demo
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <span
                    onClick={() => window.open('https://app.peoplewise.io/client-user/login', '_blank', 'noopener noreferrer')}
                    className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

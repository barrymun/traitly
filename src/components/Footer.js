import React from 'react'
import {Link} from "react-router-dom";

import traitlyIndigo from "static/images/logos/traitly-logo-indigo.svg";

const navigation = {
  // solutions: [
  //   {name: 'Marketing', href: '#'},
  //   {name: 'Analytics', href: '#'},
  //   {name: 'Commerce', href: '#'},
  //   {name: 'Insights', href: '#'},
  // ],
  support: [
    {name: 'Help Centre', href: 'https://help.traitly.com/en/'},
    {name: 'Chrome Extension', href: 'https://chrome.google.com/webstore/detail/traitly/eehbbnffjldijmmgpbbolbbkfjgjbafb?hl=en'},
    // {name: 'API Status', href: '#'},
  ],
  // company: [
  //   {name: 'About', href: '/about'},
  //   {name: 'Blog', href: '#'},
  //   {name: 'Jobs', href: '#'},
  //   {name: 'Press', href: '#'},
  //   {name: 'Partners', href: '#'},
  // ],
  legal1: [
    {name: 'Privacy & Security', href: '/privacy'},
    {name: 'Terms of Use', href: '/terms'},
  ],
  legal2: [
    {name: 'GDPR', href: 'https://traitly-legal.s3-eu-west-1.amazonaws.com/GDPR+Roles+Website.pdf'},
    {name: 'Do Not Sell My Info', href: 'https://app.peoplewise.io/opt-out'},
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/aibl-tech/about/',
      icon: (props) => (
        <svg
          className="w-6 h-6 text-grey-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (<>
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src={traitlyIndigo}
              alt="Traitly"
            />
            <p className="text-gray-500 text-base">
              Traitly - the full-stack recruiting platform.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <p
                  key={item.name}
                  onClick={() => window.open(item.href, '_blank', 'noopener noreferrer')}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true"/>
                </p>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/*<div>*/}
              {/*  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>*/}
              {/*  <ul className="mt-4 space-y-4">*/}
              {/*    {navigation.solutions.map((item) => (*/}
              {/*      <li key={item.name}>*/}
              {/*        <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">*/}
              {/*          {item.name}*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</div>*/}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <p
                        onClick={() => window.open(item.href, '_blank', 'noopener noreferrer')}
                        className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                      >
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/*<div>*/}
              {/*  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>*/}
              {/*  <ul className="mt-4 space-y-4">*/}
              {/*    {navigation.company.map((item) => (*/}
              {/*      <li key={item.name}>*/}
              {/*        <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">*/}
              {/*          {item.name}*/}
              {/*        </Link>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</div>*/}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal1.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {navigation.legal2.map((item) => (
                    <li key={item.name}>
                      <p
                        onClick={() => window.open(item.href, '_blank', 'noopener noreferrer')}
                        className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                      >
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Traitly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>);
};
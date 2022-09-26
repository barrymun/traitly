import React from 'react'
import {Link} from "react-router-dom";

import intro from 'static/images/intro.png';

export default function Intro() {
  return (<>

    <main className="lg:relative bg-gradient-to-b from-blue-50 to-white">

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">

        <div className="lg:flex lg:items-center">

          {/* lhs text section */}
          <div className="px-4 lg:ml-6 sm:px-4 xl:pr-8 lg:w-1/2">
            <h1
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <div className="text-base uppercase tracking-wide pb-6 text-indigo-500">Traitly</div>
              <span className="block xl:inline">The Full-Stack</span>{' '}
              <span className="block text-indigo-600 xl:inline">Recruiting Platform</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Discover and engage top talent, faster. Automate high-volume sourcing and personalized outreach.
              Make better sourcing decisions with real-time talent market intelligence.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/request-demo"
                  className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>

          {/* rhs image section */}
          <div className="px-4 lg:w-1/2 lg:mr-6 sm:px-4 xl:pl-8">
            <img
              className="lg:inset-0 object-scale-down w-auto mt-4"
              src={intro}
              alt=""
            />
          </div>

        </div>

      </div>

    </main>

  </>);
};
import React from "react";
import {Link} from "react-router-dom";

export default function DemoBanner() {
  return (<>

    <section className="lg:relative bg-indigo-600">

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">

        <div className="flex flex-col justify-center">

          <h1
            className="mx-auto text-1xl tracking-tight font-extrabold text-white sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
            Ready to connect with top talent?
          </h1>

          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Take sourcing and personalized outreach to the next level.
          </p>

          <div className="mx-auto mt-8">
            <Link
              to="/request-demo"
              className="w-40 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white"
            >
              Request a demo
            </Link>
          </div>

        </div>

      </div>

    </section>

  </>);
};
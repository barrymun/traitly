import React from "react";
import diversity from "static/images/diversity.png";

export default function Diversity() {
  return (<>

    <section className="lg:relative bg-indigo-50">

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">

        <div className="lg:flex lg:items-center mb-20">

          {/* lhs */}
          <div className="px-4 lg:w-1/2 lg:mr-6 sm:px-4 xl:pl-8">
            <img
              className="lg:inset-0 object-scale-down w-auto mt-4"
              src={diversity}
              alt=""
            />
          </div>

          {/* rhs */}
          <div className="px-4 lg:w-1/2 lg:ml-6 sm:px-4 xl:pr-8">
            <h1
              className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
              <span className="block xl:inline">
                Talent is global
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Tap into global pools of top-tier candidates. Use Traitly to 10x your sourcing and outreach.
            </p>
          </div>

        </div>

      </div>

    </section>

  </>);
};
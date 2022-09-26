import React from "react";
import info1 from "static/images/info1.png";
import info2 from "static/images/info2.png";
import info3 from "static/images/info3.png";

const ANCHOR_1 = 'sourcing';
const ANCHOR_2 = 'outreach-automation';
const ANCHOR_3 = 'candidate-crm';

export default function Info() {
  return (<>

    <section className="lg:relative bg-gradient-to-b from-blue-50 to-white">

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">

        {/* #1 - SOURCING */}
        <div id={ANCHOR_1} className="lg:flex lg:items-center mb-20">

          {/* lhs */}
          <div className="px-4 lg:w-1/2 lg:ml-6 sm:px-4 xl:pr-8">
            <h1
              className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
              <span className="block xl:inline">Discover diverse talent</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Automatically source hard-to-find talent from across the Web.
              Filter candidates based on skills, experience, diversity, company background, and more.
            </p>
          </div>

          {/* rhs */}
          <div className="px-4 lg:w-1/2 lg:mr-6 sm:px-4 xl:pl-8">
            <img
              className="lg:inset-0 object-scale-down w-auto mt-4"
              src={info1}
              alt=""
            />
          </div>

        </div>


        {/* #2 - ENGAGEMENT */}
        <div id={ANCHOR_2} className="lg:flex lg:items-center mb-20">

          {/* lhs */}
          <div className="px-4 lg:w-1/2 lg:mr-6 sm:px-4 xl:pl-8">
            <img
              className="lg:inset-0 object-scale-down w-auto mt-4"
              src={info2}
              alt=""
            />
          </div>

          {/* rhs */}
          <div className="px-4 lg:w-1/2 lg:ml-6 sm:px-4 xl:pr-8">
            <h1
              className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
              <span className="block xl:inline">Create meaningful connections with deeply personalized outreach</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Automatically engage candidates in a deeply personalized way.
              Establish authentic connections with top talent.
              Experiment with messaging using our intelligent automated A/B testing engine.
            </p>
          </div>

        </div>


        {/* #3 - MANAGE & NURTURE */}
        <div id={ANCHOR_3} className="lg:flex lg:items-center">

          {/* lhs */}
          <div className="px-4 lg:w-1/2 lg:ml-6 sm:px-4 xl:pr-8">
            <h1
              className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
              <span className="block xl:inline">Manage candidate replies, track feedback, and nurture high-intent candidates</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Seamlessly manage prospects and add interested candidates to your ATS.
              Automatically nurture past candidates.
              Track every candidate interaction across Traitly and the professional social networks you use.
            </p>
          </div>

          {/* rhs */}
          <div className="px-4 lg:w-1/2 lg:mr-6 sm:px-4 xl:pl-8">
            <img
              className="lg:inset-0 object-scale-down w-auto mt-4"
              src={info3}
              alt=""
            />
          </div>

        </div>

      </div>

    </section>

  </>);
};
import React from "react";
import logo_bigeye from "static/images/logos/bigeye.svg";
import people_kh from "static/images/people/kh.jpeg";

export default function Testimonials() {
  return (<>

    <section className="lg:relative bg-white">

      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-16 lg:text-left">

        <div className="relative">
          <div className="flex flex-col justify-center">
            <img
              className="lg:inset-0 object-scale-down h-[20px] w-auto"
              src={logo_bigeye}
              alt="Bigeye"
            />
          </div>
          <blockquote className="mt-10">
            <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Traitly allows me to do what I do best as a recruiter:
                spend quality one-on-one time with candidates and help them have the best interview experience possible.
                I couldn’t imagine my day without Traitly&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={people_kh}
                    alt="Katie Hawk"
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Katie Hawk
                  </div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z"/>
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    Director of People Operations, Bigeye
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

      </div>

    </section>

  </>);
};
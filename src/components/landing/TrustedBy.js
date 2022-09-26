import React from "react";

import logo_bigeye from 'static/images/logos/bigeye.svg';
import logo_coursehero from 'static/images/logos/coursehero.png';
import logo_picnicolor from 'static/images/logos/picniccolor.png';
import logo_consensys from 'static/images/logos/consensys.png';

export default function TrustedBy() {
  return (

    <div className="relative mt-4">

      {/*<div className="absolute right-0 left-0 h-20 w-100 bg-black -top-[38px]"/>*/}

      <div
        className="h-20 w-100 bg-white transform origin-bottom-left -rotate-[2deg] lg:-rotate-[2.4deg] xl:-rotate-[1.6deg] 2xl:-rotate-[0.8deg]"/>

      <div className="bg-indigo-50 -mt-20">

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

          <div className="mx-auto text-center mt-20 mb-16 text-gray-700 text-xl font-semibold">
            The world's most innovative companies use Traitly
          </div>


          {/* logos, 4 company logos to a grid row */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="flex justify-center">
              <img className="h-8" src={logo_bigeye} alt="bigeye"/>
            </div>
            <div className="flex justify-center">
              <img className="h-8" src={logo_coursehero} alt="coursehero"/>
            </div>
            <div className="flex justify-center">
              <img className="h-8" src={logo_picnicolor} alt="picnicolor"/>
            </div>
            <div className="flex justify-center">
              <img className="h-8" src={logo_consensys} alt="consensys"/>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
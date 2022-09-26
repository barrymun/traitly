import React from 'react';
import BasePage from "components/BasePage";
import Intro from "components/landing/Intro";
import TrustedBy from "components/landing/TrustedBy";
import Testimonials from "components/landing/Testimonials";
import Info from "components/landing/Info";
import Diversity from "components/landing/Diversity";
import DemoBanner from "components/landing/DemoBanner";

export default function Landing() {
  return (<>
    <BasePage>
      <Intro/>
      <TrustedBy/>
      <Testimonials/>
      <Info/>
      <Diversity/>
      <DemoBanner/>
      <div className="invisible absolute h-0">iom22</div>
    </BasePage>
  </>);
};
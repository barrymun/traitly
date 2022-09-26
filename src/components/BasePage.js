import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import CookieBanner from "components/CookieBanner";

export default function BasePage({children}) {
  return (<>

    <Header/>

    {children}

    <Footer/>

    <CookieBanner/>

  </>);
};
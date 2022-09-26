import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "pages/About";
import Demo from "pages/Demo";
import Privacy from "pages/Privacy";
import Terms from "pages/Terms";
import {IntercomProvider} from 'react-use-intercom';
import {CookiesProvider} from "react-cookie";
import ReactGA from 'react-ga';

const INTERCOM_APP_ID = 'is729c8f';
const GA_ID = 'UA-226067791-1';

// https://reactrouter.com/docs/en/v6/getting-started/overview
export default function App() {

  // GA
  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (<>
    <CookiesProvider>
      <IntercomProvider appId={INTERCOM_APP_ID} autoBoot={true}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/request-demo" element={<Demo/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            {/*<Route path="/" element={<Landing />}>*/}
            {/*  <Route index element={<Home />} />*/}
            {/*  <Route path="teams" element={<Teams />}>*/}
            {/*    <Route path=":teamId" element={<Team />} />*/}
            {/*    <Route path="new" element={<NewTeamForm />} />*/}
            {/*    <Route index element={<LeagueStandings />} />*/}
            {/*  </Route>*/}
            {/*</Route>*/}
          </Routes>
        </BrowserRouter>
      </IntercomProvider>
    </CookiesProvider>
  </>)
}
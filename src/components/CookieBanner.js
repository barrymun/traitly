import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import CookieIcon from '@mui/icons-material/Cookie';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {Link} from "react-router-dom";

let COOKIE_NAME = 'traitly-cookies-accepted';

export default function CookieBanner() {

  const [isAccepted, setIsAccepted] = useState(true);  // default true so the banner doesn't flash appear on load
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  useEffect(() => {

    // sanity check
    if (cookies == null) {
      setIsAccepted(false);
      return;
    }

    let cookieExists = cookies[COOKIE_NAME];

    // check if already accepted
    if (cookieExists == null || cookieExists !== 'SET') {
      setIsAccepted(false);
    }

  }, []);

  const acceptCookies = () => {
    setCookie(COOKIE_NAME, 'SET');
    setIsAccepted(true);
  };

  return (<>

    {!isAccepted
      ? <>

        <div
          className="fixed p-2 bottom-10 right-28 left-10 z-10 bg-white shadow-md shadow-slate-200 border-l-4 border-yellow-400">

          <div className="flex items-center justify-between w-full">

            {/* cookie icon and text */}
            <div className="flex items-center">

              {/* icon */}
              <div className="hidden lg:block flex-shrink-0 ml-2">
                <CookieIcon/>
              </div>

              <div className="ml-2">
                <p className="text-sm text-yellow-700">
                  We use cookies to improve your experience and for marketing. See our{' '}
                  <Link to="/privacy" className="font-medium underline text-yellow-700 hover:text-yellow-600">
                    cookie policy
                  </Link>
                  {''}.
                </p>
              </div>

              <div className="ml-2">
                <button
                  onClick={acceptCookies}
                  className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-slate-100 border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                >
                  Accept all
                </button>
              </div>

            </div>

            {/* accept and continue */}
            <div className="ml-2">
              <Tooltip title="Accept and close">
                <IconButton size="small" onClick={acceptCookies}>
                  <CancelIcon/>
                </IconButton>
              </Tooltip>
            </div>

          </div>

        </div>

      </>
      : null
    }

  </>);
};
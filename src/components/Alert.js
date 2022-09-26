import React from 'react'
import {XCircleIcon} from '@heroicons/react/solid'

export default function Alert({isVisible = false, isFixed = true, msg = null, hideFn = null}) {
  return isVisible
    ? (
      <div className={isFixed ? "fixed left-10 bottom-10 z-50" : ""}>
        <div className="shadow-md rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400 cursor-pointer"
                aria-hidden="true"
                onClick={hideFn != null ? hideFn : null}
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {msg != null && msg !== ''
                  ? msg
                  : "Something went wrong, please try again"
                }
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
    : <></>
};
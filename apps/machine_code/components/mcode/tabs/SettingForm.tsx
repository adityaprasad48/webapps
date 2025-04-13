"use client";
import React from "react";

const SettingForm = ({ values, handleChange, errors }: any) => {
  const radioCls =
    "relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-purple-600 checked:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden";

  return (
    <div>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Country
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="country"
            name="country"
            value={values.country}
            onChange={handleChange}
            autoComplete="country-name"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="us">United States</option>
            <option value="canada">Canada</option>
            <option value="maxico">Mexico</option>
          </select>
          <svg
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          {errors.country && <span className="text-sm text-red-500">{errors.country}</span>}
        </div>
      </div>
      <fieldset className="">
        <legend className="text-sm/6 font-semibold text-gray-900">
          Push notifications
        </legend>
        {/* <p className="mt-1 text-sm/6 text-gray-600">
          These are delivered via SMS to your mobile phone.
        </p> */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="push_notifications"
              type="radio"
              checked={values.push_notifications == "0"}
              value={0}
              onChange={handleChange}
              className={radioCls}
            />
            <label
              htmlFor="push-everything"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Everything
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-email"
              name="push_notifications"
              type="radio"
              checked={values.push_notifications == "1"}
              value={1}
              onChange={handleChange}
              className={radioCls}
            />
            <label
              htmlFor="push-email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Same as email
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-nothing"
              name="push_notifications"
              type="radio"
              checked={values.push_notifications == "2"}
              value={2}
              onChange={handleChange}
              className={radioCls}
            />
            <label
              htmlFor="push-nothing"
              className="block text-sm/6 font-medium text-gray-900"
            >
              No push notifications
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SettingForm;

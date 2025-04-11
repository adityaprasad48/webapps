"use client";
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import InterestForm from "./InterestForm";
import SettingForm from "./SettingForm";
import { twMerge } from "tailwind-merge";

const FormTab = () => {
  const [values, setValues] = useState({
    full_name: "",
    profile_email: "",
    interest_name: "",
    interest_email: "",
    country: "india",
    push_notifications: "0",
  });

  const [errors, setErrors] = useState({});

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (e: any) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const FormComps = [
    {
      name: "Profile",
      comp: ProfileForm,
      validate: () => {
        console.log('validate')
        const err = {};
        let isError = false;
        if (!values.full_name) {
          err.full_name = "Name is Required.";
          isError = true;
        }
        setErrors(err);
        return isError;
      },
    },
    {
      name: "Interest",
      comp: InterestForm,
    },
    {
      name: "Setting",
      comp: SettingForm,
    },
  ];

  const Form: any = FormComps[tabIndex]?.comp;

  // const handleTab = (index: number) => {
  //   setTabIndex(index);
  // };

  // const handleNext = () => {
  //   setTabIndex((prev) => prev + 1);
  // };

  // const handlePrev = () => {
  //   setTabIndex((prev) => prev - 1);
  // };

  const totalTabs = 3;

  const handleTab = (index: number) => {
    if (index >= 0 && index < totalTabs) {
      setTabIndex(index);
    }
  };

  const handleNext = () => {
    FormComps[tabIndex].validate();
    // setTabIndex((prev) => (prev < totalTabs - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setTabIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSubmit = () => {
    // Check Validation
  };

  console.log("errors", errors);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between text-center gap-2 ">
        {FormComps.map((form, index) => (
          <button
            key={index}
            type="button"
            className={twMerge(
              "w-full py-2  border-1 border-amber-300",
              index == tabIndex && "bg-amber-400"
            )}
            onClick={handleTab.bind(null, index)}
          >
            {form.name}
          </button>
        ))}
      </div>
      <Form values={values} handleChange={handleChange} errors={errors} />
      <div className="flex justify-center gap-2">
        {tabIndex > 0 && (
          <button
            type="button"
            onClick={handleNext}
            className="w-1/2 px-4 py-2 text-white bg-purple-600 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Prev
          </button>
        )}
        {tabIndex < 2 && (
          <button
            type="button"
            onClick={handlePrev}
            className="w-1/2 px-4 py-2 text-white bg-amber-600 rounded-md shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Next
          </button>
        )}
        {tabIndex == 2 && (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-1/2 px-4 py-2 text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormTab;

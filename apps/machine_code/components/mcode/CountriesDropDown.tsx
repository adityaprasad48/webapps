"use client";
import React from "react";

const Countries = [
  {
    id: 1,
    name: "India",
    value: "IN",
    cities: [
      {
        id: 1,
        name: "Mumbai",
      },
      {
        id: 2,
        name: "Delhi",
      },
    ],
  },
  {
    id: 2,
    name: "United States",
    value: "US",
    cities: [
      {
        id: 1,
        name: "New York",
      },
      {
        id: 2,
        name: "Los Angeles",
      },
    ],
  },
  {
    id: 3,
    name: "Australia",
    value: "AU",
    cities: [
      {
        id: 1,
        name: "Sydney",
      },
      {
        id: 2,
        name: "Melbourne",
      },
    ],
  },
];

const CountryDropDown = () => {
  const [Country, setCountry] = React.useState(Countries[0]);
  const handleCities = (e: any) => {
    console.log("e.target.value: ", e.target.value);
    const country = Countries.find(
      (country) => country.id === Number(e.target.value)
    );
    console.log("country: ", country);
    setCountry(country);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="font-semibold text-gray-700">
            Select Country:{" "}
          </label>
          <select
            name="country"
            id="country"
            onChange={handleCities}
            className="w-[120px] border-1 border-gray-300 text-gray-700 text-lg px-2 py-1"
          >
            {Countries.map((country) => {
              return (
                <option
                  className="px-2 py-2 bg-amber-100"
                  key={country.id}
                  value={country.id}
                >
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cities" className="font-semibold text-gray-700">
            Select Cities:{" "}
          </label>
          <select
            name="cities"
            id="cities"
            className="w-[120px] border-1 border-gray-300 text-lg px-2 py-1 text-gray-700"
          >
            {Country?.cities?.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 w-[300px] text-pink-300 text-lg">
        {Array(40)
          .fill(0)
          .map((item, index) => {
            return <span key={index}>{index % 2 === 0 ? "⏶" : "⏷"}</span>;
          })}
      </div>
    </div>
  );
};

export default CountryDropDown;

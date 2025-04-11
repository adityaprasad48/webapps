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
    <div>
      <div>
        <label htmlFor="country">Select Country: </label>
        <select name="country" id="country" onChange={handleCities}>
          {Countries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="cities">Select Cities: </label>
        <select name="cities" id="cities">
          {Country?.cities?.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {Array(50)
          .fill(0)
          .map((item, index) => {
            return index < 25 ? (
              <span key={index}>⏶</span>
            ) : (
              <span key={index}>⏷</span>
            );
          })}
      </div>
    </div>
  );
};

export default CountryDropDown;

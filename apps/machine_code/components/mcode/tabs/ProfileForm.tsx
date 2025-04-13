"use client";
import React from "react";

const ProfileForm = ({ values, errors, handleChange }: any) => {
  return (
      <section className="w-full flex flex-col gap-3 items-center">
        <div className="w-full space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            required
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.full_name && <span className="text-sm text-red-500">{errors.full_name}</span>}
        </div>
        <div className="w-full space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="user@gmail.com"
            required
            name="profile_email"
            value={values.profile_email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </section>
  );
};

export default ProfileForm;

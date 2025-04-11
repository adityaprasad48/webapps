import React from "react";

const InterestForm = ({ values, handleChange }: any) => {
  

  return (
    <section className="flex flex-col gap-6 items-center">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Interest Full Name
        </label>
        <input
          type="text"
          placeholder="Interest Full Name"
          required
          name="interest_name"
          value={values.interest_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <div>
        <fieldset>
          <legend className="text-sm/6 font-semibold text-gray-900">
            By email
          </legend>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    checked
                  />
                </div>
              </div>
              <div className="text-sm/6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Comments
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="candidates"
                    aria-describedby="candidates-description"
                    name="candidates"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="text-sm/6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  Candidates
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="offers"
                    aria-describedby="offers-description"
                    name="offers"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="text-sm/6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Offers
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default InterestForm;

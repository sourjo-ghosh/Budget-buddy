import {
  CircleDollarSign,
  Trash,
  TriangleAlert,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";

const Onboarding = () => {
  const [Name, setName] = useState("");
  const [Budget, setBudget] = useState("");
  const HandleGetStartedBtn = () => {
    if (!Name || !Budget) {
      alert("Please fill in all the fields.");
      return;
    }
    // Proceed with form submission or further processing
    console.log("Name:", Name);
    console.log("Budget:", Budget);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Budget", Budget);
    alert("Profile setup complete! You can now start using the app.");
    window.location.reload()
  };
  return (
    <div className="px-10 my-10">
      <p className="flex flex-col items-center gap-4 text-white mt-10 text-3xl">
        Setup Your Profile
      </p>
      {/* Name Section */}
      <div>
        <div className="flex flex-col justify-center p-5 items-center bg-[#162033] border border-gray-200 rounded-3xl gap-4 mt-10 text-white">
          <p className="bg-[#2B2658] p-5 rounded-full">
            <UserRound className="text-[#340ddf]"></UserRound>
          </p>
          <p>Profile</p>
          <div>
            <div>
                <div className="flex flex-col justify-center items-center ">
              <label htmlFor="monthly-budget" className="text-white/70 text-[16px]">
                Name
              </label>
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                id="monthly-budget"
                className=" p-4 mb-3 mt-2 rounded-2xl bg-[#1C2739] border border-gray-300 placeholder:text-gray-500"
                placeholder="Enter Your Name"
                />
                </div>
              {/* <button className="w-full bg-[#1C2739] rounded-2xl border border-gray-200 mt-3 p-4 text-white">
                Edit
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Budget Section */}
      <div>
        <div className="flex flex-col justify-center p-5 items-center bg-[#162033] border border-gray-200 rounded-3xl gap-4 mt-10 text-white">
          <p className="bg-[#2B2658] p-5 rounded-full">
            <CircleDollarSign className="text-[#340ddf]"></CircleDollarSign>
          </p>
          <p>Budget</p>
          <div>
            <div className="flex justify-cen items-center flex-col">
            <label htmlFor="monthly-budget" className="text-white/70 text-[16px]">
              Monthly Budget
            </label>
            <input
              type="text"
              value={Budget}
              onChange={(e) => setBudget(e.target.value)}
              id="monthly-budget"
              className="p-4 mb-3 mt-2 rounded-2xl bg-[#1C2739] border border-gray-300 placeholder:text-gray-500"
              placeholder="Enter Your Monthly Budget"
              />
              </div>
            {/* <button className="w-full bg-[#1C2739] rounded-2xl border border-gray-200 mt-3 p-4 text-white">
              Edit
            </button> */}
          </div>
        </div>
        {/* <div className="flex flex-col justify-center p-5 items-center bg-[#162033] border border-red-500 rounded-3xl gap-4 mt-10 text-white">
          <p className="bg-[#422837] p-5 rounded-full">
            <TriangleAlert className="text-red-500"></TriangleAlert>
          </p>
          <p>Danger Zone</p>
          <button className="w-full rounded-2xl cursor-pointer flex justify-center text-red-500 items-center gap-2 bg-[#1C2739] border border-gray-300 mt-3 p-4">
            <Trash className="text-red-500"></Trash> Reset All Data
          </button>
        </div> */}
      </div>
      <button
      onClick={HandleGetStartedBtn}
      className="w-full bg-[#1C2739] rounded-2xl border border-gray-200 mt-8 p-4 text-white">
        Get Started
      </button>
    </div>
  );
};

export default Onboarding;

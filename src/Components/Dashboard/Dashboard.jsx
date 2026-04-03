import { BookOpen, Coffee } from "lucide-react";
import React from "react";
import { useOutletContext } from "react-router";
const Dashboard = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-BD", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
//   const time = today.toLocaleTimeString("en-BD", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
const { expenses, budget } = useOutletContext()
  const Name = localStorage.getItem("Name");
  const spent = expenses.reduce((total, expense) => total + expense.amount, 0)
  const percentage = Math.min((spent / Number(budget)) * 100, 100);
  return (
    <div className="p-5">
      <div className="">
        <p className="text-4xl text-white">Hey, {Name}</p>
        <p className="mt-4 text-white/80">{date}</p>
      </div>
      <div className="mt-10 p-5 bg-[#1C2739] rounded-2xl border border-gray-200/40">
        <p className="text-white/70">Spent This Month</p>
        <p className="text-3xl text-white">
          ৳ {spent}/<span className="text-xl text-white/80">{budget}</span>
        </p>
        <div
          className="bg-violet-500 h-2 rounded-full mt-4 overflow-y-auto"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
        <div className="bg-[#1C2739] py-3 px-3 rounded-2xl border border-gray-200/40">
          <div className="text-purple-400 flex items-center gap-2">
            <BookOpen></BookOpen>
            <span>Education</span>
          </div>
          <p className="text-white/80 text-2xl mt-3">৳ 200</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-white/90 text-xl">Recent Transactions</p>
        <div>
          <div className="bg-[#1c2739] py-6 px-5 rounded-2xl border border-gray-200/40 mt-4 flex justify-between items-center">
            <p className="text-white/80 flex items-center gap-3">
            <Coffee className="text-pink-400"></Coffee> Coffee 
            </p>
            <span className="text-white">Today</span>
            <span className="text-white/80">-৳ 200</span>
          </div>
          <div className="bg-[#1c2739] py-6 px-5 rounded-2xl border border-gray-200/40 mt-4 flex justify-between items-center">
            <p className="text-white/80 flex items-center gap-3">
            <Coffee className="text-pink-400"></Coffee> Coffee 
            </p>
            <span className="text-white">Today</span>
            <span className="text-white/80">-৳ 200</span>
          </div>
          <div className="bg-[#1c2739] py-6 px-5 rounded-2xl border border-gray-200/40 mt-4 flex justify-between items-center">
            <p className="text-white/80 flex items-center gap-3">
            <Coffee className="text-pink-400"></Coffee> Coffee 
            </p>
            <span className="text-white">Today</span>
            <span className="text-white/80">-৳ 200</span>
          </div>
          <div className="bg-[#1c2739] py-6 px-5 rounded-2xl border border-gray-200/40 mt-4 flex justify-between items-center">
            <p className="text-white/80 flex items-center gap-3">
            <Coffee className="text-pink-400"></Coffee> Coffee 
            </p>
            <span className="text-white">Today</span>
            <span className="text-white/80">-৳ 200</span>
          </div>
          <div className="bg-[#1c2739] py-6 px-5 rounded-2xl border border-gray-200/40 mt-4 flex justify-between items-center">
            <p className="text-white/80 flex items-center gap-3">
            <Coffee className="text-pink-400"></Coffee> Coffee 
            </p>
            <span className="text-white">Today</span>
            <span className="text-white/80">-৳ 200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

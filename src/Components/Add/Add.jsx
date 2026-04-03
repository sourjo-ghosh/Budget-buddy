import { BookOpen, BusFront, Drama, EllipsisVertical, Popcorn } from "lucide-react";
import React, { use, useState } from "react";
import { useOutletContext } from "react-router";

const Add = () => {
  const [Category, setCategory] = useState("")
  const [Amount, setAmount] = useState("")
  const { expenses, setExpenses } = useOutletContext();
  return (
    <div className="py-3 px-5">
      <p className="text-white text-2xl">Add Expense</p>
      <input type="text" placeholder="Amount" className="w-full h-40 rounded-2xl mt-5 p-3 text-2xl bg-[#1C2739] text-white placeholder:text-white/50 border border-gray-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setAmount(e.target.value)} />
      <div>
        <p className="text-white text-lg mt-5">Category</p>
        <div className="grid grid-cols-3 gap-4">
          <button className={`border text-white px-4 py-3 rounded-2xl mt-3 flex flex-col items-center gap-2 ${Category === 'food' ? "border border-purple-500" : "border border-gray-500"}`} onClick={() => setCategory('food')}>
            <Popcorn></Popcorn> Food
          </button>
           <button className={`border text-white px-4 py-3 rounded-2xl mt-3 flex flex-col items-center gap-2 ${Category === 'transportation' ? "border border-purple-500" : "border border-gray-500"}`} onClick={() => setCategory('transportation')}>
            <BusFront></BusFront> Transportation
          </button>
           <button className={`border text-white px-4 py-3 rounded-2xl mt-3 flex flex-col items-center gap-2 ${Category === 'education' ? "border border-purple-500" : "border border-gray-500"}`} onClick={() => setCategory('education')}>
            <BookOpen></BookOpen> Education
          </button>
           <button className={`border text-white px-4 py-3 rounded-2xl mt-3 flex flex-col items-center gap-2 ${Category === 'entertainment' ? "border border-purple-500" : "border border-gray-500"}`} onClick={() => setCategory('entertainment')}>
            <Drama></Drama> Entertainment
          </button>
           <button className={`border text-white px-4 py-3 rounded-2xl mt-3 flex flex-col items-center gap-2 ${Category === 'other' ? "border border-purple-500" : "border border-gray-500"}`} onClick={() => setCategory('other')}>
            <EllipsisVertical></EllipsisVertical> Other
          </button>
        </div>
        <div className="mt-5">
          <label htmlFor="note" className="text-white text-lg">Note (Optional)</label>
          <input type="text" className="bg-[#1C2739] my-2 w-full p-5 text-white placeholder:text-white/50 border border-gray-200/40 focus:outline-none rounded-2xl" placeholder="Enter a note" />
          <label htmlFor="date" className="text-white text-lg mt-2">Date</label>
          <input type="date" className="bg-[#1C2739] mt-2 w-full p-5 text-white placeholder:text-white/50 border border-gray-200/40 focus:outline-none rounded-2xl" />
        </div>
        <button className="bg-purple-500 w-full rounded-2xl mt-5 p-4 text-white" >
          Add Expense
        </button>
      </div>
    </div>
  )
};

export default Add;

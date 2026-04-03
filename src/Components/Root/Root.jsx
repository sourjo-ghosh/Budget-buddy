import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Onboarding from "../Onboarding/Onboarding";
import { useState } from "react";
const Root = () => {
  const isSetupDone =
    localStorage.getItem("Name") && localStorage.getItem("Budget");
  if (!isSetupDone) {
    return <Onboarding />;
  }
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("Budget")) || 0,
  );
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
       <Outlet context={{ expenses, setExpenses, budget, setBudget }} />
      </main>
      <Navbar></Navbar>
    </div>
  );
};

export default Root;

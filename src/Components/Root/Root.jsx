import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Onboarding from "../Onboarding/Onboarding";
const Root = () => {
  const isSetupDone =
    localStorage.getItem("Name") && localStorage.getItem("Budget");
  if (!isSetupDone) {
    return <Onboarding />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Navbar></Navbar>
    </div>
  );
};

export default Root;

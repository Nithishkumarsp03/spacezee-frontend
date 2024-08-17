import { Outlet } from "react-router-dom";
import DaAccountHeader from "./DaAccountHeader";

const DaAccountCreation = () => {
  return (
    <div>
      <DaAccountHeader />
      <Outlet />
    </div>
  );
};

export default DaAccountCreation;

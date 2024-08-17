import { Outlet } from "react-router-dom";
import PBDTFooter from "../PBDT/PBDTFooter";
import PBDTHeader from "../PBDT/PBDTHeader";

function SpendingApp() {
  return (
    <div>
      <PBDTHeader />
      <Outlet />
      <PBDTFooter />
    </div>
  );
}

export default SpendingApp;

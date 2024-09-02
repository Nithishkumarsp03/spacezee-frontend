import React, { useState } from "react";
import PBDTHeader from "./PBDTHeader";
import PBDTContent from "./PBDTMainContent";
import PBDTFooter from "./PBDTFooter";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import Swal from "sweetalert2";
import { useCompleteTaskWithBroadcast } from "../../../../hooks/useCompleteTaskWithBroadcast";

function PBDTApp() {
  const completeTask = useCompleteTaskWithBroadcast();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const task = useSelector(selectTask);
  const validateData = () => {
    const databaseData = task.answers;

    const userExpenditure = parseFloat(totalExpenditure);
    const userIncome = parseFloat(totalIncome);
    const userSurplus = parseFloat(totalIncome - totalExpenditure);

    if (
      userExpenditure === parseFloat(databaseData.expenditure) &&
      userIncome === parseFloat(databaseData.income) &&
      userSurplus === parseFloat(databaseData.surplus)
    ) {
      completeTask();
      Swal.fire({
        title: "Success!",
        text: "Task completed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid entries.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };
  return (
    <div>
      <PBDTHeader />
      <PBDTContent
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
        totalExpenditure={totalExpenditure}
        setTotalExpenditure={setTotalExpenditure}
      />
      <PBDTFooter validateData={validateData} />
    </div>
  );
}

export default PBDTApp;

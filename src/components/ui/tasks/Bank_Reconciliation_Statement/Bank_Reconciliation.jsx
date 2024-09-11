import Bank_Reconciliation_StatementHeader from "./Bank_Reconciliation_StatementHeader";
import Bank_Reconciliation_StatementTable from "./Bank_Reconciliation_StatementTable";

function Bank_Reconciliation() {
  return (
    <div>
      <Bank_Reconciliation_StatementHeader />
      <Bank_Reconciliation_StatementTable />
    </div>
  );
}

export default Bank_Reconciliation;

import React from "react";
import "./Ledger.css";
import DataTile from "../../components/DataTile/DataTile";

function Ledger() {
  return (
    <div className="ledger">
      <DataTile title="Total Tips Earned this year" total="$400" />
      <DataTile title="Total Earned this year" total="$3480" />
    </div>
  );
}

export default Ledger;

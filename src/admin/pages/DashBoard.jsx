import React from "react";
import Summary from "../components/Summary";
import TableUser from "../TableUser";

function DashBoard() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">DashBoard</h1>
      <div className="flex flex-wrap justify-evenly gap-3 my-5 w-full">
        <Summary />
        <TableUser />
      </div>
    </div>
  );
}

export default DashBoard;

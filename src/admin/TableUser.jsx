import React from "react";

function TableUser() {
  const user = [
    {
      id: "1",
      name: "Boonmee Namkham",
      job: "Developer",
    },
    {
      id: "2",
      name: "Boonmee Namkham2",
      job: "Developer",
    },
    {
      id: "3",
      name: "Boonmee Namkham3",
      job: "Developer",
    },
  ];
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full h-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{item.name}</th>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUser;

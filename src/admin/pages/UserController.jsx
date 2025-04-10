import React from "react";

function UserController() {
  const user = [
    { name: "Kajonsak", age: "17", sex: "f" },
    { name: "Kajonsak", age: "17", sex: "f" },
    ,
    { name: "Kajonsak", age: "17", sex: "f" },
    ,
    { name: "Kajonsak", age: "17", sex: "f" },
    ,
    { name: "Kajonsak", age: "17", sex: "f" },
  ];
  return (
    <div className="">
      <div class="breadcrumbs text-md">
        <ul>
          <li>
            <a>หน้าเเรก</a>
          </li>
          <li>ฟาร์ม</li>
        </ul>
      </div>
      <div className="rounded-box border border-base-content/5 bg-base-100 w-full h-24 flex flex-col p-4 justify-center mb-5">
        <span className="mb-2">ค้นหาข้อมูล</span>
        <form action="">
          <input
            type="text"
            placeholder="กรอกคำค้นหา..."
            className="input w-full"
          />
        </form>
      </div>
      <table className="table bg-base-100">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.age}</th>
              <th>{item.sex}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserController;

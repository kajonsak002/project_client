import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const menu = [
    {
      name: "หน้าเเรก",
      path: "/",
    },
    {
      name: "คู่มือ",
      path: "book",
    },
    {
      name: "ราคากลาง",
      path: "price",
    },
    {
      name: "เเหล่งขายผลิตภัณฑ์",
      path: "market",
    },
    {
      name: "ฟาร์มต่างๆ",
      path: "farm",
    },
  ];
  return (
    <nav className="sticky top-0">
      <div className="flex justify-between p-4 bg-white drop-shadow-md items-center">
        <div className="logo">
          <p className="text-2xl font-bold">Logo</p>
        </div>
        <div className="flex gap-4">
          {menu.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="btn btn-primary">
            <Link to="login">เข้าสู่ระบบ</Link>
          </div>
          <div className="btn btn-outline btn-primary ">
            <Link to="register"> ลงทะเบียน</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

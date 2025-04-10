import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  LogOut,
  BookText,
  MailWarning,
  ChartColumnBig,
  Newspaper,
  Settings,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("กำลังออกจากระบบ");
    localStorage.removeItem("isLogin");
    setTimeout(() => {
      navigate("login");
    }, 1500);
  };
  return (
    <aside
      className={`bg-base-100 border-r border-base-200 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
      <div className="p-4">
        <h2
          className={`text-2xl font-bold text-center text-gray-800 ${
            !isOpen && "hidden"
          }`}>
          Admin Panel
        </h2>
      </div>
      <nav className="p-4 space-y-2">
        <Link to="dashboard">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <LayoutDashboard size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>Dashboard</span>
          </span>
        </Link>
        <Link to="user">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <Users size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>ข้อมูลฟาร์ม</span>
          </span>
        </Link>
        <Link to="book">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <BookText size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>
              ข้อมูลคู่มือการเลี้ยงสัตว์
            </span>
          </span>
        </Link>
        <Link to="post">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <Settings size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>จัดการโพสต์</span>
          </span>
        </Link>
        <Link to="post_report">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <MailWarning size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>
              จัดการรายงานโพสต์
            </span>
          </span>
        </Link>
        <Link to="news">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <Newspaper size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>
              เเจ้งเตือนข่าวสาร
            </span>
          </span>
        </Link>
        <Link to="report_animal">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <ChartColumnBig size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>
              รายงานสัตว์ที่เลี้ยง
            </span>
          </span>
        </Link>
        <Link to="report_product">
          <span
            className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
              !isOpen && "justify-center"
            }`}>
            <ChartColumnBig size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>
              รายงานผลิตภัณฑ์
            </span>
          </span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-base-200">
        <button
          onClick={() => handleLogout()}
          className={`flex items-center p-2 w-full hover:bg-base-200 rounded-lg cursor-pointer ${
            !isOpen && "justify-center"
          }`}>
          <LogOut size={20} />
          <span className={`ml-2 ${!isOpen && "hidden"}`}>ออกจากระบบ</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

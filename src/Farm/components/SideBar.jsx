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
      navigate("/");
    }, 1500);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/profile",
    },
  ];
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
          Farm Panel
        </h2>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <span
              className={`flex items-center p-2 hover:bg-base-200 rounded-lg ml-3 mb-2 ${
                !isOpen && "justify-center"
              }`}>
              {item.icon}
              <span className={`ml-2 ${!isOpen && "hidden"}`}>{item.name}</span>
            </span>
          </Link>
        ))}
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

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Farm/components/SideBar";
import Header from "../Farm/components/Header";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // setIsLogin(localStorage.getItem("isLogin"));
    setIsLogin(true);
  }, [isLogin]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return isLogin ? (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar isOpen={sidebarOpen} />
      <div className="flex-1 gap-2">
        <Header
          toggleSidebar={toggleSidebar}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <p className="text-5xl font-bold mb-2">!!!Oops</p>
      <p className="text-2xl font-bold">
        You do not have permission to access website on this page{" "}
        <a href="/" className="text-blue-500 underline">
          back
        </a>
      </p>
    </div>
  );
}

export default AdminLayout;

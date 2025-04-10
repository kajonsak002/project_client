import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">เข้าสู่ระบบ</h2>
          <form>
            <div className="form-control w-full mb-2">
              <label className="label mb-2">
                <span className="label-text text-black font-medium">
                  ชื่อผู้ใช้
                </span>
              </label>
              <input
                type="text"
                placeholder="กรอกชื่อผู้ใช้"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mb-2">
              <label className="label mb-2">
                <span className="label-text text-black font-medium">
                  รหัสผ่าน
                </span>
              </label>
              <input
                type="text"
                placeholder="กรอกรหัสผ่าน"
                className="input input-bordered w-full"
              />
            </div>
            <div className="card-actions mt-4 mb-2">
              <button className="btn btn-primary w-full">เข้าสู่ระบบ</button>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-500 underline hover:text-blue-700">
                <Link to="/register">ลงทะเบียน</Link>
              </span>
              <span className="text-blue-500 underline">ลืมรหัสผ่าน</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

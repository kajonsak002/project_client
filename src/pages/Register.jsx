import { LocateFixed } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="card bg-base-100 w-4xl shadow-sm">
          <div className="card-body">
            <h2 className="card-title flex justify-center">ลงทะเบียน</h2>
            <form onSubmit={""}>
              <div className="form-control w-full mb-2 flex gap-3">
                <div className="w-1/2">
                  <label className="label mb-2">
                    <span className="label-text text-black font-medium">
                      ชื่อฟาร์ม
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="กรอกชื่อฟาร์ม"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label mb-2">
                    <span className="label-text text-black font-medium">
                      อีเมล์
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="กรอกอีเมล์"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control w-full mb-2 flex gap-3">
                <div className="w-1/2">
                  <label className="label mb-2">
                    <span className="label-text text-black font-medium">
                      เบอร์โทรศัพท์
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="กรอกเบอร์โทรศัพท์"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="w-1/2">
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
              </div>
              <div className="form-control w-full mb-2 flex gap-3">
                <div className="w-1/2">
                  <label className="label mb-2">
                    <span className="label-text text-black font-medium">
                      ละติจูด
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label mb-2">
                    <span className="label-text text-black font-medium">
                      ลองติจูด
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control w-full flex flex-col mb-2">
                <label className="label mb-2">
                  <span className="label-text text-black font-medium">
                    เลือกรูปภาพ
                  </span>
                </label>
                <input type="file" className="file-input w-full" />
              </div>
            </form>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">ลงทะเบียน</button>
            </div>

            <div className="flex justify-end">
              <span className="text-blue-500 underline hover:text-blue-700">
                <Link to="/login">มีบัญชีอยู่เเล้ว?</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";

function AddGuileBook() {
  return (
    <>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <a>หน้าเเรก</a>
          </li>
          <li>
            <Link to={"/admin/book"}>จัดการคู่มือการเลี้ยงสัตว์</Link>
          </li>
          <li>เพิ่มข้อมูล</li>
        </ul>
      </div>

      <div className="card w-full bg-base-100 shadow-xl mt-3 h-full">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">เพิ่มคู่มือการเลี้ยงสัตว์</h2>
          <div className="flex w-full gap-4">
            <div className="w-1/3">
              <form>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text text-black mb-2">
                      ชื่อสัตว์
                    </span>
                  </label>
                  <select className="select select-bordered w-full" required>
                    <option value="">เลือกสัตว์</option>
                    <option>ไก่</option>
                    <option>หมู</option>
                    <option>วัว</option>
                  </select>
                </div>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text text-black mb-2">ชนิด</span>
                  </label>
                  <select className="select select-bordered w-full" required>
                    <option value="">เลือกสัตว์</option>
                    <option>ไก่เนื้อ</option>
                    <option>ไก่ไข่</option>
                    <option>หมู</option>
                    <option>โคเนื้อ</option>
                    <option>โคนม</option>
                  </select>
                </div>
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text text-black mb-2">
                      เลือกรูปภาพปก
                    </span>
                  </label>
                  <input type="file" className="file-input w-full" />
                </div>
              </form>
              <div className="img-preview border border-amber-950 h-[400px]">
                <img src="" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-editor w-full h-screen border border-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddGuileBook;

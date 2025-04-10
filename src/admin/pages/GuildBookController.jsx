import { Pencil, Plus, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function GuildBookController() {
  return (
    <>
      <div class="breadcrumbs text-md">
        <ul>
          <li>
            <a>หน้าเเรก</a>
          </li>
          <li>จัดการคู่มือการเลี้ยงสัตว์</li>
        </ul>
      </div>

      <div class="card w-full bg-base-100 shadow-xl mt-3">
        <div class="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 class="card-title">จัดการคู่มือการเลี้ยงสัตว์</h2>
            </div>
            <div>
              <Link to="add_guild_book">
                <div className="btn btn-primary">
                  <Plus />
                  เพิ่มข้อมูล
                </div>
              </Link>
            </div>
          </div>

          {/* search section */}
          <div className="search mt-2">
            <label className="floating-label">
              <span>ค้นหาข้อมูล</span>
              <input
                type="text"
                placeholder="ค้นหาข้อมูล"
                className="input input-md w-full"
              />
            </label>
          </div>

          {/* table section */}
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>ชื่อ</th>
                  <th>เนื้อหา</th>
                  <th>รูปภาพ</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td className="flex gap-2">
                    <div className="flex gap-2">
                      <button className="btn btn-error btn-sm">
                        <Trash2 size={16} />
                      </button>
                      <button className="btn btn-info btn-sm">
                        <Pencil size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* pagination section */}
          <div className="flex justify-center items-center mt-2">
            <div className="join">
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuildBookController;

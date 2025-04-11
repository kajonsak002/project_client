import axios from "axios";
import { Pencil, Plus, Trash2 } from "lucide-react";
import React, { use, useEffect } from "react";
import { Link } from "react-router-dom";

function GuildBookController() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://student.crru.ac.th/651463002/apiStudent/student.php"
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <a>หน้าเเรก</a>
          </li>
          <li>จัดการคู่มือการเลี้ยงสัตว์</li>
        </ul>
      </div>
      <div className="card w-full bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">จัดการคู่มือการเลี้ยงสัตว์</h2>
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
            <label className="floating-label w-full">
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
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>รหัสนักศึกษา</th>
                  <th>ชื่อ - นามสกุล</th>
                  <th>รูปภาพ</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr className="text-center">
                    <td key={index}>{index + 1}</td>
                    <td>{item.code}</td>
                    <td>{item.nameandsurname}</td>
                    <td>
                      <img
                        src={item.img}
                        alt={item.nameandsurname}
                        className="w-[100px] h-[100px] rounded-lg"
                      />
                    </td>
                    <td className="flex justify-center gap-2">
                      <div className="flex gap-2">
                        <button className="btn bg-[#DC2626] btn-sm">
                          <Trash2 size={18} />
                        </button>
                        <button className="btn bg-[#2563EB] btn-sm">
                          <Pencil size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuildBookController;

import { Search } from "lucide-react";
import React, { useState } from "react";

function FarmPage() {
  const [farms, setFarms] = useState([
    { name: "ฟาร์มไก่", location: "เชียงใหม่" },
    { name: "ฟาร์มหมู", location: "ลำพูน" },
    { name: "ฟาร์มวัว", location: "เชียงราย" },
    { name: "ฟาร์มเป็ด", location: "เชียงใหม่" },
  ]);

  return (
    <div className="container h-screen w-full mx-5 my-5">
      <div className="mx-auto my-auto">
        {/* Search Section */}
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="card-body">
            <h2 className="card-title">ค้นหาข้อมูล</h2>
            <div className="search">
              <label className="input w-full flex items-center gap-2">
                <Search size={20} color="black" />
                <input
                  type="search"
                  className="grow w-full"
                  placeholder="ค้นหาข้อมูล"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Farm List Section */}
        <div className="card bg-base-100 w-full h-[690px] shadow-sm mt-5 overflow-y-auto">
          <div className="card-body">
              {farms.map((item, index) => (
                <div className="card card-side bg-base-100 shadow-sm mb-5" key={index}>
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                      alt="Farm"
                      className="w-32 h-32 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.location}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">ดูรายละเอียด</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmPage;

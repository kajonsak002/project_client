import { Search } from "lucide-react";
import React, { useState } from "react";

function FarmPage() {
  const [farms, setFarms] = useState([
    {
      name: "ฟาร์มไก่",
      location: "ตำบลช้างเผือก อำเภอเมือง จังหวัดเชียงใหม่ 50300",
      view: 90,
    },
    {
      name: "ฟาร์มหมู",
      location: "ตำบลในเมือง อำเภอเมือง จังหวัดลำพูน 51000",
      view: 85,
    },
    {
      name: "ฟาร์มวัว",
      location: "ตำบลเวียง อำเภอเมือง จังหวัดเชียงราย 57000",
      view: 43,
    },
    {
      name: "ฟาร์มเป็ด",
      location: "ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200",
      view: 20,
    },
  ]);

  return (
    <div className="mx-auto px-5 my-5">
      {/* Search Section */}
      <div className="card bg-base-100 w-full shadow-sm h-[150px]">
        <div className="card-body ">
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
      <div className="card bg-base-100 w-full shadow-sm mt-5 h-[690px] overflow-y-auto">
        <div className="card-body">
          {farms.map((item, index) => (
            <div
              className="card card-side bg-base-100 h-[200px] shadow-sm mb-5"
              key={index}>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Farm"
                  className="w-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.location}</p>
                <p>จำนวนการเข้าชม {item.view} ครั้ง</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary h-[40px]">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FarmPage;

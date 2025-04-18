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

  const [searchTerm, setSearchTerm] = useState("");
  const filteredFarms = farms.filter(
    (farm) =>
      farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mx-auto px-5 my-5">
      {/* Search Section */}
      <div className="card bg-base-100 w-full shadow-sm h-[150px]">
        <div className="card-body ">
          <h2 className="card-title text-green-800">ค้นหาข้อมูล</h2>
          <div className="search">
            <label className="input w-full flex items-center gap-2">
              <Search size={20} color="black" />
              <input
                type="search"
                className="w-full"
                placeholder="ค้นหาข้อมูลฟาร์มจาก ชื่อฟาร์ม หรือ ที่อยู่"
                value={searchTerm}
                onChange={handleSearch}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Farm List Section */}
      <div className="card bg-base-100 w-full shadow-sm mt-5 overflow-y-auto">
        <div className="card-body">
          {filteredFarms.length > 0 ? (
            filteredFarms.map((item, index) => (
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
                    <button className="bg-green-600 hover:bg-green-700 text-white rounded-md w-[120px] h-[40px] mt-2 mb-[-10px]">
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center p-10">
              <h2 className="text-lg text-gray-500">ไม่พบข้อมูลที่ค้นหา</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FarmPage;

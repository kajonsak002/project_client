import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FarmPage() {
  const [farms, setFarms] = useState([
    {
      id: 1,
      name: "ฟาร์มรักษ์บ้านสวน",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 1",
      location: "ตำบลสันทราย อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50000",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 90,
    },
    {
      id: 2,
      name: "นายหนวดฟาร์มหมู",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 2",
      location: "ตำบลบ้านโพธิ์ อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา 30000",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 50,
    },
    {
      id: 3,
      name: "ตะวันฟาร์มไก่หนวด",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 3",
      location: "ตำบลสบป้าด อำเภอแม่เมาะ จังหวัดลำปาง 52000",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 40,
    },
    {
      id: 4,
      name: "ฟาร์มหมูของตะวัน",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 4",
      location: "ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 35,
    },
    {
      id: 5,
      name: "ฟาร์มควายเขาค้อ",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 5",
      location: "ตำบลเขาค้อ อำเภอเขาค้อ จังหวัดเพชรบูรณ์ 67270",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 33,
    },
    {
      id: 6,
      name: "ฟาร์มตะวันป่ายาง",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 6",
      location: "ตำบลวังยาง อำเภอเมืองสุพรรณบุรี จังหวัดสุพรรณบุรี 72000",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
      view: 30,
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
            <label className="input w-full flex farms-center gap-2">
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
            filteredFarms.map((farm, index) => (
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
                  <h2 className="card-title">{farm.name}</h2>
                  <p>{farm.location}</p>
                  <p>จำนวนการเข้าชม {farm.view} ครั้ง</p>
                  <div className="card-actions justify-end">
                    <Link to={`/farm?id=${farm.id}`} state={{ farm }}>
                      <button className="bg-green-600 hover:bg-green-700 text-white rounded-md w-[120px] h-[40px] mt-2 mb-[-10px]">
                        ดูรายละเอียด
                      </button>
                    </Link>
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

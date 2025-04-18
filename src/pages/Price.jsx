import { Search } from "lucide-react";
import React, { useState } from "react";

function Price() {
  const [meatPrices, setMeatPrices] = useState([
    {
      id: 1,
      name: "เนื้อหมูสันนอก",
      price: 150,
      unit: "บาท/กก.",
    },
    {
      id: 2,
      name: "เนื้อหมูสันใน",
      price: 165,
      unit: "บาท/กก.",
    },
    {
      id: 3,
      name: "เนื้อวัวสันนอก",
      price: 280,
      unit: "บาท/กก.",
    },
    {
      id: 4,
      name: "เนื้อไก่สด",
      price: 70,
      unit: "บาท/กก.",
    },
    {
      id: 5,
      name: "เนื้อแกะ",
      price: 450,
      unit: "บาท/กก.",
    },
    {
      id: 6,
      name: "เนื้อสันในวัว",
      price: 300,
      unit: "บาท/กก.",
    },
    {
      id: 7,
      name: "เนื้อสันนอกวัว",
      price: 450,
      unit: "บาท/กก.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredMeatPrices = meatPrices.filter((meat) =>
    meat.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                className="grow w-full"
                placeholder="ค้นหาข้อมูลราคาเนื้อสัตว์จากชื่อ"
                value={searchTerm}
                onChange={handleSearch}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-sm mt-5 overflow-y-auto">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table text-center">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อสินค้า</th>
                <th>ราคา</th>
                <th>หน่วย</th>
              </tr>
            </thead>
            <tbody>
              {filteredMeatPrices.length > 0 ? (
                filteredMeatPrices.map((meat) => (
                  <tr key={meat.id}>
                    <th>{meat.id}</th>
                    <td>{meat.name}</td>
                    <td>{meat.price}</td>
                    <td>{meat.unit}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-10">
                    ไม่พบข้อมูลที่ค้นหา
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Price;

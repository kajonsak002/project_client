import { CircleDollarSign, Earth, Heart, Info, Users } from "lucide-react";
import React from "react";

function Home() {
  const [data, setData] = React.useState([
    {
      name: "ฟาร์มรักษ์บ้านสวน",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 1",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
    {
      name: "นายหนวดฟาร์มหมู",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 2",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
    {
      name: "ตะวันฟาร์มไก่หนวด",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 3",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
    {
      name: "ฟาร์มหมูของตะวัน",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 4",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
    {
      name: "ฟาร์มควายเขาค้อ",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 4",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
    {
      name: "ฟาร์มตะวันป่ายาง",
      description: "รายละเอียดเกี่ยวกับฟาร์มที่ 4",
      image:
        "https://image.makewebeasy.net/makeweb/0/si08IWcIs/attachfile/pig02.jpg?v=202405291424",
    },
  ]);

  return (
    <div className="bg-[#F9FAFB]">
      {/* Hero Section with Banner Image */}
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url('bg.jpg')",
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-2 text-3xl font-bold">
              เเนวทางการเลี้ยงสัตว์เเบบเกษตรอินทรีย์
            </h1>
            <p className="mb-5">
              เว็บที่ให้ข้อมูลเกี่ยวกับเเนวทางการเลี้ยงสัตว์แบบเกษตรอินทรีย์
              พร้อมทั้งยังมีชุมชนไว้เเลกเปลี่ยนข้อมูลสำหรับเกษตรกร
            </p>
          </div>
        </div>
      </div>

      {/* เกษตร Section */}
      <div className="container mx-auto my-16 px-4">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/banner.jpg"
              alt="เกษตรกร"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
              เกษตรอินทรีย์คืออะไร?
            </h2>
            <p className="text-green-600 leading-relaxed">
              เกษตรอินทรีย์คือวิธีการเลี้ยงสัตว์และปลูกพืชที่เน้นความสมดุลของธรรมชาติ
              โดยหลีกเลี่ยงการใช้สารเคมีสังเคราะห์
              เพื่อสุขภาพที่ดีของทั้งผู้บริโภคและสิ่งแวดล้อม
              ด้วยวิธีการที่ยั่งยืน
              คุณสามารถสร้างผลผลิตที่มีคุณภาพและเป็นมิตรต่อโลก
            </p>
          </div>
        </div>
      </div>

      {/* ฟาร์มในระบบ */}
      <div className="mx-2 bg-[#ffffff] rounded-xl shadow my-5 p-5">
        <div className="title p-4">
          <h1 className="font-bold text-2xl text-green-800">
            ฟาร์มทั้งหมด <span className="text-green-600">982</span> ฟาร์ม
          </h1>
        </div>
        <div className="carousel carousel-center p-4 space-x-4 rounded-box overflow-x-auto mx-2">
          {data.map((farm, index) => (
            <div
              key={index}
              className="carousel-item w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img src={farm.image} alt={farm.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-green-800">{farm.name}</h2>
                  <p className="text-green-600 mt-[-5px]">Description</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary h-[40px]">
                      ดูเพิ่มเติม
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ประโยชน์ */}
      <div className="container mx-auto my-20 px-4 animate-on-scroll">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          ประโยชน์ของเกษตรอินทรีย์
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-xl ">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                สุขภาพที่ดี
              </h3>
              <p className="text-gray-600 text-center">
                ปลอดภัยจากสารเคมีตกค้าง
                ส่งผลดีต่อสุขภาพของทั้งผู้ผลิตและผู้บริโภค
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl ">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                {/* <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 hover:shadow-2xl transition-all duration-300 border border-green-100 transform hover:-translate-y-2"> */}
                <Earth className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                รักษาสิ่งแวดล้อม
              </h3>
              <p className="text-gray-600 text-center">
                ช่วยฟื้นฟูระบบนิเวศ ลดมลพิษและสร้างความสมดุลให้ธรรมชาติ
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl ">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                เพิ่มมูลค่าผลผลิต
              </h3>
              <p className="text-gray-600 text-center">
                ผลิตภัณฑ์เกษตรอินทรีย์เป็นที่ต้องการของตลาดและสร้างรายได้มั่นคง
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News section */}
      <div className="w-full bg-white h-[600px] p-8 animate-on-scroll">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          ข่าวสารต่างๆ
        </h2>
        <div className="flex justify-center items-center h-[400px] bg-green-50 rounded-2xl border-2 border-dashed border-green-200">
          <div className="text-center">
            <Info className="w-16 h-16 mx-auto text-green-300 mb-4" />
            <p className="text-4xl md:text-5xl text-green-300 font-light">
              Coming soon
            </p>
          </div>
        </div>
      </div>

      {/* ฟีเจอร์ของระบบ */}
      <div className="container mx-auto my-20 px-4 animate-on-scroll">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          ฟีเจอร์ของระบบ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="card-body items-center text-center p-8">
              <Info className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                ข้อมูลการเลี้ยงสัตว์
              </h3>
              <p className="text-gray-600 text-center">
                ให้ข้อมูลแนะนำการเลี้ยงสัตว์แบบเกษตรอินทรีย์เพื่อเป็นแนวทางสำหรับเกษตรกร
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full opacity-30"></div>
            </div>
          </div>
          <div className="card bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="card-body items-center text-center p-8">
              <CircleDollarSign className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                ข้อมูลราคากลางเนื้อสัตว์
              </h3>
              <p className="text-gray-600 text-center">
                ให้ข้อมูลราคากลางเนื้อสัตว์ ณ วันที่ปัจจุบัน
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full opacity-30"></div>
            </div>
          </div>
          <div className="card bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="card-body items-center text-center p-8">
              <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="card-title text-xl font-semibold mt-2 text-green-800">
                ระบบชุมชน
              </h3>
              <p className="text-gray-600 text-center">
                ชุมชนสำหรับแลกเปลี่ยนข้อมูลความรู้ต่างๆ สำหรับสมาชิกที่ลงทะเบียน
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

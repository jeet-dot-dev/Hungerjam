import React from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { TbGiftFilled } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="h-[75px] bg-white rounded-br-full flex">
        {/* Logo Section */}
        <div className="logo-container h-full w-[13%] bg-pink-500 flex items-center justify-around">
          <div className="logo h-[50px] w-[30%] mb-4 rounded-full">
            <img
              src="https://ideogram.ai/assets/progressive-image/balanced/response/GnQAUVOUQreVnhCZ5PUcQw"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="logo-icon h-[50px] w-[30%] flex items-center justify-center">
            <div className="icon-container bg-white p-2 rounded-full shadow-lg hover:scale-110 transform transition duration-300 ease-in-out">
              <HiOutlineBars3CenterLeft className="w-6 h-6 text-pink-500" />
            </div>
          </div>
        </div>

        {/* Dashboard and Icons Section */}
        <div className="other w-[87%] h-full flex">
          <div className="dashboard h-full w-[75%] bg-slate-50 flex items-center justify-between">
            <div className="dashboard-title ml-4">
              <h1 className="font-bold text-2xl text-gray-800 tracking-wide flex items-center">
                <span className="  px-2 py-1 rounded-lg mr-2 shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/512/6292/6292175.png" alt="" className="w-6 h-6" />
                </span>
                Dashboard
              </h1>
             
            </div>
            <div className="icons flex w-[200px] items-center justify-between m-4 relative">
              <div className="icon-container relative">
                <div className="notification-popup ml-2 bg-pink-400">3</div>
                <a href="">
                  <FaBell className="w-5 h-5 text-zinc-700" />
                </a>
              </div>
              <div className="icon-container relative">
                <div className="notification-popup ml-2 bg-red-400">5</div>
                <a href="">
                  <LuMessageSquare className="w-5 h-5 text-zinc-700" />
                </a>
              </div>
              <div className="icon-container relative">
                <a href="">
                  <TbGiftFilled className="w-5 h-5 text-zinc-700" />
                </a>
              </div>
              <div className="icon-container relative">
                <div className="notification-popup ml-2 bg-pink-400">8</div>
                <a href="">
                  <GiFoodTruck className="w-5 h-5 text-zinc-700" />
                </a>
              </div>
            </div>
          </div>

          {/* User Section */}
          <div className="user h-full w-[25%]  flex items-center justify-center gap-10 p-2">
            <div className="user-details flex flex-col items-start">
              <h1 className="text-sm font-bold text-zinc-800">@Jeet-Mandal</h1>
              <h2 className="text-xs text-zinc-600">Restaurant Owner</h2>
            </div>
            <div className="profile">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocKbMP_0ZdtJRKfY2a7sVH7EQOuesE849e8CM1WqqtcPXIYMj2Em=s360-c-no"
                alt="User Profile"
                className="rounded-full w-[40px] h-[40px] border-2 border-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

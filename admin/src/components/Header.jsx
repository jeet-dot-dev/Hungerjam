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
      <div className="h-[75px] bg-white shadow-md flex">
        {/* Logo Section */}
        <div className="logo-container h-full w-[13%] bg-gradient-to-r from-[#ffb701] to-[#ffa600] flex items-center justify-around ">
          <div className="logo h-[50px] w-[30%] mb-4 rounded-full hover:scale-105 transition-transform">
            <img
              src="https://opc.webdigify.com/OPC02/OPC032_hungerjam/image/catalog/logo.png"
              alt=""
              className="h-[50px] w-[100px]"
            />
          </div>
        </div>

        {/* Dashboard and Icons Section */}
        <div className="other w-[87%] h-full flex bg-gray-100">
          <div className="dashboard h-full w-[75%] flex items-center justify-between">
            <div className="dashboard-title ml-6">
              <h1 className="font-bold text-2xl text-gray-800 tracking-wide flex items-center">
                <span className="bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-2 rounded-xl mr-3 shadow-sm">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6292/6292175.png"
                    alt=""
                    className="w-6 h-6 hover:rotate-12 transition-transform"
                  />
                </span>
                Dashboard
              </h1>
            </div>

            

            <div className="icons flex w-[200px] items-center justify-between m-4 relative">
              <div className="icon-container relative hover:transform hover:scale-110 transition-all">
                <div className="notification-popup ml-2 bg-[#ffb701] ring-2 ring-white">
                  3
                </div>
                <a href="">
                  <FaBell className="w-5 h-5 text-zinc-700 hover:text-[#ffb701]" />
                </a>
              </div>
              <div className="icon-container relative hover:transform hover:scale-110 transition-all">
                <div className="notification-popup ml-2 bg-red-400 ring-2 ring-white">
                  5
                </div>
                <a href="">
                  <LuMessageSquare className="w-5 h-5 text-zinc-700 hover:text-red-400" />
                </a>
              </div>
              <div className="icon-container relative hover:transform hover:scale-110 transition-all">
                <a href="">
                  <TbGiftFilled className="w-5 h-5 text-zinc-700 hover:text-purple-500" />
                </a>
              </div>
              <div className="icon-container relative hover:transform hover:scale-110 transition-all">
                <div className="notification-popup ml-2 bg-pink-400 ring-2 ring-white">
                  8
                </div>
                <a href="">
                  <GiFoodTruck className="w-5 h-5 text-zinc-700 hover:text-pink-400" />
                </a>
              </div>
            </div>
          </div>

          {/* User Section */}
          <div className="user h-full w-[25%] flex items-center justify-center gap-6 p-2 bg-gradient-to-r from-orange-50 to-white">
            <div className="user-details flex flex-col items-start">
              <h1 className="text-sm font-bold text-zinc-800">@Jeet-Mandal</h1>
              <h2 className="text-xs text-zinc-600">Restaurant Owner</h2>
            </div>
            <div className="profile hover:transform hover:scale-110 transition-all">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocKbMP_0ZdtJRKfY2a7sVH7EQOuesE849e8CM1WqqtcPXIYMj2Em=s360-c-no"
                alt="User Profile"
                className="rounded-full w-[40px] h-[40px] border-2 border-[#ffb701] ring-2 ring-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />
    </>
  );
};

export default Header;

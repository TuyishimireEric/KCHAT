import React from "react";
import { Avatar } from "./Avatar";
import { FaAngleDown, FaApple } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { LuMessageSquareMore, LuUserRoundPlus } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-20 lg:w-1/5 flex flex-col bg-neutral-600/20 overflow-hidden rounded-3xl backdrop-blur-md border border-white/30">
      <div className="p-4 border-b border-white/10">
        <div className="flex justify-between items-center">
          <h1 className="text-md lg:text-xl font-bold">KCHAT</h1>
          <button className="text-white/70 hidden md:flex">
            <MdKeyboardArrowLeft />
          </button>
        </div>
        <button className="mt-4 flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition rounded-full w-full py-2 px-4">
          <IoMdAdd />
          <span>New Chat</span>
        </button>
      </div>

      <div className="p-4 border-b border-white/10">
        <h2 className="text-sm font-medium text-white/50">MAIN MENU</h2>
        <div className="mt-4 space-y-1">
          <button className="flex items-center space-x-3 w-full py-2 px-2 hover:bg-white/10 rounded-md text-left">
            <HiOutlineHome />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-3 w-full py-2 px-2 hover:bg-white/10 rounded-md text-left">
            <LuUserRoundPlus />
            <span>Invitation</span>
          </button>
          <button className="flex items-center space-x-3 w-full py-3 px-2 bg-white/10 border border-white/20 rounded-full text-left">
            <LuMessageSquareMore />
            <span>Message</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-white/10">
        <button className="flex items-center space-x-2 bg-white/10 border border-white/25 hover:bg-white/20 transition rounded-xl w-full py-2 px-4">
          <FaApple size={32} />
          <div className="flex flex-col justify-start text-left">
            <span className="text-xs text-gray-200/70">Download on the</span>
            <div className="text-sm mt-1">App Store</div>
          </div>
        </button>

        <div className="mt-6 bg-white/10 rounded-xl border border-white/20 p-4 text-center">
          <h3 className="text-lg font-semibold">Go to Pro</h3>
          <p className="text-xs text-white/70 mt-1">
            Try your experience for using more features
          </p>
          <button className="mt-4 flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 transition rounded-md w-full py-2 px-4">
            <WiStars size={24} className="text-orange-300" />
            <span className="text-sm">Upgrade Pro</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 mt-6">
          <div>
            <Avatar
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt="me"
              size="sm"
            />
          </div>

          <div className="flex-1">
            <div className="font-medium truncate">Naimur Rahman</div>
          </div>
          <button>
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

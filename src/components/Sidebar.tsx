import React from "react";
import { Avatar } from "./Avatar";

const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col bg-neutral-600/30 overflow-hidden rounded-3xl backdrop-blur-md border border-white/30">
      <div className="p-4 border-b border-white/10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">KCHAT</h1>
          <button className="text-white/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <button className="mt-4 flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition rounded-full w-full py-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>New Chat</span>
        </button>
      </div>

      <div className="p-4 border-b border-white/10">
        <h2 className="text-sm font-medium text-white/50">MAIN MENU</h2>
        <div className="mt-4 space-y-1">
          <button className="flex items-center space-x-3 w-full py-2 px-2 hover:bg-white/10 rounded-md text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-3 w-full py-2 px-2 hover:bg-white/10 rounded-md text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Invitation</span>
          </button>
          <button className="flex items-center space-x-3 w-full py-2 px-2 bg-white/20 rounded-md text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span>Message</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-white/10">
        <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition rounded-md w-full py-2 px-4">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2C5.58 2 2 5.58 2 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
          <span>Download on the</span>
        </button>
        <div className="text-center text-sm mt-1">App Store</div>

        <div className="mt-6 bg-white/10 rounded-md p-4 text-center">
          <h3 className="text-lg font-semibold">Go to Pro</h3>
          <p className="text-sm text-white/70 mt-1">
            Try your experience for using more features
          </p>
          <button className="mt-4 flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 transition rounded-md w-full py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span>Upgrade Pro</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 mt-6">
          <Avatar
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="me"
            size="sm"
          />

          <div className="flex-1">
            <div className="font-medium truncate">Naimur Rahman</div>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

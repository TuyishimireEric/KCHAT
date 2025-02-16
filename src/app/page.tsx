// pages/index.tsx
"use client";

import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen p-6 gap-6 bg-cover bg-center font-sans overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

import { Contact, Message } from "@/types/type";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { FaPlay } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { GrFormAttachment } from "react-icons/gr";
import { CiMicrophoneOn } from "react-icons/ci";

interface MessagesProps {
  selectedContact: Contact;
}

export const Messages = ({ selectedContact }: MessagesProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedContact) {
      const storedMessages = localStorage.getItem(
        `messages_${selectedContact.id}`
      );
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        const initialMessage = {
          id: "1",
          sender: selectedContact.firstName,
          avatar: selectedContact.avatar,
          content:
            "Nix, your gamer boyfriend, had been streaming in his room. His cam was off but still his mic was on. He had hundreds of thousands of people watching him. Nix heard you enter his room, lifting his arms as you sat in his lap.",
          timestamp: "Sunday 11:40 am",
          isUser: false,
        };
        setMessages([initialMessage]);
        localStorage.setItem(
          `messages_${selectedContact.id}`,
          JSON.stringify([initialMessage])
        );
      }
    }
    scrollToBottom();
  }, [selectedContact]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (selectedContact) {
      localStorage.setItem(
        `messages_${selectedContact.id}`,
        JSON.stringify(messages)
      );
    }
  }, [messages, selectedContact]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() && selectedContact) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "You",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        content: currentMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isUser: true,
      };

      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="hidden bg-black/20 md:flex w-1/2 xl:w-2/3 backdrop-blur-md flex-col relative border-l border-white/10">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <div className="rounded-lg p-4 max-w-xs mx-auto">
          <div className="flex flex-col items-center">
            <Avatar
              src={selectedContact.avatar}
              alt={selectedContact.firstName}
              size="md"
            />
            <h2 className="font-bold text-white text-lg">
              {selectedContact.firstName} {selectedContact.lastName}
            </h2>
            <p className="text-white/70 text-sm text-center">
              Mix your gamer boyfriend...
            </p>
            <div className="text-xs text-white/50 mt-1">By @shafayet_272</div>
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-start space-x-2 ">
              <div>
                {!message.isUser && (
                  <Avatar src={message.avatar} alt={message.sender} size="sm" />
                )}
              </div>
              <div>
                <div className="flex justify-between items-center mb-1 space-x-2 w-full">
                  <div className="flex gap-4 w-grow ">
                    <span className="text-white/90 text-sm font-medium">
                      {message.sender}
                    </span>
                    <span className="text-white/50 text-xs bg-white/10 px-1 rounded">
                      k.ai
                    </span>
                    {!message.isUser && message.id === "1" && (
                      <FaPlay className="h-4 w-4 text-white/50" />
                    )}
                  </div>

                  <span className="text-white/50 text-xs w-max">
                    {message.timestamp}
                  </span>
                </div>
                <div
                  className={`rounded-lg p-3  max-w-[75%] ${
                    message.isUser
                      ? "bg-green-600/50 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
              {message.isUser && (
                <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden flex-shrink-0">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4">
        <div className="relative rounded-3xl p-2">
          <textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder="Type here..."
            className="w-full bg-white/10 backdrop-blur-md rounded-lg pb-16 p-4 text-white resize-none h-24 focus:outline-none focus:ring-1 focus:ring-white/30"
            rows={1}
          />
          <div className="absolute w-full justify-between left-0 bottom-2 p-4 flex space-x-2">
            <div className="flex items-center gap-2">
              <button className="text-white/60 hover:text-white transition">
                <GrFormAttachment size={32} />
              </button>
              <button className="text-white/60 hover:text-white transition">
                <CiMicrophoneOn size={24} />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="bg-white/10 hover:bg-white/30 border border-white/20 rounded-full p-2 text-white transition"
            >
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

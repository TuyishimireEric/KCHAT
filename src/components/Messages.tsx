import { Contact, Message } from "@/types/type";
import { PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";

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
          sender: selectedContact.name,
          avatar: selectedContact.avatar,
          content:
            "Nix, your gamer boyfriend, had been streaming in his room. His cam was off but still his mic was on. He had hundreds of thousands of people watching him. Nix heard you enter his room, lifting his arms as you sat in his lap.",
          timestamp: "11:40 am",
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
              alt={selectedContact.name}
              size="md"
            />
            <h2 className="font-bold text-white text-lg">Collen Mosses</h2>
            <p className="text-white/70 text-sm text-center">
              Nix, your gamer boyfriend...
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
            <div className="flex items-start space-x-2 max-w-[75%]">
              {!message.isUser && (
                <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden flex-shrink-0">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center mb-1 space-x-2">
                  <span className="text-white/70 text-sm font-medium">
                    {message.sender}
                  </span>
                  <span className="text-white/50 text-xs">
                    {message.timestamp}
                  </span>
                  {!message.isUser && message.id === "1" && (
                    <PlayIcon className="h-4 w-4 text-white/50" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${
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

      <div className="p-4 border-t border-white/10">
        <div className="relative">
          <textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type here..."
            className="w-full bg-white/10 backdrop-blur-md rounded-lg py-2 pl-4 pr-14 text-white resize-none h-12 focus:outline-none focus:ring-1 focus:ring-white/30"
            rows={1}
          />
          <div className="absolute right-2 top-2 flex space-x-2">
            <button className="text-white/60 hover:text-white transition">
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
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
            <button className="text-white/60 hover:text-white transition">
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
            <button
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 rounded-full p-1 text-white transition"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

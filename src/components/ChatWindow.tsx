import React from "react";
import { useState, useEffect } from "react";
import { contacts } from "@/constant";
import { Contact } from "@/types/type";
import { Messages } from "./Messages";
import { ContactList } from "./ContactsList";
import { BiMessageSquareAdd } from "react-icons/bi";

const ChatWindow = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts[0]
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!selectedContact && contacts.length > 0) {
      setSelectedContact(contacts[0]);
    }
  }, []);

  const todayContacts = contacts.filter(
    (contact) =>
      contact.time === "Today" &&
      [contact.name, contact.lastMessage].some((field) =>
        field.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  const yesterdayContacts = contacts.filter(
    (contact) => contact.time === "Yesterday" &&
    [contact.name, contact.lastMessage].some((field) =>
      field.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="w-full md:w-auto md:flex-1 flex bg-neutral-600/30 overflow-hidden rounded-3xl backdrop-blur-md border border-white/30">
      <div className="w-1/3 md:w-auto md:flex-1 bg-black/20 flex flex-col backdrop-blur-md border-r border-white/10">
        <div className="p-4 border-b border-white/10 flex w-full justify-between items-center">
          <h2 className="text-xl font-medium text-white">Message</h2>
          <div className="flex items-center p-3 border border-white/30 rounded-full">
            <BiMessageSquareAdd size={24} />
          </div>
        </div>
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="w-full bg-white/10 backdrop-blur-md rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="px-4">
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white">
                Today
              </span>
            </div>

            <ContactList
              contacts={todayContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />

            <div className="text-center my-4">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white">
                Yesterday
              </span>
            </div>

            <ContactList
              contacts={yesterdayContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
          </div>
        </div>
      </div>

      {selectedContact && <Messages selectedContact={selectedContact} />}
    </div>
  );
};
export default ChatWindow;

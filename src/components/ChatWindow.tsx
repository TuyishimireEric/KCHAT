import React from "react";
import { useState, useEffect } from "react";
import { contacts } from "@/constant";
import { Contact } from "@/types/type";
import { Messages } from "./Messages";
import { ContactList } from "./ContactsList";
import { BiMessageSquareAdd } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";

const ChatWindow = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts[0]
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!selectedContact && contacts.length > 0) {
      setSelectedContact(contacts[0]);
    }
  }, [selectedContact]);

  const todayContacts = contacts.filter(
    (contact) =>
      contact.time === "Today" &&
      [contact.firstName, contact.lastName, contact.lastMessage].some((field) =>
        field.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  const yesterdayContacts = contacts.filter(
    (contact) =>
      contact.time === "Yesterday" &&
      [contact.firstName, contact.lastName, contact.lastMessage].some((field) =>
        field.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <div className="w-full md:w-auto md:flex-1 flex bg-neutral-600/30 overflow-hidden rounded-3xl backdrop-blur-md border border-white/20">
      <div className="w-1/3  md:w-auto md:flex-1 bg-black/20 ga-2 flex flex-col backdrop-blur-md border-r border-white/10">
        <div className="flex flex-col w-full p-4 gap-2 justify-between items-center">
          <div className=" border-white/10 flex w-full justify-between items-center">
            <h2 className="text-xl font-medium text-white">Message</h2>
            <div className="flex items-center p-2 border border-white/30 rounded-full">
              <BiMessageSquareAdd size={20} />
            </div>
          </div>
          <div className="relative w-full border border-white/20 rounded-full">
            <LuSearch className="h-5 w-5 absolute left-3 top-2.5 text-white/60" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="w-full bg-white/10 backdrop-blur-md rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="p-4">
            <div className="text-center mb-4 relative">
              <span className="inline-block px-3 py-1 bg-[#393933] z-40 backdrop-blur-md rounded-full text-xs text-white">
                Today
              </span>
              <div className="absolute top-3 w-full h-[1px]  bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <ContactList
              contacts={todayContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />

            <div className="text-center my-4 relative">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white">
                Yesterday
              </span>
              <div className="absolute top-3 w-full h-[1px]  bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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

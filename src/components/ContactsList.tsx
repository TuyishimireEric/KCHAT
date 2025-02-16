import { Contact } from "@/types/type";
import { Avatar } from "./Avatar";

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact) => void;
}

export const ContactList = ({
  contacts,
  selectedContact,
  setSelectedContact,
}: ContactListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => setSelectedContact(contact)}
          className={`flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition border ${
            selectedContact?.id === contact.id
              ? "bg-white/5 border-gray-200/60"
              : "bg-white/5 border-gray-100/30 hover:bg-white/5"
          }`}
        >
          <Avatar src={contact.avatar} alt={contact.name} size="sm" />
          <div className="flex-1 min-w-0 gap-3">
            <div className="text-base font-medium text-white">{contact.name}</div>
            <div className="text-sm text-white/80 truncate">
              {contact.lastMessage}
            </div>
          </div>
          <div className="text-xs text-white/60 flex-shrink-0">03:54 PM</div>
        </div>
      ))}
    </div>
  );
};

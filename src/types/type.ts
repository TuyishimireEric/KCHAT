export type Message = {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isUser?: boolean;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
}

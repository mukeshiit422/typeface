import { Message } from "../message/Types"

export type UserType = {
    id: number,
    name : string,
    email : string,
    lastMessage : string,
    lastMessageTime : string
    message : Message[]
}

export type UserDataType = {
    users: UserType[],
    setUserId : (id: number) => void;
    userId: number | undefined
  }
import { Message } from "../message/Types"

export type UserType = {
    id: number,
    name : string,
    email : string,
    lastMessage : string,
    lastMessageTime : string
    message : Message[]
}
import { UserType } from "../user/UserType"
export type User = {
    name : string,
    email ?: string
}
export type Message ={
    id : number,
    isDeleted : boolean,
    message : string,
    createAt:  string
}

export type MessageListType = {
    messages :  Message[],
    setDeletedMessageId : (deletedMessageId : number)=> void
  }
  
export type MeaageFormatedType = {
  message : Message,
  setDeletedMessageId : (deletedMessageId : number)=> void
}

export type MessageBodyType = {
    setUsers : (users : UserType[])=> void;
    user : UserType,
  }

 export  type FooterType = {
    message : Message[],
    setMessage : (mes : Message[]) => void;
    
  }
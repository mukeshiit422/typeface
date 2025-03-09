export type User = {
    name : string,
    email ?: string
}
export type Message ={
    user :  User,
    message : string,
    createAt?:  string
}
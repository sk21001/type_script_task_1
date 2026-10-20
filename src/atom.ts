import { atom } from "jotai";

 interface UserDetails{
    name:string,
    email:string,
    phone:string,
    password:string
}

export const userDetails=atom<UserDetails[]>([])

export const userInputDetail=atom<UserDetails>( {
    name: "",
    email: "",
    phone: "",
    password: "",
  })
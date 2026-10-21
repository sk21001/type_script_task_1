import { atom } from "jotai";

 interface UserDetails{
    email:string,
    password:string,
    address:string,
    address2:string,
    city:string,
    state:string,
    zip:string,
    isChecked:boolean
}

export const userDetails=atom<UserDetails[]>([])

export const userInputDetail=atom<UserDetails>( {
     email:"",
    password:"",
    address:"",
    address2:"",
    city:"",
    state:"",
    zip:"",
    isChecked:false
  })
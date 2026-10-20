import { useAtom } from "jotai"
import { userDetails, userInputDetail } from "../atom"
import { Outlet } from "react-router-dom"

const UserForm = () => {

const [users,setUsers]=useAtom(userDetails)
const [userInput,setUserInput]=useAtom(userInputDetail)

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault() 
   setUsers([...users,userInput])
}
const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
   setUserInput({...userInput,[e.target.name]:e.target.value})
}

  return (
   <>
   <form onSubmit={handleSubmit} >
     <label>Name : </label> <input type="text" placeholder="Enter your name" onChange={handleUserInput} name="name" ></input>
     <label>Email : </label> <input type="email" placeholder="Enter your Email" onChange={handleUserInput} name="email" ></input>
     <label>Phone : </label> <input type="tel" placeholder="Enter your phone" onChange={handleUserInput} name="phone" ></input>
     <label>Password : </label> <input type="password" placeholder="Enter your password" onChange={handleUserInput} name="password" ></input>
     <button type="submit" >Submit</button>
   </form>
   <Outlet/>
   </>
  )
}
export default UserForm
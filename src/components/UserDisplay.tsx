import React from "react"
import { useAtomValue } from "jotai"
import { userDetails } from "../atom"

const UserDisplay = () => {
 const users=useAtomValue(userDetails)
 return (
   <>
  {users.map((user, id) => (
    <React.Fragment key={id}>
      <h2>Email : {user.email}</h2>
      <h2>Password : {user.password}</h2>
      <h2>Address : {user.address}</h2>
      <h2>Address2 : {user.address2}</h2>
      <h2>City : {user.city}</h2>
      <h2>State : {user.state}</h2>
      <h2>ZipCode : {user.zip}</h2>
      <h2>Terms : {user.isChecked ? "Accepted" : "Not Accepted"}</h2>
    </React.Fragment>
  ))}
</>
  )
}

export default UserDisplay
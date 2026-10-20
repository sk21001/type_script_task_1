import { useAtomValue } from "jotai"
import { userDetails } from "../atom"


const UserDisplay = () => {

    const users=useAtomValue(userDetails)

  return (
    <>
    {users.map(user=>(
    <>
    <h2>{user.name}</h2>
    <h2>{user.email}</h2>
    <h2>{user.phone}</h2>
    <h2>{user.password}</h2>
    </>
))}
    </>
  )
}

export default UserDisplay
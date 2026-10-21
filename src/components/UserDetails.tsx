import UserDisplay from "./UserDisplay"
import UserForm from "./UserForm"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const UserDetails = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm/>}></Route>
        <Route path="/displayusers" element={<UserDisplay/>}  ></Route>
      </Routes>
    </Router>
  )
}

export default UserDetails
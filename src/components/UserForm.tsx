import { useAtom } from "jotai"
import { userDetails, userInputDetail } from "../atom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom"

const UserForm = () => {

const [users,setUsers]=useAtom(userDetails)
const [userInput,setUserInput]=useAtom(userInputDetail)
const navigate=useNavigate()

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault() 
   setUsers([...users,userInput])
   navigate('/displayusers')
}
const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
   setUserInput({...userInput,[e.target.name]:e.target.value})
}

const handleSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setUserInput({...userInput,[e.target.name]:e.target.value})
}

const handleCheck=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUserInput({...userInput,[e.target.name]:e.target.checked})
}

   return (
    <Form className="container-fluid" onSubmit={handleSubmit} >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleUserInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleUserInput} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name="address" onChange={handleUserInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={handleUserInput} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" onChange={handleUserInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name="state" onChange={handleSelect} >
            <option>Choose...</option>
            <option>Tamil Nadu</option>
            <option>Keralam</option>
            <option>Karnataka</option>
            <option>Andrapradesh</option>
            <option>Telungana</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" onChange={handleUserInput} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" name="isChecked" onChange={handleCheck}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default UserForm
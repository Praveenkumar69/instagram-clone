<Card style={{ width: '18rem' }}>
  <Card>
  <h1>Instagram</h1>
  <Card>
  <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Card>
  <Button variant="primary" type="submit">
    Log In
  </Button>
  </Card>
  <Card>
    <Card><hr></hr></Card>
    <Card>or</Card>
    <Card><hr></hr></Card>
  </Card>
</Form>
  </Card>
  </Card>
</Card>




import React from "react"
// import './App.css';
import {Button,Card,Main,Form} from "react-bootstrap"
import img1 from "./Image/02.png"

const MainFile=()=>{

  return(
    <>
    <main>
    <article className="article">

        <Card style={{ width: '18rem' }} className="div1">
  <Card.Body>
    <h1>Instagram</h1>
    <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </Card.Body>
  <hr />
  <Card>
  <h1>dk</h1>
</Card>
</Card>



<Card style={{ width: '18rem' }} className="div25">
  <Card.Img vardiant="top" src={img1} />
</Card>
</article>
    </main>
    
    </>
  );
}
export default MainFile;























<Card.Body>
    <h1 className="insta">Instagram</h1>
    <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <span>Phone number, username, or email</span> */}
    <Form.Control type="text" placeholder="Phone number, username, or email" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </Card.Body>
  <hr />
  <Card>
  <p >Don't have an account? Sign up</p>
</Card>
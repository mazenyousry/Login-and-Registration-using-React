import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (

        <Container style={{minHeight: "680px"}} >
        <Row className="py-5 d-flex justify-content-center">
        <form action="/login">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto tittle-login"><h4>Create New Account</h4></label>
            <input 
              placeholder="User Name..."
              type="text"
              className="user-input my-2 text-center mx-auto"
              required/>
            <input 
              placeholder="Email..."
              type="email"
              className="user-input my-3 text-center mx-auto"
              required/>
            <input 
              placeholder="Password..."
              type="password"
              className="user-input text-center mx-auto"
              required/>
            <input 
              placeholder="Confirm Password..."
              type="password"
              className="user-input my-3 text-center mx-auto"
              required/>
             <p className="user-input my-3 text-center mx-auto" >
                     <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
             </p>
            <button id="sub_btn" type="submit" className="btn-login mx-auto mt-4">Sign Up </button>
             
            <label className="mx-auto my-4">
                Already have an account ?{""}
                  <Link to="/login" style={{textDecoration:'none'}}>
                    <span style={{ cursor: "pointer" }} className="text-danger">
                      Log in               
                    </span>
                  </Link>
                
            </label>
             
          </Col>
        </form> 
        </Row>
        </Container>
        // <div className="text-center m-5-auto">
        //     <h2>Join us</h2>
        //     <h5>Create your personal account</h5>
        //     <form action="/home">
        //         <p>
        //             <label>Username</label><br/>
        //             <input type="text" name="first_name" required />
        //         </p>
        //         <p>
        //             <label>Email address</label><br/>
        //             <input type="email" name="email" required />
        //         </p>
        //         <p>
        //             <label>Password</label><br/>
        //             <input type="password" name="password" required />
        //         </p>
        //         <p>
        //             <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
        //         </p>
        //         <p>
        //             <button id="sub_btn" type="submit">Register</button>
        //         </p>
        //     </form>
        //     <footer>
        //         <p><Link to="/">Back to Homepage</Link>.</p>
        //     </footer>
        // </div>
  )
}

export default RegisterPage
import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


// import "./loginform.css"


const LoginForm = () => {
  return (
    <Container style={{minHeight: "680px"}}>
    <Row className="py-5 d-flex justify-content-center">
    <form action="/">
      <Col sm="12" className="d-flex flex-column">
        <label className="mx-auto tittle-login"><h2>Login Page</h2></label>
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
        <label className="mx-auto my-4">
        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
        </label>
        <button className="btn-login mx-auto mt-4">Login </button>
        <label className="mx-auto my-4">
            Don't have an account yet?{""}
              <Link to="/register" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Sign up               
                </span>
              </Link>
            
        </label>
          
      </Col>
    </form> 
    </Row>
    </Container>
  )
}

export default LoginForm;

// import React, { useState } from 'react'
// import "./loginform.css"



// const LoginForm = () => {

//   const [popupStyle, showPopup] = useState("hide")

//   const popup = () => {
//     showPopup("login-popup")
//     setTimeout(() => showPopup("hide"),3000)
//   }

//   return (
//     <div className="cover">
//       <h1>Login</h1>
//       <input type="Email" placeholder="Email address" required/>
//       <input type="password" placeholder="password" required/>

//       {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}

//       <div className="login-btn" onClick={popup}>Login</div>
//       <p className="text">Or login using</p>
//       {/* <div className="alt-login">
//         <Button className="social-icon facebook">
//           <FontAwesomeIcon icon={faFacebookF} />
//         </Button>
//       </div> */}
//       <div className={popupStyle}>
//         <h3>Login Failed</h3>
//         <p>Username or password incorrect</p>
//       </div>
//     </div>
//   )
// }

// export default LoginForm
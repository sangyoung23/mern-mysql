import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleUptUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleUptPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    let body = {
      username: username,
    }

    try {
      let res = await axios.post("http://localhost:8800/register", body)

      if (res.data.success) {
        let params = {
          username: username,
          password: password
        }

        let res = await axios.post("http://localhost:8800/auth/register", params)
        
        if (res.data.success) {
          alert("회원가입 완료")
          navigate("/auth")
        }
      }
    } catch(err) {
      setMessage(err.response.data.message)
    }
  }

  return (<Form>
    <Form.Group className="mb-3" controlId="formBasicUsername">
      <Form.Label>username</Form.Label>
      <Form.Control onChange={handleUptUsername} name="username" type="text" placeholder="Enter username" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleUptPassword} type="password" placeholder="Password" />
    </Form.Group>

    <p>{message}</p>
  
    <Button onClick={handleFormSubmit} variant="primary" type="submit">
      Submit
    </Button>
  </Form>)
};

export default Register;

// import axios from "axios";
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Update = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { content, password } = location.state;

//   const [message, setMessage] = useState({
//     content: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   let messageId = location.pathname.split("/")[2];

//   const handleClick = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:8800/messages/${messageId}`, message);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="form">
//       <p>Update Message</p>
//       <input
//         type="text"
//         placeholder="content"
//         onChange={handleChange}
//         name="content"
//         value={content}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//         name="password"
//         value={password}
//       />
//       <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// };

// export default Update;

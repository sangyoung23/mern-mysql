import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClickLogin = async (e) => {
    e.preventDefault()

    let body = {
      username: username,
      password: password
    }

    try {
      let res = await axios.post("http://localhost:8800/login", body)

      // 로그인 성공
      if (res.data.success) {
        navigate("/")
      }
    } 
    // 로그인 실패시에는 try 안에 조건을 거는게 아니라 catch문에서 에러처리를 해줘야함
    catch(err) {
      setMessage(err.response.data.message)
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username</Form.Label>
        <Form.Control onChange={handleChangeUsername} name="username" type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChangePassword} type="password" placeholder="Password" />
      </Form.Group>

      <p>{message}</p>
      <p>계정이 없으신가요? <Link to={"/register"}>회원가입</Link></p>
      <Button onClick={handleClickLogin} variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Auth;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// interface Message {
//   content: string;
//   password: string;
// }

// const Add = () => {
//   const [message, setMessage] = useState<Message>({
//     content: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   let navigate = useNavigate();

//   const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     try {
//       await axios.post<Message[]>(
//         "http://localhost:8800/messages/upt",
//         message
//       );
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="form">
//       <p>Send a New Message</p>
//       <input
//         type="text"
//         placeholder="content"
//         onChange={handleChange}
//         name="content"
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={handleChange}
//         name="password"
//       />
//       <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// };

// export default Add;

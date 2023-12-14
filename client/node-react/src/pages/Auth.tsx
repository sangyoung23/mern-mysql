import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {/* 가입된 유저가 아니면 메시지 띄우기 , 회원가입으로 이동 */}
      <Button variant="primary" type="submit">
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

import React from "react";

const Register = () => {
  return <div></div>;
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

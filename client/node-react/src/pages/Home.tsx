import React from "react";

const Home = () => {
  return <div>MainPage</div>;
};

export default Home;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// interface Message {
//   id: string;
//   content: string;
//   password?: string;
// }

// const Home = () => {
//   const [messages, setMessages] = useState<Message[]>([]);

//   useEffect(() => {
//     const fetchAllMessages = async () => {
//       try {
//         const res = await axios.get<Message[]>(
//           "http://localhost:8800/messages"
//         );
//         setMessages(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllMessages();
//   }, []);

//   const handleDelete = async (id: Message["id"]) => {
//     let body = {
//       id: id,
//     };

//     // axios.delete를 사용할 때, data 속성을 사용하여 객체 전달 해야함
//     try {
//       await axios.delete("http://localhost:8800/messages/delete", {
//         data: body,
//       });
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div className="messages">
//         {messages.length > 0 ? (
//           messages.map((message) => (
//             <div className="message" key={message.id}>
//               <h2>{message.content}</h2>
//               <button
//                 className="delete"
//                 onClick={() => handleDelete(message.id)}
//               >
//                 Delete
//               </button>
//               <button className="update">
//                 <Link
//                   to={`/update/${message.id}`}
//                   state={{
//                     content: message.content,
//                     password: message.password,
//                   }}
//                 >
//                   Update
//                 </Link>
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No Messages available</p>
//         )}
//       </div>
//       <button>
//         <Link to="/add">Send a Message</Link>
//       </button>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const res = await axios.post("http://localhost:8800/messages");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMessages();
  }, []);

  return <>Messages</>;
};

export default Messages;

import React, { useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import InfoBar from '../components/InfoBar/InfoBar'
import Messages from "../components/Messages/Messages"
import TextContainer from "../components/TextContainer/TextContainer";
import Input from "../components/Input/Input";

const ENDPOINT = 'http://localhost:8800';
let sokect;

function Chat() {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [users, setUsers] = useState("")
    return (<div></div>)
}

export default Chat
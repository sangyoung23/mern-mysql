import React, { useEffect } from 'react'
import io from 'socket.io-client'
import socket from 'socket.io-client/lib/socket'

function Chat() {
    const socket = io('http://localhost:8800')
    
    useEffect(() => {

        socket.on('connect', () => {
            console.log('Connected to server')
        })

        socket.on('message', (data: string) => {
            console.log('Received message:', data)
        })

        return () => {
            socket.disconnect() // 컴포넌트 언마운트 시 연결 종료
        }
    }, [])

    const sendMessage = (message: string) => {
        socket.emit('sendMessage', message);
      };
    
      return (
        <div>
          {/* 채팅 화면 및 입력 폼 */}
          <button onClick={() => sendMessage('send Message!')}>전송</button>
        </div>
      );
}

export default Chat
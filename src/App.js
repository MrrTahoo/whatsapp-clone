import React, { useEffect, useState } from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js"
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //fetching messages
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);


  useEffect(() => {
    //run this piece of code when the app component loads
    var pusher = new Pusher('3a4a249e28d6f3195273', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>


    </div>
  );
}

export default App;

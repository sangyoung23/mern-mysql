import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Join from "./pages/Join.tsx";
import Chat from "./pages/Chat.tsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

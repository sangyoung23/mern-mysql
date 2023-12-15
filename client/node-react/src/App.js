import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

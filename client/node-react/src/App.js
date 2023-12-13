import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add.tsx";
import Messages from "./pages/Messages.tsx";
import Update from "./pages/Update.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Messages />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/notfound.js";
import NoteState from "./contex/notes/notestate.js";
import Alert from "./components/alert.js";
import Login from "./components/Login.js";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        {/* <Alert alert="hello"/> */}
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="/notfound" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;

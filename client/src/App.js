import Home from "./components/Home";
import StoreCard from "./components/StoreCard";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Directory from "./components/Directory";
import Directory2 from "./components/Directory2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="directory" element={<Directory />} />
          <Route path="about" element={<About />} />
          <Route path="find" element={<StoreCard />} />
          <Route path="directory2" element={<Directory2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

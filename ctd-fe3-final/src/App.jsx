import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/src/Routes/Contact.jsx" element={<Contact />} />
              <Route path="/src/Routes/Detail.jsx" element={<Detail />} />
              <Route path="/src/Routes/Favs.jsx" element={<Favs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

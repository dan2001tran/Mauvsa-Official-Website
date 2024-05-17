import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Members from "./Pages/Members";
import Events from "./Pages/Events";
import Sponsors from "./Pages/Sponsors";
import Contact from "./Pages/Contact";
import Root from "./Common/Root";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Root component={<Home />} />} />
          <Route path="/members" element={<Root component={<Members />} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

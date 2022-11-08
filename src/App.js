import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";

import "./css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/listado" element={<Listado />} />
          <Route exact path="/detalle" element={<Detalle />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

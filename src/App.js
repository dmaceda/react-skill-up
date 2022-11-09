import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

import "./css/app.css";
import "./css/bootstrap.min.css";
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const addOrRemoveFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const image = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    console.log(overview);
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            exact
            path="/listado"
            element={<Listado addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route exact path="/detalle" element={<Detalle />} />
          <Route
            exact
            path="/resultados"
            element={<Resultados addOrRemoveFavs={addOrRemoveFavs} />}
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
